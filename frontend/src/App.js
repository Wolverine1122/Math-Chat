import React, { useState, useRef, useEffect } from "react";

import Modal from "./modal";

function App() {
  const [state, setState] = useState("");
  const [messages, setMessages] = useState([]);
  const [nameModal, setNameModal] = useState(false);
  const [name, setName] = useState("Anonim");
  const ws = useRef(null);
  useEffect(() => {
    ws.current = new WebSocket("ws://192.168.1.97:3000");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    ws.current.onmessage = (event) => {
      setMessages((prev) => {
        return [...prev, JSON.parse(event.data)];
      });
    };
    return () => {
      ws.current.close();
    };
  }, []);
  return (
    <div>
      <button
        class="waves-effect waves-light btn"
        style={{
          margin: "20px",
        }}
        onClick={() => {
          setNameModal(true);
        }}
      >
        Set name
      </button>
      <Modal
        open={nameModal}
        onClose={() => {
          setNameModal(false);
        }}
        rememberName={(thisName) => {
          setName(thisName);
        }}
      ></Modal>
      <div class="row">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
          class="col s6"
        >
          {messages
            .filter((message) => {
              return message.outter;
            })
            .map((message) => {
              return (
                <p>
                  from: {message.name} {message.data}
                </p>
              );
            })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "20px",
          }}
          class="col s6"
        >
          {messages
            .filter((message) => {
              return !message.outter;
            })
            .map((messages) => {
              return <p>{messages.data}</p>;
            })}
        </div>
      </div>
      <form
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          left: "0",
          padding: "20px",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          setMessages((prev) => {
            return [...prev, { data: state, outter: false }];
          });
          setState("");
          ws.current.send(
            JSON.stringify({ name: name, data: state, outter: true })
          );
        }}
      >
        <input
          onChange={(event) => {
            setState(event.target.value);
          }}
          value={state}
        ></input>
        <button class="waves-effect waves-light btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;

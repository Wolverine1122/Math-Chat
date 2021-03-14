import React, { useState, useRef, useEffect } from "react";

import Modal from "./modal";

function App() {
  const [state, setState] = useState("");
  const [messages, setMessages] = useState([]);
  const [nameModal, setNameModal] = useState(false);
  const ws = useRef(null);
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:3000");
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
      ></Modal>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setMessages((prev) => {
            return [...prev, { name: "Me", data: state, outter: false }];
          });
          setState("");
          ws.current.send(
            JSON.stringify({ name: "Vasilii", data: state, outter: true })
          );
        }}
      >
        <input
          onChange={(event) => {
            setState(event.target.value);
          }}
          value={state}
        ></input>
        <button type="submit">Click me</button>
      </form>
      {messages.map((message) => {
        return message.outter ? (
          <p>
            {message.name}: {message.data}
          </p>
        ) : (
          <p>Me: {message.data}</p>
        );
      })}
    </div>
  );
}

export default App;

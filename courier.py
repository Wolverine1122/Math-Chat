from trycourier import Courier

client = Courier(auth_token="dk_prod_DM3TSDRZFGMA8DP389FSG1ZTDG4M")

resp = client.send(
    event="R873XWW5AT4BDQQM8E416D77BQ7B",
    recipient="Behzod",
    profile={
      "discord": {
        "user_id": "680619300050174023"
      }
    },
    data={
      "favoriteAdjective": "awesomeness"
    }
)

print(resp['messageId'])

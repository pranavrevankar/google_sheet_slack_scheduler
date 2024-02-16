This Google script fetches the text from google sheet and sends it to Slack though a Slack app. 
Creator - Pranav Revankar
Prerequisites - Create a Slack App with permissions - chat:write (to Send messages on the user’s behalf)
and incoming-webhook (to Post messages to specific channels in Slack)
Use the following code and create a google script from a google sheet.

This function will receive each text input from cell A2 till Last row and pass this text into the function sendMessage

//This Google script fetches the text from google sheet and sends it to Slack though a Slack app. 
//Creator - Pranav Revankar
//Prerequisites - Create a Slack App with permissions - chat:write (to Send messages on the user’s behalf)
//and incoming-webhook (to Post messages to specific channels in Slack)
//Use the following script to create a google script from a google sheet.

//This function will receive each text input from cell A2 till Last row 
// and pass this text into the function sendMessage
function myFunction(){
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheets = ss.getActiveSheet();
 var last_row = sheets.getLastRow();
 var i;
  for(i=1; i<last_row;i++){
   sendMessage(sheets.getRange(i+1,1,1).getValue());
  }  
}

//Function to send message to slack through a Slack App. 
//You will need to create a Slack app first
function sendMessage(input) {

  var url = "https://slack.com/api/chat.postMessage";
  var payload =
      {
        "channel" : "channel_id",
        "text" : input,
      };
  
  var header = 
      {
        "Authorization" : "Bearer xoxp-app-token",
      };
  
  var options =
      {
        "method"  : "POST",
        'contentType': 'application/json',
        "headers" : header,        
        "payload" : JSON.stringify(payload),
      };

  var result = UrlFetchApp.fetch(url, options);
 }

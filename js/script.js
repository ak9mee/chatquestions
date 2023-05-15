// Define the bot's responses to each question
var responses = {
  1: "Our hours are 9am to 5pm, Monday through Friday.",
  2: "Our return policy allows for returns within 30 days of purchase, with a receipt.",
  3: "You can contact our customer support team by phone at 1-800-555-5555 or by email at support@example.com."
};

// Add a new message to the chat log
function addToChatLog(sender, message) {
  var chatLog = document.querySelector(".chatlog");
  var newMessage = document.createElement("p");
  newMessage.classList.add(sender);
  newMessage.textContent = message;
  chatLog.appendChild(newMessage);
}

// Generate a response from the bot based on the selected question
function getBotResponse(question) {
  var response = responses[question];
  if (response) {
    addToChatLog("bot", response);
  } else {
    addToChatLog("bot", "I'm sorry, I don't understand that question.");
  }
}

// Handle the "Send" button click
function send() {
  var dropdown = document.getElementById("dropdown");
  var question = dropdown.options[dropdown.selectedIndex].value;
  var userInput = document.getElementById("userinput").value;
  addToChatLog("user", userInput);
  getBotResponse(question);
  document.getElementById("userinput").value = "";
}

document.getElementById("userinput").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("button").click();
  }
});

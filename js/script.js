const questions = [
  {
    text: "What is your name?",
    response: "My name is ChatGPT. How can I assist you?"
  },
  {
    text: "What is your favorite color?",
    response: "As an AI, I don't have the ability to have preferences."
  },
  {
    text: "Can you help me with JavaScript?",
    response: "Sure! What do you need help with?"
  }
];

function send() {
  const input = document.getElementById("userinput");
  const message = input.value.trim();

  if (message) {
    const chatlog = document.querySelector(".chatlog");
    const userMessage = document.createElement("p");
    userMessage.classList.add("user");
    userMessage.textContent = message;
    chatlog.appendChild(userMessage);

    const response = document.createElement("p");
    response.classList.add("bot");

    for (let i = 0; i < questions.length; i++) {
      if (message.toLowerCase().includes(questions[i].text.toLowerCase())) {
        response.textContent = questions[i].response;
        break;
      } else {
        response.textContent = "I'm sorry, I didn't understand your question.";
      }
    }

    chatlog.appendChild(response);
    input.value = "";
    chatlog.scrollTop = chatlog.scrollHeight;
  }
}

document.getElementById("userinput").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("button").click();
  }
});

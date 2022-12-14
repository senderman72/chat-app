async function getMessages() {
  const response = await fetch("http://localhost:3000/messages");
  const messages = await response.json();

  const container = document.getElementById("message-container");
  container.innerHTML = "";

  for (const message of messages) {
    console.log(message);
    const li = document.createElement("li");
    li.innerText = message.text;
    container.appendChild(li);
  }
}

const input = document.getElementById("input");
const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  await fetch("http://localhost:3000/message", {
    body: JSON.stringify({
      text: input.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  input.value = "";
  getMessages();
});

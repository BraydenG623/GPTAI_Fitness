const chatLog = document.getElementById("chat-log");
const form = document.querySelector("form");
const intermission = document.getElementById("intermission");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Capture data from form
  const age = document.getElementById("age").value;
  const experience = document.getElementById("experience").value;
  const intensity = document.getElementById("intensity").value;
  const rest = document.getElementById("rest").value;
  const length = document.getElementById("length").value;
  const goals = document.getElementById("goals").value;
  const extra = document.getElementById("extra").value;

  // Create a data object
  const data = {
    age,
    experience,
    intensity,
    rest,
    length,
    goals,
    extra,
  };

  // Show the intermission message
  intermission.style.display = "block";

  // Make the fetch request to the server
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json()) // Parse the response as JSON
    .then((data) => {
      // Log the response by
      // Hide intermission message
      intermission.style.display = "none";

      // Append the message to the chat log
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `<p>${data.chatCompletion.content}</p>`;
      chatLog.appendChild(messageElement);
    })
    .catch((error) => {
      // Hide intermission message and show an error
      intermission.style.display = "none";
      console.error("Error:", error);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  const text = document.createTextNode("Hello World");
  div.className = "root";
  div.appendChild(text);
  document.body.appendChild(div);
});

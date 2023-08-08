const socket = io();
const form = document.getElementById("msg-box");
const t = document.getElementById("typing");
const msg = document.getElementById("msg");

const addId = (id) => {
  const uid = document.getElementById("uid");
  uid.innerText = id;
};

const sendMessage = (content) => {
  const list = document.getElementById("list");
  const newList = document.createElement("li");
  newList.innerText = content;
  newList.classList.add("sent");
  list.append(newList);
};

const addMessage = (content) => {
  const list = document.getElementById("list");
  const newList = document.createElement("li");
  newList.innerText = content;
  newList.classList.add("received");
  list.append(newList);
};

const isTyping = () => {
  socket.emit("typing", { id: uid.innerText });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (msg.value !== "") {
    socket.emit("message", msg.value.trim());
    sendMessage(msg.value);
    msg.value = "";
    window.scrollTo(0, 100000);
  }
});

msg.addEventListener("input", () => {
  isTyping();
});

socket.on("message", (obj) => {
  addMessage(obj.data);
  window.scrollTo(0, 100000);
});

socket.on("typing", (id) => {
  //   if (uid.innerText !== id)
  t.innerText = `${id} is typing...`;

  setTimeout(() => {
    t.innerText = "";
  }, 2000);
});

socket.on("id", (id) => {
  addId(id);
});

socket.on("notice", (id) => {
  console.log(`${id} left the chat`);
});

function sendMessage(e) {
    e.preventDefault();
    console.log("testing the contact us form");
}

let Form1 = document.querySelector("#form");
Form1.addEventListener("submit", sendMessage);
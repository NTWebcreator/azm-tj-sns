var websocket = new WebSocket("wss://didactic-space-enigma-7vv9px9v7w5rf9g7-8080.app.github.dev/");
websocket.addEventListener("message",
(data)=>{
    console.log(data.data);
})
document.getElementById("send").addEventListener("click",
(e)=>{
    websocket.send("hello!")
});

let chatbox = document.getElementById("chatbox");

function sendMessage() {
    let inputbox = document.getElementById("user-input").value;
    if (inputbox === "") return;

    let chatbox = document.getElementById("chatbox");
    if (!chatbox) {
        console.error("chat-box element not found!");
        return;
    }
    

    let userMessage = `<p class="user-message">${inputbox}</p>`;
    chatbox.innerHTML += userMessage;
    let botResponse = getBotResponse(inputbox)
    let botMessage = `<p class="bot-message">${botResponse}</p>`
    chatbox.innerHTML += botMessage
    chatbox.scrollTop = chatbox.scrollHeight
    savechat()
}

function getBotResponse(input)
{
    let inputboxvalue =input.toLowerCase()
    console.log(inputboxvalue)
    if(inputboxvalue.includes("hello")||inputboxvalue.includes("hi"))
    {
        return "hello! how can i assist you today?"
    }
    else if(inputboxvalue.includes("how are you")||inputboxvalue.includes("are you fine")||inputboxvalue.includes("are you fine")||inputboxvalue.includes("are you okay"))
    {
        return"I'm just a bot,but i'm doing great!"
    }
    else if(inputboxvalue.includes("your name")||inputboxvalue.includes("name"))
    {
        return "I'm chatbot,your virtual assistant."
    }
    else if(inputboxvalue.includes("bye"))
    {
       return "Goodbye! have a great day"
    }
    else
    {
        return "I'm not sure to respond to that.try asking somthing else!"
    }

}
window.onload = function()
{
    let chatbox = document.getElementById("chatbox");
    let chathistory = localStorage.getItem("chathistory")
    if(chathistory)
    {
        chatbox.innerHTML = chathistory
    }
}
function savechat()
{
    let chatbox = document.getElementById("chatbox").innerHTML;
    localStorage.setItem("chathistory",chatbox)
    chatbox.innerHTML = ` <p class="bot-message">🤗 hello</p>`
}

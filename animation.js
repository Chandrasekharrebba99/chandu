
var loader = document.getElementById("preloader");


function myFunction(){
    loader.style.display = "none";
}

gsap.registerPlugin(ScrollTrigger);



gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        toggleActions: "restart pause none pause",
        scrub: true
    },
    pin: true,
    x: window.innerWidth-350,
    rotation: 37,
    duration: 3
});

gsap.to(".box234", {
    scrollTrigger: {
        trigger: ".box234",
        toggleActions: "restart pause none pause",
        scrub: true
    },
    pin: true,
    x: window.innerWidth-350,
    rotation: 37,
    duration: 3
});

gsap.to(".box23", {
    scrollTrigger: {
        trigger: ".box23",
        toggleActions: "restart pause none pause",
        scrub: true
    },
    pin: true,
    x: window.innerWidth-350,
    rotation: 37,
    duration: 3
});

gsap.to(".box245", {
    scrollTrigger: {
        trigger: ".box245",
        toggleActions: "restart pause none pause",
        scrub: true
    },
    pin: true,
    x: window.innerWidth-350,
    rotation: 37,
    duration: 3
});
gsap.to(".box2459", {
    scrollTrigger: {
        trigger: ".box2459",
        toggleActions: "restart pause none pause",
        scrub: true
    },
    pin: true,
    x: window.innerWidth-350,
    rotation: 37,
    duration: 3
});
//toggleAction:play,pause,resume,reverse,restart,reset,complete,none
//scrub:true or a number in seconds
let audio = new Audio("./msgsent.wav");
let audio2 = new Audio("./reciveamsg.mp3");
let messageareael = document.querySelector(".message-area");
let sendbtn = document.querySelector(".btn");
let inputid = document.getElementById("inputid");
let chatboxstartel = document.querySelector(".chatboxstart");
let bgcontel = document.querySelector(".msg-bg-cont");

chatboxstartel.addEventListener("click", function modefy() {
    bgcontel.classList.toggle("dontshow");
    
})

const responceobj = {
    hello: "Hi Welcome to my page",
    hey: "Hi How you doing",
    help: "How may I assist you",
    hi: "Hi there! Welcome to my projects",
    name: "This is a bot",
    number:"6302888846",
    email:"chandui17cy028@gmail.com",
    gmail:"chandui17cy028@gmail.com",
    mail:"chandui17cy028@gmail.com"

}

function sendandreply() {

    if (inputid.value !== "") {
        sendmessage();
        let reply = (responceobj[inputid.value.toLowerCase()]);
        console.log(reply)
        reply = reply + "";
        if (reply !== "undefined") {
            setTimeout(function() {
                replymessege(reply);
                setScrollpostion();
            }, 700);
            inputid.value = "";
        }
        if(reply == "undefined"){
            setTimeout(function() {
                replymessege("This is just a prototype mail me to chandui17cy028@gmail.com");
                setScrollpostion();
            }, 700);
            inputid.value = "";
        }
        inputid.value = "";
        setScrollpostion();
    }
}
sendbtn.addEventListener("click", (event) =>{sendandreply();}) ;

inputid.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        sendandreply();
        

    }
});

function sendmessage() {
    let cont = document.createElement("div");
    cont.classList.add("messagecont");
    let msgpar = document.createElement("p");
    msgpar.textContent = inputid.value;
    msgpar.classList.add("parael");
    cont.appendChild(msgpar);
    messageareael.appendChild(msgpar);
    audio.play();
}
const response = (inputid) => {
    return responceobj[inputid.value];
}


function replymessege(reply) {
    let msgpar1 = document.createElement("p");
    msgpar1.textContent = reply;
    msgpar1.classList.add("replycl");
    messageareael.appendChild(msgpar1);
    audio2.play();

}
const setScrollpostion = () => {
    if (messageareael.scrollHeight > 0) {
        messageareael.scrollTop = messageareael.scrollHeight;
    }
}


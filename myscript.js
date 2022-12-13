//navbar getElementById
let ABOUTEL = document.getElementById("ABOUTid");
let SKILLSID = document.getElementById("SKILLSID");
let PROJECTSEL = document.getElementById("PROJECTSid");
let EDUCATIONel = document.getElementById("EDUCATIONid");
let CERTIFICATIONSid = document.getElementById("CERTIFICATIONSid");
let FOLLOWel = document.getElementById("FOLLOWid");

let Contactsection = document.getElementById("Contactsection");
let contskillid = document.getElementById("contskillid");
let ProjectsSection = document.getElementById("ProjectsSection");
let section2el = document.getElementById("aboutsection");
let EDUCATIONsection = document.getElementById("EDUCATIONsection");
let sectionCertificationsid =document.getElementById("sectionCertificationsid");
//let btn1= document.getElementById("btn1");
let hiremebtn =document.getElementById("hiremebtnid");
let Hiremecont = document.getElementById("Hiremecont");


let imageslist = [1,2,3,4,5,6,7,8,9];
let skillnames = ["C","C++","Python","Javascript","Node.js","HTML","CSS","BOOTSTRAP","SQL"];
FOLLOWel.addEventListener('click',function(){
  console.log("Aboutclick");
   const s1coords = Contactsection.getBoundingClientRect();
   window.scrollTo({
     left:s1coords.left +window.pageXOffset,
     top:s1coords.top+window.pageYOffset,
     behavior:'smooth',
   })
   //section2el.scrollIntoView({behavior:'smooth'});
   //console.log(s1coords);
});
CERTIFICATIONSid.addEventListener('click',function(){
  console.log("Aboutclick");
   const s1coords = sectionCertificationsid.getBoundingClientRect();
   window.scrollTo({
     left:s1coords.left +window.pageXOffset,
     top:s1coords.top+window.pageYOffset,
     behavior:'smooth',
   })
   //section2el.scrollIntoView({behavior:'smooth'});
   //console.log(s1coords);
});
ABOUTEL.addEventListener('click',function(){
  console.log("Aboutclick");
   const s1coords = section2el.getBoundingClientRect();
   window.scrollTo({
     left:s1coords.left +window.pageXOffset,
     top:s1coords.top+window.pageYOffset,
     behavior:'smooth',
   })
   //section2el.scrollIntoView({behavior:'smooth'});
   //console.log(s1coords);
});
EDUCATIONel.addEventListener('click',function(){
  console.log("Aboutclick");
   const s1coords = EDUCATIONsection.getBoundingClientRect();
   window.scrollTo({
     left:s1coords.left +window.pageXOffset,
     top:s1coords.top+window.pageYOffset,
     behavior:'smooth',
   })
   //section2el.scrollIntoView({behavior:'smooth'});
   //console.log(s1coords);
});
PROJECTSEL.addEventListener('click',function(){
  console.log("Aboutclick");
   const s1coords = ProjectsSection.getBoundingClientRect();
   window.scrollTo({
     left:s1coords.left +window.pageXOffset,
     top:s1coords.top+window.pageYOffset,
     behavior:'smooth',
   })
   //section2el.scrollIntoView({behavior:'smooth'});
   //console.log(s1coords);
});
SKILLSID.addEventListener('click',function(){
  console.log("Aboutclick");
   const s2coords = contskillid.getBoundingClientRect();
   window.scrollTo({
     left:s2coords.left +window.pageXOffset,
     top:s2coords.top+window.pageYOffset,
     behavior:'smooth',
   })
   //section2el.scrollIntoView({behavior:'smooth'});
   //console.log(s1coords);
});
let c = 0;
let skillel = document.getElementById("skillboxid");
for (let item of imageslist){
   c+=1;

   let newskillel = document.createElement("div");
   let imageskill = document.createElement("img");
   let brel = document.createElement("br");
   let skillpara = document.createElement("p");
   skillpara.textContent = skillnames[item-1];
   skillpara.style.color = "black";

   imageskill.src = "images/skill/"+item+".png";
   newskillel.classList.add("skillbox","div","d-flex","flex-column","justify-content-center");
   imageskill.classList.add("imageskill");
   newskillel.setAttribute("data-aos","fade-right")
   newskillel.appendChild(imageskill);
   newskillel.appendChild(skillpara);
   skillel.appendChild(newskillel);
   let counter = 0;
  let uniqueId = setInterval(function() {
    counter+=1;
    console.log(counter);
    if(counter === 2){
      clearInterval(uniqueId);
    }

  }, 200);


   console.log(item);
}
let callmebtn = document.createElement("button")
hiremebtn.addEventListener("click",function(){
  callmebtn.textContent = "";
  callmebtn.textContent="CALL NOW";
  callmebtn.classList.add("hiremebtn","btn")
  Hiremecont.appendChild(callmebtn);

})
let Mobilenumel = document.createElement("p");

callmebtn.addEventListener("click",function(){
  Mobilenumel.textContent = "";
  Mobilenumel.style.color ="black";
  Mobilenumel.textContent = "Mobile:no-+916302888846";
  Hiremecont.appendChild(Mobilenumel);
})



//NAvbar


$(document).ready(function(){
  var docEl = $(document),
      headerEl = $('header'),
      headerWrapEl = $('.wrapHead'),
      navEl = $('nav'),
      linkScroll = $('.scroll');
  
  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });
  
  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 500);
   });
});
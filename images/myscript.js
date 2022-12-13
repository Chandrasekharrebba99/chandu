let section2el = document.getElementById("section--2");
let btn1= document.getElementById("btn1");

btn1.addEventListener('click',function(){
   const s1coords = section2el.getBoundingClientRect();
   section2el.scrollIntoView({behavior:'smooth'});
})

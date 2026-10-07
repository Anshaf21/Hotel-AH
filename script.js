const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex"});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<=850)nav.style.display="none"}));

const reveals=document.querySelectorAll(".card,.food,.place,.sea-grid article,.hero-card");
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("show");observer.unobserve(entry.target)}})
},{threshold:.12});
reveals.forEach(el=>{el.classList.add("reveal");observer.observe(el)});

const style=document.createElement("style");
style.textContent=".reveal{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}.reveal.show{opacity:1;transform:none}";
document.head.appendChild(style);

const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
const navLinks=document.querySelectorAll(".nav a");
const progress=document.querySelector(".scroll-progress");
const revealElements=document.querySelectorAll(".reveal");
const year=document.querySelector("#year");

if(year) year.textContent=new Date().getFullYear();

menuToggle?.addEventListener("click",()=>{
    const isOpen=menuToggle.classList.toggle("active");
    nav.classList.toggle("open");
    document.body.classList.toggle("menu-open",isOpen);
    menuToggle.setAttribute("aria-expanded",String(isOpen));
});

navLinks.forEach(link=>link.addEventListener("click",()=>{
    menuToggle?.classList.remove("active");
    nav?.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded","false");
}));

function updateScrollProgress(){
    const scrollable=document.documentElement.scrollHeight-window.innerHeight;
    const amount=scrollable>0?window.scrollY/scrollable:0;
    if(progress) progress.style.transform=`scaleX(${amount})`;
}
window.addEventListener("scroll",updateScrollProgress,{passive:true});
updateScrollProgress();

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
},{threshold:.12,rootMargin:"0px 0px -40px 0px"});

revealElements.forEach((element,index)=>{
    element.style.transitionDelay=`${Math.min(index*40,180)}ms`;
    observer.observe(element);
});

document.querySelectorAll(".uiux-image img").forEach(img=>{
    img.addEventListener("load",()=>img.closest(".uiux-image")?.classList.add("has-image"),{once:true});
});

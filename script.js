// Loader
window.addEventListener("load", function(){
    document.getElementById("loader").style.display="none";
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
    cursor.style.top = e.clientY+"px";
    cursor.style.left = e.clientX+"px";
});

// Scroll Reveal
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});

// Skill Animation
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".progress").forEach(bar=>{
        const position = bar.getBoundingClientRect().top;
        if(position < window.innerHeight){
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});

// Keyboard Theme Switcher
let theme = 0;
document.addEventListener("keydown", function(e){
    if(e.key === "t" || e.key === "T"){
        theme++;
        if(theme === 1){
            document.body.className="light";
        }
        else if(theme === 2){
            document.body.className="neon";
        }
        else{
            document.body.className="";
            theme=0;
        }
    }
});
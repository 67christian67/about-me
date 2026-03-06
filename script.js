new Typed("#typing",{
strings:[
"Web Developer",
"Creative Coder",
"UI Designer",
"Future Software Engineer"
],
typeSpeed:60,
backSpeed:40,
loop:true
})

particlesJS("particles-js",{

particles:{
number:{value:90},
size:{value:3},
move:{speed:2},
line_linked:{
enable:true,
opacity:0.2
}
}

})

const bars=document.querySelectorAll(".bar div")

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const width=entry.target.getAttribute("data-width")
entry.target.style.width=width
}
})
})

bars.forEach(bar=>observer.observe(bar))

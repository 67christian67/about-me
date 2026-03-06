/* cursor glow */

const glow=document.querySelector(".cursor-glow")

document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px"
glow.style.top=e.clientY+"px"
})

/* scroll */

function scrollToSection(){

document.querySelector("#about").scrollIntoView({
behavior:"smooth"
})

}

/* reveal */

function reveal(){

let elements=document.querySelectorAll(".reveal")

elements.forEach(el=>{

let top=el.getBoundingClientRect().top
let windowHeight=window.innerHeight

if(top < windowHeight-100){

el.classList.add("active")

}

})

}

window.addEventListener("scroll",reveal)

/* typing */

const text=["I build websites.","I design UI.","I experiment with code."]

let word=0
let letter=0

const typing=document.querySelector(".typing")

function type(){

if(letter < text[word].length){

typing.textContent += text[word].charAt(letter)

letter++

setTimeout(type,80)

}else{

setTimeout(erase,1500)

}

}

function erase(){

if(letter>0){

typing.textContent=text[word].substring(0,letter-1)

letter--

setTimeout(erase,40)

}else{

word++
if(word>=text.length)word=0

setTimeout(type,200)

}

}

type()

/* stars */

const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.3

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

stars.forEach(s=>{

s.y+=s.speed

if(s.y>canvas.height)s.y=0

ctx.beginPath()

ctx.arc(s.x,s.y,s.size,0,Math.PI*2)

ctx.fillStyle="white"

ctx.fill()

})

requestAnimationFrame(animate)

}

animate()

/* easter egg */

let code=""

document.addEventListener("keydown",e=>{

code+=e.key

if(code.includes("christian")){

alert("Developer Mode Activated 🚀")

code=""

}

})

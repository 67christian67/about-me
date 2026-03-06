new Typed("#typing", {

strings:[
"Web Developer",
"Future Software Engineer",
"Building Cool Projects",
"Learning Something New Everyday"
],

typeSpeed:60,
backSpeed:40,
loop:true

})

function scrollProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
})

}

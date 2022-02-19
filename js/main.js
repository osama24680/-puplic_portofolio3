let barIcon=document.querySelector(".barIcon")
let nav_list=document.querySelector(".nav_list")

barIcon.addEventListener("click", () =>{
    barIcon.classList.toggle("uil-times")
    nav_list.classList.toggle("active")

})
window.onscroll = () =>{
    barIcon.classList.remove("uil-times")
    nav_list.classList.remove("active")
}
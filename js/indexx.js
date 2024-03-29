import { NAME_MASS, PROFESSION_MASS } from "./massives/module.js";


let title = document.querySelector(".title")
let card = document.querySelector(".person")
let btnGenerate = document.querySelector("#create")
let personItemMass = document.querySelectorAll(
    ".person-item")


 function random(min,max) {
    return Math.floor (Math.random()*(max-min)+min)
 }


btnGenerate.addEventListener("click",()=>{
    console.log("terra")
    title.style.opacity = 0;
    personItemMass[0].innerText = "Имя:"+ NAME_MASS[random(0,NAME_MASS.length)]
    personItemMass[2].innerText = "Профессия:"+ PROFESSION_MASS[random(0,PROFESSION_MASS.length)]
    setTimeout(() => {
         title.style.display = "none"
          card.style.display = "flex"
          setTimeout (() =>{

              card.style.opacity = 100
            },1000)
    }, 1000);   
})
console.log(personItemMass)
console.log(personItemMass [3])
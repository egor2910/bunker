// import { NAME_MASS, PROFESSION_MASS, HEALTH_MASS,FEAR_MASS, HOBBY_MASS } from "./massives/module.js";
const PROFESSION_MASS = ["Вахтер","Уборщик", "Инжинер", "Врач",
 "Убийца",]
 const NAME_MASS = ["Вова","Миша", "Тима",
 "Никита"]
 const HEALTH_MASS = ["туберкулез", "здоров как бык", "умирает", "нет правой руки", "деменция",
  "синдром Торета"]
 const FEAR_MASS = ["пауки", "тараканы", "высота", "темнота", "крысы", "клоуны", "замкнутые пространства"]
const HOBBY_MASS = ["чтение книг", "шахматист", "игрок", "боксер", "писатель", "ботаник", "грибник"]


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
    personItemMass[1].innerText = "Возраст:"+ [random(15,55)]
    personItemMass[2].innerText = "Профессия:"+ PROFESSION_MASS[random(0,PROFESSION_MASS.length)]
    personItemMass[3].innerText = "Стаж работы:"+ [random(0,15)]
    personItemMass[4].innerText = "Здоровье:"+ HEALTH_MASS[random(0,HEALTH_MASS.length)]
    personItemMass[5].innerText = "Плодовитость:"+ [random(0,10)]
    personItemMass[6].innerText = "Страхи:"+ FEAR_MASS[random(0,FEAR_MASS.length)]
    personItemMass[7].innerText = "Хобби:"+ HOBBY_MASS[random(0,HOBBY_MASS.length)]

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
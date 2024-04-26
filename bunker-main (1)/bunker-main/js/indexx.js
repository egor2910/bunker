import profession from "./massives/profession.js"
import nameMass from "./massives/name.js"
import { diseas } from "./massives/disease.js"

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
function ageFormat(age, min) {
    if (age%10 < 5 && age % 10 > 0 && (age > 20|| age < 10) ) {
        return ` ${age} ${age % 10 == 1 ? "год" : "года"}`
    }
    else {
        return age + " лет"
    }
}

btnGenerate.addEventListener("click",()=>{
    console.log("terra")
    title.style.opacity = 0;
    let age = random(0,80)
    personItemMass[0].innerText = "Имя:"+ nameMass[random(0,nameMass.length)]
    personItemMass[1].innerText = "Возраст: " + ageFormat(age)
    if (age > 14) {
        personItemMass[2].innerText = "Профессия:"+ profession[random(0,profession.length)]
    }
    else {
        personItemMass[2].innerText = "Профессия: Безработный"
        personItemMass[3].innerText = "Стаж работы:"+ ageFormat(age)
    }
    let workExp = random(0, age/ 2)
    personItemMass[3].innerText = "Стаж работы:"+ ageFormat(workExp)
    personItemMass[4].innerText = "Здоровье:"+ diseas[random(0,diseas.length)]
    personItemMass[5].innerText = "Плодовитость:"+ [random(1,3)]
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
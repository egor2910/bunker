let title = document.querySelector(".title")
let card = document.querySelector(".person")
let btnGenerate = document.querySelector("#create")

console.log(title,card,btnGenerate)
console.dir(title)
btnGenerate.addEventListener("click",()=>{
    console.log("terra")
    title.style.opacity = 0;
    setTimeout(() => {
         title.style.display = "none"
         card.style.opacity = 100
         card.style.display = "flex"
    }, 1000);
   
})
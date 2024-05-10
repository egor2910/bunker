let range = document.querySelector(".range")
let button = document.querySelector(".button")
let audio = document.getElementById("audio")
console.dir( audio);

button.onclick = () =>{
   if (audio.paused == true) {
    audio.play()
   }
   else {
    audio.pause()
   }
}
range.addEventListener("input", ()=>{
    console.log(range.value / 100);
    audio.volume = range.value / 100
}
)
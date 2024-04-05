let block = document.querySelectorAll(".block")
for (let i = 0; i < block.length; i++) {
    console.log(block[i]) ;
block[i].onclick = () => {
 console.log(block[i].classList.contains("active"))
 if (block[i].classList.contains("active")) {
    block[i].classList.remove("active") 
 } else{

    block[i].classList.add("active")
 }

}
block[i].addEventListener("mouseenter", () =>{
    if (block[i].classList.contains("active")) {
        block[i].classList.remove("active") 
     } else{
    
        block[i].classList.add("active")
     }

    })
}
       ;
block.forEach(element =>{
    element.addEventListener("mouseenter", () =>{
            if (element.classList.contains("active")) {
                element.classList.remove("active") 
             } else{
            
                element.classList.add("active")
             }
        
            })

})

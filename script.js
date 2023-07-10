let template = `<img src="block.jpg" alt="">`

const miming = document.getElementById("bottom")
const sam = document.getElementById("user")

for (let index = 0; index < 500; index++) {
    miming.innerHTML += template
}

let samX = sam.style.left 
const space = 30

document.addEventListener("keypress", event => {
    
    const pressedKey = event.key

    if (pressedKey === 'a') {
        samX -= space
        sam.style.transform = `translateX(${samX}px)`
    }
    
    if (pressedKey === 'd') {
        samX += space
        sam.style.transform = `translateX(${samX}px)`  
    }
    
})

document.addEventListener("keyup", event => {
    
    const pressedKey = event.key

    if (pressedKey === 'w') {
        sam.style.bottom = (parseInt(sam.style.bottom) + 200) + "px"
        setTimeout(() => {
            sam.style.bottom = 0 + "px"
        }, 200);
    }
        
})

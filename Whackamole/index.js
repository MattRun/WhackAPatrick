const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
//array for all holes
const scoreE1 = document.querySelector('.score span')
let score = 0
//score starts at 0

const sound = new Audio('/images/patricksmash.mp3')

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null
    // generates random hole for image to pop up through

    const img = document .createElement('img')
    img.classList.add('mole')
    //adds image to each hole 
    img.src= '/images/patrickpre.png'

    img.addEventListener('click', () =>{
        score += 100
        //increase score by 100 for every hit
        sound.play()
        //sound plays when hit
        scoreE1.textContent = score
        img.src = '/images/patrickhit.png'
        //once hit new image replaces old
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
        //.5sec after hit then moves
    })

    hole.appendChild(img)

        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1500)
        // timer 1.5sec before image moves
}
run()



window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"

})
window.addEventListener('mousedown', () =>{
    cursor.classList.add('active')
    //once clicked image of hammer rotates 45degrees(done in css)
})
window.addEventListener('mouseup', () =>{
    cursor.classList.remove('active')
    //once realease click image of hammer goes back to original postion
})
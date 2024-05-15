//VARIABLES
let openBtn = document.getElementById('open-btn')
let closeBtn = document.getElementById('close-btn')
let modal = document.getElementById('modal-container')

//EVENTS
openBtn.addEventListener('click', function() {
    modal.style.display = `block`
    console.log(modal.style.animationName)
})
closeBtn.addEventListener('click' , function(){
    modal.style.display = `none`
})
window.addEventListener('click', function(e){
    if(e.target === modal ) {
        modal.style.display = `none`
    }
})

//FUCTIONS
setTimeout(() => {
    slowLoad()
},1000)

function slowLoad () {
        let body1 = document.querySelector('body')
        body1.style.backgroundImage = ` url(./img/project2.jpg)`
}

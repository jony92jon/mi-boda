document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 1000,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    })
});

const play = document. 
getElementById('play');

const audio = new Audio();
audio.src = "../audio/Juan Luis Guerra 440 – Vale La Pena.mp3"

play.addEventListener
('click', function(){
    if(audio.paused){
        audio.play()
        
    }else {
        audio.pause()
        
    }
})


const boton = 
document.querySelector("#boton");
const modal =
document.querySelector("#modal");
const cerrar =
document.querySelector("#cerrar");

boton.addEventListener("click", ()=>{
    modal.showModal();
})
cerrar.addEventListener("click", ()=>{
    modal.close();
})

       
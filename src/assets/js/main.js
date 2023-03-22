$(document).ready(function(){

    const elementosCarousel = document.querySelectorAll(".carousel")
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        shift: 5,
        padding: 1,
        numVisible: 10
    })

    let elementosCarousel2 = document.querySelectorAll(".carousel2")
    M.Carousel.init(elementosCarousel2, {
        duration: 150,
        shift: 5,
        padding: 1,
        numVisible: 10
    })

});
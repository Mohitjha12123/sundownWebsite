
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let mj = document.querySelector("#elem-container")
console.log(mj)
let fixed = document.querySelector("#fixed-img")
mj.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})

mj.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
console.log(elems)
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let image = e.getAttribute("data-image")
        console.log(image)
        fixed.style.backgroundImage = `url(${image})`
    })

})


function myswiperani() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,

    });
}
myswiperani()


let loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"

}, 3000)


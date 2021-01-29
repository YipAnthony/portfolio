let translate = [];
let title;
let parallaxContainer;
let parallaxContainerHeight;
let arrowDown;
setTimeout(() => {
    translate = document.querySelectorAll('.translate');
    title = document.querySelector('.mainTitle');
    parallaxContainer = document.querySelector('.parallaxBackground')
    arrowDown = document.querySelector('.arrowDown')

    parallaxContainerHeight = parallaxContainer.offsetHeight;
}, 1000)

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    
    if (!title || !translate || !parallaxContainer || !parallaxContainerHeight || !arrowDown) return
    translate.forEach( element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`
    })

    title.style.opacity = - scroll/(parallaxContainerHeight / 2) + 1;   
    arrowDown.style.opacity = - scroll/(parallaxContainerHeight / 2) + 1;   
})
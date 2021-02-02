export default function parallaxExec (translate, parallaxContainer, arrowDown) {

    const parallaxContainerHeight = parallaxContainer.offsetHeight;

    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        
        translate.forEach( element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * speed}px)`
        })
    
        arrowDown.style.opacity = - scroll/(parallaxContainerHeight / 2) + 1;   
    })

}

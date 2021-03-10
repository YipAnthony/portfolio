export default function particleAnimation (canvas, group) {
    
  
    
    let particleArray = []

        //handle mouse
        const mouse = {
            x: null,
            y: null,
            radius: group === "title" ? .04 * window.innerWidth : .09 * window.innerWidth
        }
        // let ctx = canvasRef.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = 0.6* window.innerWidth;
        if (window.innerWidth > 1600) {
            canvas.height = 0.45* window.innerWidth;
        } else if (window.innerWidth > 1500) {
            canvas.height = 0.65* window.innerWidth;
        } else if (window.innerWidth <550) {
            canvas.height = 1 * window.innerWidth;
        } else if (window.innerWidth <700) {
            canvas.height = 0.9* window.innerWidth;
        }
        if (group === "title") { 
            canvas.height = 0.2* window.innerWidth;
            if (window.innerWidth > 1600) {
                canvas.height = 0.1 * window.innerWidth
            } else if (window.innerWidth > 1400) {
                canvas.height = 0.13 * window.innerWidth
            } else if (window.innerWidth > 1200) {
                canvas.height = 0.15 * window.innerWidth
            } else if (window.innerWidth <= 700) {
                canvas.height = 0.22 * window.innerWidth
            } else if (window.innerWidth <= 1200) {
                canvas.height = 0.18 * window.innerWidth
            } 
        }
        let onCanvas = true
        if (group === "title") {
            onCanvas = true
        }
        canvas.addEventListener('mousemove', (event) => {
            mouse.x = event.x + window.pageXOffset - canvas.offsetLeft;
            mouse.y = event.y + window.pageYOffset - canvas.offsetTop;
            onCanvas = true
        })
        canvas.addEventListener('touchmove', process_touchmove, false);
        function process_touchmove(ev) {
            // Set call preventDefault()
            ev.preventDefault();
        }
        canvas.addEventListener('pointerdown', (event) => {
            event.preventDefault();
            mouse.x = event.x + window.pageXOffset - canvas.offsetLeft;
            mouse.y = event.y + window.pageYOffset - canvas.offsetTop;
            onCanvas = true
        });
        canvas.addEventListener('pointermove', (event) => {
            
            mouse.x = event.x + window.pageXOffset - canvas.offsetLeft;
            mouse.y = event.y + window.pageYOffset - canvas.offsetTop;
            onCanvas = true
        });
        
        canvas.addEventListener('touchend', () => {
            mouse.x = 0;
            mouse.y = 0;
            onCanvas = false;
        })
        canvas.addEventListener('mouseup', () => {
            mouse.x = 0;
            mouse.y = 0;
            onCanvas = false;
        })
       
        canvas.addEventListener('mouseout', (event) => {
            mouse.x = 0;
            mouse.y = 0;
            onCanvas = false;
        })

        let ctx = canvas.getContext('2d')
        let multiplier = 1;
        let particleConnectionThickness = 1;
        if (window.innerWidth < 550) {
            particleConnectionThickness = 0.6
        }
        if (window.innerWidth < 400) {
            multiplier = 3;
        } else if (window.innerWidth < 500) {
            multiplier = 2.5;
        } else if (window.innerWidth < 600) {
            multiplier = 1.8;
        } else if (window.innerWidth < 850) {
            multiplier = 1.8;
        } 
        if (window.innerWidth > 1600) {
            canvas.width = window.innerWidth * .5
        } else if (window.innerWidth > 1400) {
            canvas.width = window.innerWidth * .65
        } else if (window.innerWidth > 1200) {
            canvas.width = window.innerWidth * .7
        } else if (window.innerWidth <= 550) {
            canvas.width = window.innerWidth 
        } else if (window.innerWidth <= 700) {
            canvas.width = window.innerWidth 
        }  else if (window.innerWidth <= 1200) {
            canvas.width = window.innerWidth * .7
        } 
        
        let textCoordinates;
        if (group === "title") {
            ctx.fillStyle = 'white'
            ctx.font = multiplier *  5/100 * 0.7 *  canvas.width + 'px Arial'
            ctx.fillText('SKILLS', multiplier *  0.065 * canvas.width,multiplier * 0.05 * canvas.width)

            ctx.strokeStyle = 'white'
            textCoordinates = ctx.getImageData(0, 0, 350, 200)
            
        } else {

            ctx.fillStyle = 'white'
            ctx.font = multiplier *  4/100 * 0.7 *  canvas.width + 'px Arial'
            ctx.fillText('FRONTEND', multiplier *  0.03 * canvas.width,multiplier * 0.05 * canvas.width)
            ctx.fillText('BACKEND',multiplier * 0.085 * canvas.width,multiplier * 0.125 * canvas.width)
            
            
            ctx.font = multiplier * 2/100 * 0.7 *  canvas.width + 'px Arial'
            ctx.fillText('HTML', multiplier *0.03 * canvas.width,multiplier * 0.065 * canvas.width)
            ctx.fillText('Javascript', multiplier *0.075 * canvas.width, multiplier *0.065 * canvas.width)
            ctx.fillText('CSS',multiplier * 0.145 * canvas.width,multiplier * 0.065 * canvas.width)
    
            ctx.fillText('React.js',multiplier * 0.03 * canvas.width,multiplier * 0.08 * canvas.width)
            ctx.fillText('React Native',multiplier * 0.09 * canvas.width,multiplier * 0.08 * canvas.width)
    
            ctx.fillText('Bootstrap', multiplier *0.03 * canvas.width, multiplier *0.095 * canvas.width)
            ctx.fillText('MaterialUI', multiplier *0.1 * canvas.width, multiplier *0.095 * canvas.width)
            
            
            ctx.fillText('Golang',multiplier * 0.06 * canvas.width,multiplier * 0.14 * canvas.width)
            ctx.fillText('NodeJS',multiplier * 0.11 * canvas.width,multiplier * 0.14 * canvas.width)
            ctx.fillText('Express',multiplier * 0.168 * canvas.width, multiplier *0.14 * canvas.width)
    
            ctx.fillText('MongoDB',multiplier * 0.124 * canvas.width, multiplier *0.155 * canvas.width)
            ctx.fillText('EJS', multiplier *0.1935 * canvas.width, multiplier *0.155 * canvas.width)
            ctx.fillText('Mongoose', multiplier *0.154 * canvas.width,multiplier * 0.17 * canvas.width)
            
            
            ctx.font =multiplier *2/100 * 0.7 * canvas.width + 'px Arial'
            ctx.fillText('Git - Webpack - Commandline', multiplier *0.03 * canvas.width, multiplier *0.19 * canvas.width)
            
    
            ctx.strokeStyle = 'white'
            textCoordinates = ctx.getImageData(0, 0, multiplier * 450, multiplier * 400)
        }

        class Particle {
            constructor(x,y) {
                this.x = x;
                this.y = y;
                this.size = 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }
    
            draw() {
                ctx.fillStyle = 'white'
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.closePath();
                ctx.fill()
            }
            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (group === "title") {
                    if (distance < mouse.radius) {
                        this.x += directionX;
                        this.y += directionY;
                    } else {
                        if (this.x !== this.baseX) {
                            let dx = this.x - this.baseX;
                            this.x -= dx/10;
                        }
                        if (this.y !== this.baseY) {
                            let dy = this.y - this.baseY;
                            this.y -= dy/10
                        }
                    }
                } else {
                    // if (!onCanvas) {
                    //     this.x -= directionX;
                    //     this.y -= directionY;
                    // }
                    if (distance < mouse.radius) {
                        this.x -= directionX;
                        this.y -= directionY;
                    } else {
                        if (this.x !== this.baseX) {
                            let dx = this.x - this.baseX;
                            this.x -= dx/10;
                        }
                        if (this.y !== this.baseY) {
                            let dy = this.y - this.baseY;
                            this.y -= dy/10
                        }
                    }

                }
            }
        }

        function init() {
            particleArray = [];
            let y2 = textCoordinates.height;
            for (let y = 0; y < y2; y++) {
                let x2 = textCoordinates.width;
                for (let x = 0; x < x2; x++) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                        let positionX = x;
                        let positionY = y;
                        particleArray.push(new Particle(positionX * 4/multiplier, positionY * 4/multiplier))

                    }      
                }
            }
        }
        
        init();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i =0; i < particleArray.length; i++ ) {
                particleArray[i].draw();
                particleArray[i].update();
            }
            if (group === "title") {
                connect()
            }
            requestAnimationFrame(animate)
        }
        animate();

        function connect() {
            for (let a = 0; a < particleArray.length; a++) {
                for (let b = a; b < particleArray.length; b++){
                    let dx = particleArray[a].x - particleArray[b].x;
                    let dy = particleArray[a].y - particleArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < multiplier *  1.3/100 * 0.7 * particleConnectionThickness * canvas.width ) {
                        ctx.strokeStyle = "white";
                        ctx.beginPath();
                        ctx.moveTo(particleArray[a].x, particleArray[a].y);
                        ctx.lineTo(particleArray[b].x, particleArray[b].y)
                        ctx.stroke();
                    }
                }
            }
        }
        if (window.innerWidth > 1000) {
            window.addEventListener('resize', ()=> {
                window.location.reload()
            })

        }
}
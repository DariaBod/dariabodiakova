 const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function random(min,max){ return Math.random()*(max-min)+min; }

    let lights = [];
    const speedFactor = 70; // чем больше, тем быстрее
    for(let i=0;i<20;i++){
        lights.push({
            x: random(0,canvas.width),
            y: random(0,canvas.height),
            r: random(100,300),
            alpha: random(0.05,0.15),
            dx: random(-0.02,0.02) * speedFactor,
            dy: random(-0.01,0.01) * speedFactor
        });
    }

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        lights.forEach(l=>{
            let grad = ctx.createRadialGradient(l.x,l.y,l.r*0.2,l.x,l.y,l.r);
            grad.addColorStop(0, `rgba(90,200,250,${l.alpha})`);
            grad.addColorStop(1, `rgba(90,200,250,0)`);
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(l.x,l.y,l.r,0,Math.PI*2);
            ctx.fill();
            l.x += l.dx;
            l.y += l.dy;
            if(l.x>canvas.width||l.x<0) l.dx*=-1;
            if(l.y>canvas.height||l.y<0) l.dy*=-1;
        });
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize',()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Scroll down arrow
    document.getElementById('scroll-down').addEventListener('click', () => {
        const about = document.getElementById('about');
        about.scrollIntoView({behavior: "smooth"});
    });

    // Mail button scroll
    document.getElementById('scroll-contact').addEventListener('click', () => {
        const footer = document.querySelector('footer.footer');
        footer.scrollIntoView({behavior: "smooth"});
    });
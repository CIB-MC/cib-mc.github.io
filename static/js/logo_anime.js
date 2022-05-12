document.addEventListener('DOMContentLoaded', function() {
    const logo = new Image();
    logo.src = './static/image/logo.png';
    const cvs = document.getElementById('logo_anime');
    if (cvs == undefined) return;
    const ctx = cvs.getContext('2d');
    drawAnimation(ctx, logo);
    setInterval(
        () => {
            drawAnimation(ctx, logo);
        },
        1000 / 5
    );
});

function drawAnimation(ctx, logo) {
    ctx.fillStyle = '#006400';
    ctx.fillRect(0, 0, 800, 300);
    ctx.filter = 'blur(1.1px)';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = "normal 30px 'Major Mono Display', monospace";
    for (let i = 0; i < 12; i++) {
        ctx.fillText(getBinaryString(60), -5, 16 + 30 * i);
    }
    ctx.filter = 'none';
    ctx.drawImage(
        logo,
        0,0,
        600, 600,
        255, 5,
        290, 290
    );
}

function getBinaryString(length) {
    let txt = '';
    for (let i = 0; i < length; i++) {
        txt = txt + (Math.random() < 0.5 ? '0' : '1');
    }
    return txt;
}
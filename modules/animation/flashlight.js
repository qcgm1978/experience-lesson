function generateFlashLight(canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    var cw = $(canvasId).width();
    var ch = $(canvasId).height();

    function reOffset() {
        var BB = canvas.getBoundingClientRect();
        offsetX = BB.left;
        offsetY = BB.top;
    }

    var offsetX, offsetY;
    reOffset();
    window.onscroll = function (e) {
        reOffset();
    }
    window.onresize = function (e) {
        reOffset();
    }
    $("#" +
        canvasId).mousemove(function (e) {
        handleMouseMove(e);
    });
    var radius = 30;
    var img = new Image();
    img.onload = function () {
        //draw(150, 150, 30);
    }
    img.src = 'https://dl.dropboxusercontent.com/u/139992952/multple/annotateMe.jpg'
    function draw(cx, cy, radius) {
        ctx.save();
        ctx.clearRect(0, 0, cw, ch);
        //var radialGradient = ctx.createRadialGradient(cx, cy, 1, cx, cy, radius);
        //radialGradient.addColorStop(0, 'rgba(0,0,0,1)');
        //radialGradient.addColorStop(.65, 'rgba(0,0,0,1)');
        //radialGradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        //ctx.fillStyle = radialGradient;
        ctx.fill();
        ctx.globalCompositeOperation = 'source-atop';
        ctx.drawImage(img, 0, 0);
        ctx.globalCompositeOperation = 'destination-over';
        //ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, cw, ch);
        ctx.restore();
    }

    function handleMouseMove(e) {

        // tell the browser we're handling this event
        e.preventDefault();
        e.stopPropagation();
        let mouseX = parseInt(e.clientX - offsetX);
        let mouseY = parseInt(e.clientY - offsetY);
        draw(mouseX, mouseY, 30);
    }
}

export default generateFlashLight
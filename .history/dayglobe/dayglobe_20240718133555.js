moveSun();
getPos();

function moveSun() {
    const windowEl = document.getElementById('window-container');
    let windowPositionInfo = windowEl.getBoundingClientRect();
    let windowHeight = windowPositionInfo.height;
    let windowWidth = windowPositionInfo.width;
    
    const sun = document.getElementById('sun');
    var sunPositionInfo = sun.getBoundingClientRect();
    let sunRadius = sunPositionInfo.width/2;
    
    let x = windowWidth/2 - sunRadius;
    let y = windowHeight/2 - sunRadius;
    sun.style.transform = `translate(${x}px, ${y}px)`;
}

function getPos() {
    const windowEl = document.getElementById('window-container');
    const sun = document.getElementById('sun');
    let windowPositionInfo = windowEl.getBoundingClientRect();
    var sunPositionInfo = sun.getBoundingClientRect();
}
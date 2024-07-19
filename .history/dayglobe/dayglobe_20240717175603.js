moveSun();

function moveSun() {
    const windowEl = document.getElementById('window-container');
    let windowPositionInfo = windowEl.getBoundingClientRect();
    let windowHeight = positionInfo.height;
    let windowWidth = positionInfo.width;
    
    const sun = document.getElementById('sun');
    var sunPositionInfo = sun.getBoundingClientRect();
    let sunDiameter = sunPositionInfo.width;

    let x = windowWidth/2;
    let y = windowHeight/2;
    sun.style.transform = `translate(${x}px, ${y}px)`;
}
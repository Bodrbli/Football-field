'use strict'
let fieldEv = document.getElementById('soccer-field');
let ballEv = document.getElementById('ball-div');
fieldEv.addEventListener('click', function (event) {
    let fieldCoords = fieldEv.getBoundingClientRect(),
        top = fieldCoords.top + fieldEv.clientTop,
        left = fieldCoords.left + fieldEv.clientLeft,
        ballLeft = ballEv.clientWidth / 2,
        ballTop = ballEv.clientHeight / 2,
        clinX = event.clientX - left - ballLeft,
        clinY = event.clientY - top - ballTop;
    ballEv.style.left =  clinX + 'px';
    ballEv.style.top = clinY + 'px';
})
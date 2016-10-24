/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>

var parentLayer: Layer = new Layer(0,0,0,800,600);

function frameUpdate() {

    updateCamera();

    requestAnimationFrame(frameUpdate);
}

$(document).ready(function () {
    draw();
    requestAnimationFrame(frameUpdate);
});

function draw() {
    $("#camera")[0].innerHTML = parentLayer.generateHTML();
}
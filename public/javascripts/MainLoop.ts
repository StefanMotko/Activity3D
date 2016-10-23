/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>

function frameUpdate() {

    updateCamera();

    requestAnimationFrame(frameUpdate);
}

$(document).ready(function () {
    requestAnimationFrame(frameUpdate);
});
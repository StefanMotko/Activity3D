/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>
var cameraRotationX = -30;
var cameraRotationY = 40;
var rotateLeft = 0;
var rotateRight = 0;
var rotateUp = 0;
var rotateDown = 0;
function handleKeyDown(e) {
    switch (e.keyCode) {
        case 37:
            rotateLeft = 2;
            break;
        case 38:
            rotateUp = 2;
            break;
        case 39:
            rotateRight = 2;
            break;
        case 40:
            rotateDown = 2;
            break;
    }
}
function handleKeyUp(e) {
    switch (e.keyCode) {
        case 37:
            rotateLeft = 0;
            break;
        case 38:
            rotateUp = 0;
            break;
        case 39:
            rotateRight = 0;
            break;
        case 40:
            rotateDown = 0;
            break;
    }
}
var app = angular.module("activity3d", []);
app.controller("CameraController", function CameraController($scope) {
    $scope.cameraRotationX = cameraRotationX;
    $scope.cameraRotationY = cameraRotationY;
});
function updateCamera() {
    cameraRotationX = (cameraRotationX - rotateUp + rotateDown) % 360;
    cameraRotationY = (cameraRotationY + rotateLeft - rotateRight) % 360;
    var scope = $("#camera").scope();
    scope.$apply(function () {
        scope.cameraRotationX = cameraRotationX;
        scope.cameraRotationY = cameraRotationY;
    });
}
onkeydown = handleKeyDown;
onkeyup = handleKeyUp;
//# sourceMappingURL=CameraControls.js.map
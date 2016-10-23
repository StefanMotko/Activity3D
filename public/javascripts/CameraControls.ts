/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>
var cameraRotationX: number = -30;
var cameraRotationY: number = 40;

var rotateLeft: number = 2;
var rotateRight: number = 2;
var rotateUp: number = 2;
var rotateDown: number = 2;

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

import IScope = angular.IScope;

interface ICameraScope extends IScope {
    cameraRotationX: number;
    cameraRotationY: number;
}

var app = angular.module("activity3d",[]);
app.controller("CameraController",function CameraController($scope: ICameraScope) {
    $scope.cameraRotationX = cameraRotationX;
    $scope.cameraRotationY = cameraRotationY;
});

function updateCamera() {

    cameraRotationX = (cameraRotationX - rotateUp + rotateDown) % 360;
    cameraRotationY = (cameraRotationY + rotateLeft - rotateRight) % 360;

    var scope: ICameraScope = $("#camera").scope() as ICameraScope;
    scope.$apply(function () {
        scope.cameraRotationX = cameraRotationX;
        scope.cameraRotationY = cameraRotationY;
    });
}

onkeydown = handleKeyDown;
onkeyup = handleKeyUp;
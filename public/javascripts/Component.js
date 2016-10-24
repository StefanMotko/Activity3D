/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component = (function () {
    function Component(x, y, z, w, h) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.h = h;
        this.children = [];
        this.ownHTML = "";
        this.addChild = function (c) {
            this.children.push(c);
            c.parent = this;
        };
        this.generateHTML = function () {
            var childString = this.children.reduce(function (previousValue, currentValue, currentIndex, array) {
                return previousValue + currentValue.generateHTML();
            }, this.ownHTML);
            return generateDiv(childString, { "style": "width: " + this.w + "px; height: " + this.h + "px;" +
                    "transform: translate(-50%,-50%) translateX(" + this.x + "px) translateY(" + this.y + "px) translateZ(" + this.z + "px)",
                "class": "graph-element" });
        };
        this.setOwnHTML = function (html) {
            this.ownHTML = html;
        };
        this.getWidth = function () {
            return this.w;
        };
        this.getHeight = function () {
            return this.h;
        };
        this.getParent = function () {
            return this.parent;
        };
        this.relativeCoordinates = function (c) {
            var a = [];
            var x = 0;
            var y = 0;
            var z = 0;
            var current = this;
            while (current != c) {
                x += current.x;
                y += current.y;
                z += current.z;
                current = current.getParent();
            }
            a.push(x);
            a.push(y);
            a.push(z);
            return a;
        };
    }
    ;
    return Component;
}());
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer() {
        _super.apply(this, arguments);
        this.generateHTML = function () {
            var childString = this.children.reduce(function (previousValue, currentValue, currentIndex, array) {
                return previousValue + currentValue.generateHTML();
            }, this.ownHTML);
            return generateDiv(childString, { "style": "width: " + this.w + "px; height: " + this.h + "px;" +
                    "transform: translate(-50%,-50%) translateX(" + this.x + "px) translateY(" + this.y + "px) translateZ(" + this.z + "px)",
                "class": "layer" });
        };
    }
    return Layer;
}(Component));
//# sourceMappingURL=Component.js.map
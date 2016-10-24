/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>

class Component {

    private children: Component[] = [];
    private parent: Component;
    private ownHTML: string = "";

    constructor(
        private x: number,
        private y: number,
        private z: number,
        private w: number,
        private h: number
    ) {};

    public addChild: (Component) => void = function(c: Component) {
        this.children.push(c);
        c.parent = this;
    };

    public generateHTML: () => string = function() {

        var childString: string = this.children.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue.generateHTML();
        },this.ownHTML);

        return generateDiv(childString,{"style":"width: " + this.w + "px; height: " + this.h + "px;" +
        "transform: translate(-50%,-50%) translateX(" + this.x + "px) translateY(" + this.y + "px) translateZ(" + this.z + "px)"
        ,"class":"graph-element"});
    };

    public setOwnHTML: (string) => void = function (html: string) {
        this.ownHTML = html;
    };

    public getWidth: () => number = function() {
        return this.w;
    };

    public getHeight: () => number = function() {
        return this.h;
    };

    public getParent: () => Component = function() {
        return this.parent;
    };

    public relativeCoordinates: (Component) => number[] = function(c: Component) {
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

class Layer extends Component {

    public generateHTML: () => string = function() {

        var childString: string = this.children.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue.generateHTML();
        },this.ownHTML);

        return generateDiv(childString,{"style":"width: " + this.w + "px; height: " + this.h + "px;" +
        "transform: translate(-50%,-50%) translateX(" + this.x + "px) translateY(" + this.y + "px) translateZ(" + this.z + "px)"
            ,"class":"layer"});
    };

}
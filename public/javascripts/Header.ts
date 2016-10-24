/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="../../typings/index.d.ts"/>
///<reference path="Templates.ts"/>
///<reference path="CameraControls.ts"/>
///<reference path="MainLoop.ts"/>
///<reference path="Component.ts"/>
///<reference path="Connector.ts"/>

function feature_test() {

    var a = new Layer(-100,-100,0,100,75);
    var b = new Layer(100,100,200,100,75);
    var c = new Layer(0,0,-200,800,600);
    var d = new Layer(100,-150,0,100,75);
    a.setOwnHTML("<p>Component A</p>");
    b.setOwnHTML("<p>Component B</p>");
    d.setOwnHTML("<p>Component D</p>");
    parentLayer.addChild(a);
    parentLayer.addChild(b);
    parentLayer.addChild(c);
    c.addChild(d);
    a.addChild(new Connector(b,1,1,-1,-1));
    a.addChild(new Connector(d,1,1,-1,-1));
    draw();
}
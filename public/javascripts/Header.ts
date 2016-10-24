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
    a.setOwnHTML("<p>Component A</p>");
    b.setOwnHTML("<p>Component B</p>");
    parentLayer.addChild(a);
    parentLayer.addChild(b);
    a.addChild(new Connector(b,1,1,-1,-1));
    draw();

    console.log(a.relativeCoordinates(lowestCommonAncestor(a,b)));

}
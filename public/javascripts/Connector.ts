/**
 * Created by Motko on 24. 10. 2016.
 */
///<reference path="Header.ts"/>

class Connector extends Component {

    constructor(private target: Component, private xpos: number, private ypos: number, private targetxpos: number, private targetypos: number) {super(0,0,0,0,0)};

    public generateHTML: () => string = function() {

        var anc = lowestCommonAncestor(this.parent,this.target);
        var relpos_this = this.parent.relativeCoordinates(anc);
        var relpos_target = this.target.relativeCoordinates(anc);

        var dx = relpos_target[0] - this.xpos * this.parent.w * 0.5 - (relpos_this[0] - this.targetxpos * this.target.w * 0.5);
        var dy = relpos_target[1] - this.ypos * this.parent.h * 0.5 - (relpos_this[1] - this.targetypos * this.target.h * 0.5);
        var dz = relpos_target[2] - relpos_this[2];

        var len2d = Math.sqrt(dx*dx + dy*dy);
        var len = Math.sqrt(dx*dx + dy*dy + dz*dz);
        var angle_xy = Math.atan2(dy,dx);
        var angle = Math.atan2(-dz,len2d);

        this.setOwnHTML("<img src='/images/arrow.png' width='" + len + "px'>");

        var childString: string = this.children.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue.generateHTML();
        },this.ownHTML);

        return generateDiv(childString,{"style":
        "transform: translateX(" + this.parent.getWidth() * 0.5 * this.xpos + "px) translateY(" + ((this.parent.getHeight() * 0.5 * this.ypos) - 12) + "px) rotateZ(" + angle_xy + "rad) rotateY(" + angle + "rad)"
            ,"class":"connector"});
    };

}

function lowestCommonAncestor(a: Component, b: Component) {

    class ListElement {
        constructor(public component: Component, public next: ListElement) {}
    }

    var a_list: ListElement = new ListElement(a,null);
    var b_list: ListElement = new ListElement(b,null);

    while (a_list.component.getParent() != null) {
        a_list = new ListElement(a_list.component.getParent(),a_list);
    }

    while (b_list.component.getParent() != null) {
        b_list = new ListElement(b_list.component.getParent(),b_list);
    }

    var prev = null;
    while (a_list.component == b_list.component) {
        prev = a_list.component;
        a_list = a_list.next;
        b_list = b_list.next;
    }

    return prev;
}
/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>

function generateDiv(innerHTML: string, properties: {[prop: string]: string}) {

    var x: string = '<div';
    for (var key in properties) {
        var value: string = properties[key];
        x += ' ' + key + '="' + value + '"';
    }
    x += ">" + innerHTML + "</div>";
    return x;
}
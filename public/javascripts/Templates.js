/**
 * Created by Motko on 23. 10. 2016.
 */
///<reference path="Header.ts"/>
function generateDiv(innerHTML, properties) {
    var x = '<div';
    for (var key in properties) {
        var value = properties[key];
        x += ' ' + key + '="' + value + '"';
    }
    x += ">" + innerHTML + "</div>";
    return x;
}
//# sourceMappingURL=Templates.js.map

var markactions = ["touch my inner thigh", "forgot my name", "sad spank me", "look sad", "build a snowman", "make me a snowman"];
var ravenactions = ["playing the banjo", "reading", "crying about not getting my milkshake", "carried from the hospital" , "being Raven", "avoid El Segundo"];
let qoutetypes = 1;
let defaultformat = "";

$('button').click(function () {
    $('h2').text(randomEl(adjectives) + ' ' + randomEl(nouns));
    selectElementContents($('h2')[0]);
});


function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function generateQoute() {
    var qoutetype = Math.random() * 1;
    if (qoutetype == 1){
        var markAction = randomEl(markaction);
        var ravenAction = randomEl(ravenactions);
        return `Don't {0} while I'm {1}.`
    }
    return "";
}

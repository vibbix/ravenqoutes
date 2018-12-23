var markactions = ["touch my inner thigh", "forgot my name", "sad spank me", "look sad", "build a snowman", "make me a snowman"];
var ravenactions = ["playing the banjo", "reading", "crying about not getting my milkshake", "carried from the hospital", "being Raven", "avoiding El Segundo"];
let qoutetypes = 1;

function getRandomListItem(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function generateQoute() {
    var qoutetype = Math.floor(Math.random() * qoutetypes);
    if (qoutetype == 0) {
        var markAction = getRandomListItem(markactions);
        var ravenAction = getRandomListItem(ravenactions);
        return `Don't ${markAction} while I'm ${ravenAction}`;
    }
    return "";
}

function setQoute() {
    var qoute = generateQoute();
    document.getElementById("qoute").innerHTML = qoute;
}

setQoute();
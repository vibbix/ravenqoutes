var markactions = ["touch my inner thigh", "forgot my name", "sad spank me", "look sad", "build a snowman", "make me a snowman", "fall asleep on me again", "play dark drone ambient banjo music", "lick things", "go hang out with Cara", "let your phone died again", "get lost in a circle", "get lost in the mountain that is the stuff on my floor", "drive so fast", "try grabbing the pen"];
var ravenactions = ["playing the banjo", "reading", "crying about not getting my milkshake", "carried from the hospital", "being Raven", "avoiding El Segundo", "buying your sister a backpack", "listening to Oingo Boingo", "becoming Ezekiel Goldthwait", "admiring Jemima Debuke", "being a funny person", "watching crappy Christmas movies"];
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
        return `Don't ${markAction} while I'm ${ravenAction}.`;
    }
    return "";
}

function setQoute() {
    var qoute = generateQoute();
    document.getElementById("qoute").innerHTML = qoute;
}

setQoute();
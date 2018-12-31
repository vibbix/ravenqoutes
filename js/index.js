let analytics = 'UA-131324802-1';
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', analytics, 'auto');
ga('send', 'pageview');

var markactions = ["touch my inner thigh", "forgot my name", "sad spank me",
    "look sad", "build a snowman", "make me a snowman", "fall asleep on me again",
    "play dark drone ambient banjo music", "lick things", "go hang out with Cara",
    "let your phone die again", "get lost in a circle", "make this website", "be born of incest",
    "get lost in the mountain that is the stuff on my floor", "drive so fast", "forget to eat because JD isn't cooking",
    "try grabbing the pen", "space out", "start a fire with all the string lights",
    "like candles a bit too much", "steal more street signs", "go to my improv show"
];
var ravenactions = ["playing the banjo", "reading", "crying about not getting my milkshake",
    "carried home from the hospital", "being Raven", "avoiding El Segundo", "buying your sister a backpack",
    "listening to Oingo Boingo", "becoming Ezekiel Goldthwait", "admiring Jemima Debuke", "being a funny person",
    "watching crappy Christmas movies", "getting broken up with over email", "wearing my Nicolas Cage shirt", "12",
    "making Lord of The Rings references", "at the Struts concert with you", "at the work party with you",
    "trying to look bothered", "doing art student things", "born of incest", "being a bit Genghis Khan"
];
let qoutetypes = 100;

function getRandomListItem(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function generateQoute() {
    var qoutetype = Math.floor(Math.random() * qoutetypes);
    if (qoutetype < 99) {
        var markAction = getRandomListItem(markactions);
        var ravenAction = getRandomListItem(ravenactions);
        return `Don't ${markAction} while I'm ${ravenAction}.`;
    }
    return "I love you.";
}

function setQoute(sendevent = true) {
    var qoute = generateQoute();
    document.getElementById("qoute").innerHTML = qoute;
    if (sendevent) {
        ga('send', 'event', 'generate', 'generateqoute');
    }
    console.log(`Qoute generated: ${qoute}; Event: ${sendevent}`)

}

function initPage() {
    setQoute(false);
}
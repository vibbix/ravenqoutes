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

var markactions = ["touch my inner thigh", "forgot my name", "sad spank me", "call me at 3AM again", "experience the future of flavor",
    "look sad", "build a snowman", "make me a snowman", "fall asleep on me again", "dangle off the rooftop", "fix it",
    "play dark drone ambient banjo music", "lick things", "go hang out with Cara", "dirty talk in Russian", "give me attention",
    "let your phone die again", "get lost in a circle", "make this website", "be born of incest", "manage to mispell quotes",
    "get lost in the mountain that is the stuff on my floor", "drive so fast", "remove bad qoutes from the site", "be mean to me",
    "try grabbing the pen", "space out", "start a fire with all the string lights", "disappoint me", "visit the clinic",
    "like candles a bit too much", "steal more street signs", "go to my improv show", "be my favorite", "taste the excellence"
];
var ravenactions = ["playing the banjo", "reading", "crying about not getting my milkshake", "trying to dirty talk in Spanish",
    "carried home from the hospital", "being Raven", "avoiding El Segundo", "buying your sister a backpack",
    "listening to Oingo Boingo", "becoming Ezekiel Goldthwait", "admiring Jemima Debuke", "being a funny person",
    "watching crappy Christmas movies", "getting broken up with over email", "wearing my Nicolas Cage shirt", "12",
    "making Lord of The Rings references", "at the Struts concert with you", "at the work party with you",
    "trying to look bothered", "doing art student things", "born of incest", "talking about my chexmix", "being number one",
    "trying to be vegan", "being your favorite", "trying to show up my Ex during NYE", "eat my children", 
];
let qoutetypes = 100;
let version = "v1.2.3"

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
    if (qoute.includes("I love you") || (qoute.includes("banjo") && qoute.includes("thigh"))){
        $("#ravenAttr").html(" - Raven Goldston (Definitely)");
    } else {
        $("#ravenAttr").html(" - Raven Goldston (probably)");
    }
    $("#qoute").html(qoute);
    if (sendevent) {
        ga('send', 'event', 'generate', 'generateqoute');
    }
}

$(function () {
    $("#version").html(`Version: ${version}`);
    setQoute();
});

$( "#sun" )
  .mouseover(function() {
    
    $( this ).find( "span" ).text( "mouse over x " + i );
  })
  .mouseout(function() {
    $( this ).find( "span" ).text( "mouse out " );
  });
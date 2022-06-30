// --------------------------------------------------------------------hello there
var text = ["Hello              "];
let count = 0,
    index = 0,
    cText = "",
    letter = ""; 
(function type() {
    if (count === text.length) {
        count = 0;
    }
    cText = text[count];
    letter = cText.slice(0, ++index);
    document.querySelector("#head1").textContent = letter;
    if (letter.length === cText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
}());
var text1 = ["There!             "];
let count1 = 0,
    index1 = 0,
    cText1 = '',
    letter1 = '';
(function type1() {
    if (count1 === text1.length) {
        count1 = 0;
    }
    cText1 = text1[count1];
    letter1 = cText1.slice(0, ++index1);
    document.querySelector("#head2").textContent = letter1;
    if (letter1.length === cText1.length) {
        count1++;
        index1 = 0;
    }
    setTimeout(type1, 300);
}());
// --------------------------------------------------------------------head image & text move
document.addEventListener('mousemove', parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
        var mvalue = move.getAttribute("data-value");
        var x = (e.clientX * mvalue) / 250;
        var y = (e.clientY * mvalue) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
// --------------------------------------------------------------------appeaering
function scroll() {
    var panda = document.querySelector(".panda"),
        pandaPos = panda.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (pandaPos < screenPos) {
        panda.classList.add("appear");
    }

}
window.addEventListener('scroll', scroll);

function scroll1() {
    var tiger = document.querySelector(".tiger"),
        tigerPos = tiger.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (tigerPos < screenPos) {
        tiger.classList.add("appear");
    }
}
window.addEventListener('scroll', scroll1);

function scroll2() {
    var ele = document.querySelector(".ele"),
        elePos = ele.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (elePos < screenPos) {
        ele.classList.add("appear");
    }
}
window.addEventListener('scroll', scroll2);

function scroll3() {
    var monkey = document.querySelector(".monkey"),
        monkeyPos = monkey.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (monkeyPos < screenPos) {
        monkey.classList.add("appear");
    }
}
window.addEventListener('scroll', scroll3);

function scroll4() {
    var bird = document.querySelector(".bird"),
        birdPos = bird.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (birdPos < screenPos) {
        bird.classList.add("appear");
    }
}
window.addEventListener('scroll', scroll4);

function scroll5() {
    var small = document.querySelector(".small"),
        smallPos = small.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (smallPos < screenPos) {
        small.classList.add("appear");
    }
}
window.addEventListener('scroll', scroll5);

function scroll6() {
    var matter = document.querySelector(".matter"),
        matterPos = matter.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (matterPos < screenPos) {
        matter.classList.add("appear");
    }
}
window.addEventListener('scroll', scroll6);

function iscroll() {
    var lungquote = document.querySelector(".lungquote"),
        lungquotePos = lungquote.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (lungquotePos < screenPos) {
        lungquote.classList.add("appear");
    }
}
window.addEventListener('scroll', iscroll);

function jscroll() {
    var limg = document.querySelector(".limg"),
        limgPos = limg.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (limgPos < screenPos) {
        limg.classList.add("appear");
    }
}
window.addEventListener('scroll', jscroll);

function kscroll() {
    var solution = document.querySelector(".solution"),
        solutionPos = solution.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (solutionPos < screenPos) {
        solution.classList.add("appear");
    }
}
window.addEventListener('scroll', kscroll);

function lscroll() {
    var from = document.querySelector(".from"),
        fromPos = from.getBoundingClientRect().top,
        screenPos = window.innerHeight / 1.3;
    if (fromPos < screenPos) {
        from.classList.add("appear");
    }
}
window.addEventListener('scroll', lscroll);

function mscroll() {
    var to = document.querySelector(".to"),
        toPos = to.getBoundingClientRect().top,
        screenPos = window.innerHeight;
    if (toPos < screenPos) {
        to.classList.add("appear");
    }
}
window.addEventListener('scroll', mscroll);
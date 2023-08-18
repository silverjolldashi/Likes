var count1 = 9;
var count2 = 12;
var count3 = 9;
var counterText = document.querySelector("#text1")
var counterText1 = document.querySelector("#text2")
var counterText2 = document.querySelector("#text3")

function add1() {
    count1++;
    counterText.innerText = count1 + " Like(s)"
    console.log (counterText);
}
function add2() {
    count2++;
    counterText1.innerText = count2 + " Like(s)"
    console.log (counterText);
}
function add3() {
    count3++;
    counterText2.innerText = count3 + " Like(s)"
    console.log (counterText);
}
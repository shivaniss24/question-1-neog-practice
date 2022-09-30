var inputOne=document.querySelector('#input-1');
var inputTwo=document.querySelector('#input-2');
var btnOne= document.querySelector('#addition');
var btnTwo=document.querySelector('#substraction');
var btnThree=document.querySelector('#multiplication');
var btnFour=document.querySelector('#division');
var output=   document.querySelector('#output');

function add()
{
    var addition = Number(inputOne.value)+Number(inputTwo.value);
    output.innerText=addition;
    // console.log(addition);
}
function difference()
{
    var diff=Number(inputOne.value)-Number(inputTwo.value);
    output.innerText=diff;
    // console.log(diff);
}
function mul()
{
var multi=Number(inputOne.value)*Number(inputTwo.value);
output.innerText=multi;
}
function div()
{
  var division=Number(inputOne.value)/Number(inputTwo.value);
  output.innerText=division;
}
btnOne.addEventListener('click',add);
btnTwo.addEventListener('click',difference);
btnThree.addEventListener('click',mul);
btnFour.addEventListener('click',div);







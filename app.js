var input1=document.querySelector('#input-one');
var input2=document.querySelector('#input-two');
var add=document.querySelector('#add');
var sub=document.querySelector('#sub');
var mul=document.querySelector('#mul');
var div=document.querySelector('#div');
var output=document.querySelector('#output');

function addition()
{
    var sum=parseInt(input1.value)+parseInt(input2.value);
   output.innerText=sum;
  // console.log(sum);
}
function substraction()
{
  var subs=parseInt(input1.value)-parseInt(input2.value);
  output.innerText=subs;
}
function multiplication()
{
 var mul=parseInt(input1.value)*parseInt(input2.value);
 output.innerText=mul;
}
function division()
{
var divi=parseInt(input1.value)/parseInt(input2.value);
output.innerText=divi;
}


add.addEventListener('click',addition);
sub.addEventListener('click',substraction);
mul.addEventListener('click',multiplication);
div.addEventListener('click',division);


function helloweveryone (){


// input 
var age = prompt("enter your age");
var comp ;

//processing

if (age>10 && age<=18)
{
    comp='do well for a beautiful future';
}
else if(age>18){

    comp='keep imporve yourself ';
    

}
return comp;
//output

}
var comp =helloweveryone();
document.write('<h1>'+comp+'/<h1>');


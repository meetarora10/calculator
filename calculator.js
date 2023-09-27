let calculation='';
let output=document.querySelector('.display');
function key(value){
            
    calculation+=value;
    console.log(calculation);
    output.innerHTML=calculation;    
}
function last(){
    let len=calculation.length;
    calculation=calculation.slice(0,len-1);
    output.innerHTML=calculation;
    console.log(calculation);
}



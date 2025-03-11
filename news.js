let a;
function func1(){
    const element = document.getElementsByClassName('input1');
    a = element[0].value;

    
}



function convert(){
    let j = 0;
    let num = 0;

    for(let i = a.length - 1; i >= 0; i--){
        num += (a[i] * (2 ** j++));
    }

    document.getElementsByClassName('output')[0].innerHTML = `output = ${num}`;



    

}


let a;
function func1(){
    const element = document.getElementsByClassName('input1');
    a = +element[0].value;
    
    
}

function doReverse(b){
    let binary2 = "";
    for(let i = b.length - 1; i >= 0; i--){
        binary2 += b[i];
    }
    return binary2;
}

function convert(){
    let binary = "";

    while(a > 0){
        let rem = Math.floor(a % 2);
        binary += rem;
        a = Math.floor(a / 2);


    }
    console.log(binary);
    binary = doReverse(binary);
    document.getElementsByClassName('output')[0].innerHTML = `Output = ${binary}`;

}


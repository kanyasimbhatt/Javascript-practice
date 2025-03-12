for(let i = 1; i <= 5; i=i+1){
    let arr = [];
    for(let j = 1; j <= 9; j++){
        if(j >= (5 - i + 1) && j <= (5 + i - 1)){
            arr.push('*');
        }
        else{
            arr.push(' ');
        }
    }
    console.log(arr.join(' '));
}

//    *
//   **
//  ***
// ****
//*****
for(let i = 1; i <= 5; i++){
    let arr = [];
    for(let j = 5; j >= 1; j--){
        if(j <= i){
            arr.push('*');
        }
        else{
            arr.push(' ');
        }
    }
    console.log(arr.join(" "));
}

console.log('heee');
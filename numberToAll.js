let n = 16;
let input = 15;
let character = 65;
let arr = [];
let alpha = 'a';
for(let i = 0; i < n; i++){
    if(i >= 10){
        arr[i] = String.fromCharCode(character++);
    }
    else
    arr[i] = String(i);
};
function doReverse(b){
    let binary2 = "";
    for(let i = b.length - 1; i >= 0; i--){
        binary2 += b[i];
    }
    return binary2;
}



let answer = "";
while(input > 0){
    let rem = Math.floor(input % n);

    answer += arr[rem];
    input = Math.floor(input / n);

}

answer = doReverse(answer);

console.log(answer);

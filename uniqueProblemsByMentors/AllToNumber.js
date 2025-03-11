let n = 16;

let input = '1A';

let j = 0;
input = String(input);
input = input.toUpperCase();
let ans = 0;
for(let i = input.length - 1; i >= 0; i--){
    let intValue = Number(input[i]);
    if(input[i] != 0 && !Number(input[i])){
        intValue = input[i].charCodeAt(0) - 'A'.charCodeAt(0);
        intValue += 10;
    }
    
    ans += (intValue * (n ** j++));

}

console.log(ans);
for(let i = 1; i <= 5; i++){
    let arr = [];
    for(let j = 1; j <= 9; j++){
        if(j >= (5 - i + 1) && j <= (5 + i - 1)){
            if(i % 2 == 0){
                if(j % 2 != 0){
                    arr.push(' ')
                }
                else{
                    arr.push('*');
                }
            }

            else{
                if(j % 2 != 0){
                    arr.push('*');
                }
                else{
                    arr.push(' ');
                }
            }
        }
        else{
            arr.push(' ');
        }
    }
    console.log(arr.join(' '));
}
n = prompt('give me a number');

num_array = []; // making an array to store numbers in 

nextPrime:
for (let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue nextPrime;

    }
    num_array.push(i);
}

alert(num_array);
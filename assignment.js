    // 
    // 
    // 1.Write a function to find the maximum element in a array

    let arre1 = [1,4,6,9,10,8,2,2];
    function maxelement(arr) {
    const maximum = arr.reduce((max,val) => {
        if(val > max){
            max = val
        }
        return max;
        },0);
        return maximum;
    }
    let valu = maxelement(arre1)
    console.log("1 : ",valu);


    // 
    // 
    // 2.Write a function to reverse a string
    
    function reverse(str) {
    
        // splitted string to letters
        let array = str.split("-");
        // reversing that array of letters
        let revrs = array.reverse();
        console.log(array[1])
    
        // mergging the array to the reversed string and made to capital letters
        // let reversedstring = revrs.join("") .toUpperCase();
    
        // console.log(2 + " : "+ reversedstring);
    }
    reverse("hello-hi-ok");
    
    
    // 
    // 
    // 3.Write a function to sort a array in ascending order
    
        // arrow function
        const sortarray = arr => arr.sort();
    
        const arr3 = [1,5,2,4,3,8,6,7];
        console.log(3 + " : " + sortarray(arr3));
        
    
    // 
    // 
    // 4.Write a function to calculate the sum of all even numbers between 1 and n.
    
    function sum(num) {
        let sumEv = 0;
        for(let i=0;i<=num;i++){
            if(i%2==0){
            sumEv += i;
            }
        }
        console.log("4 : " , sumEv);
    }

    sum(10);
    
    // 
    // 
    //   5.Write a function to check if a given number is prime.
    
    const primecheck = num =>{
    
        let count = 0;
    
        if(num<=1){
            count++;
        }
    
        else if(num==2){
            count=0;
        }
    
        else{
            for(i=2;i<num/2;i++){
                if(num%i==0){
                count++;
                break;
            }
        }
        }
        if(count===0){
            console.log("Prime");
        }
        else{
            console.log("Not a Prime Number");
        }
    }
    const number = 9;
    primecheck(number);
    
    
    // 
    // 
    // 6.Write a function to find the second largest number in a array
    
    function findseclarge(array) {
        if(array.length < 2){
            console.log("Only one value in array");
        }
        else{
            // reversing the arry
            const seclarge = arr =>arr.sort((a,b)=>b-a);
        
            
        
            let second=seclarge(array);
            console.log(6 +": " + "Second Largest :" + second[1]);
        }
    }

    let array = [6,2,3,4,5,8,6,12];
    findseclarge(array);
    
    
    // 
    // 
    // 7.Write a function to remove duplicates from an array
    
    function removeduplict(array){
        const newarray=[];
        array.forEach((value)=> {
    
        // check if the new array contain the valu and if not assign the value to that array
            if(!newarray.includes(value)){
                newarray.push(value)
            }
        });
        console.log("7 : "+newarray);
    }
    let arr7=[1,1,1,1,3,3,4,6,6,7,7,8,8,9]
    removeduplict(arr7);
    
    
    // 
    // 
    // 8. Write a function to calculate the sum of all numbers in a array
    
    function sumofall(arr){
    let sum = arr.reduce(function(sum,value) {
            return sum+value;
        },0);
        return sum;
    }
    let arr8 = [1,2,3,4,5,6,7,8,9,10];
    console.log("8 : "+sumofall(arr8));
    
    
    // 
    // 
    //  9.Write a function to generate all prime numbers up to a given limit.


    function primeToLimit(limit) {
        const primednos = [];

        for(let num=2;num<=limit;num++){

            let prime = true

            for(let i=2; i<=num/2; i++){
                if(num%i == 0){
                    prime = false;
                    break;
                }
            }
            if(prime == true){
                primednos.push(num);
            }
        }
        return primednos;
    };
    console.log("9 : "+primeToLimit(11));

    // 
    // 
    //  10.Write a program to find the maximum and minimum   elements in an array of integers.

    function maxAndMin(array) {
        let sortedarray = array.sort((a,b) => (a-b));

        let maxvalue = array.pop();
        console.log("maximum element :" + maxvalue)

        let minvalue = array.shift();
        console.log("minimum element :" + minvalue)
    }
    let arr10 = [2,3,1,4,51,2,7];
    maxAndMin(arr10);

    // 
    // 
    //  11.Write a function to calculate the factorial of a given number n

    function findFactorialOf(number) {
        let factorial = 1;
        if(number == 0){
            factorial = 1;
        }
        else{
            for(let i=1;i<=number;i++){
                factorial *= i;
            }
        }
        console.log("11 : "+factorial);
    }

    findFactorialOf(5);

    // 
    // 
    // 12.Write a function to check given string is palindrome or not

    function palindrome(str){
        let strn =str.toUpperCase();
        let palind = strn.split("").reverse().join("");
        if(strn == palind){
            console.log("12 : Palindrome")
        }
        else{
            console.log("12 : Not Pallindrome")
        }
    }
    let word = "malayalam"
    palindrome(word);

    // 
    // 
    // 13.Write a function to check if a given number is an Armstrong number.

    function armstrong(num) {
        if(num<=0){
            console.log("Number not valid");
        }
        else{
            let strn = num.toString()
            let arr =strn.split('');
            let length =arr.length;
            let powered = arr.map((val) => val**length)
            let armstr = powered.reduce((tot,val) => tot+=val,0)
            if(num === armstr){
            console.log("13 : It is an Armstrong number")
            }
            else{
                console.log("13 : Not an Armstrong number")
            }
        }
        
    }
    armstrong(153);

    // 
    // 
    // 14.A program to print the Fibonacci series

    function fibonacci(num) {
        let arrayoffi = [0,1]
        if(num<=0){
            console.log("14 : Invalid number")
        }
        else{
            for(i=1;i<=num;i++){
                let newnum = arrayoffi[i] + arrayoffi[i-1];
                arrayoffi.push(newnum);
            }
        }
        console.log("14 : Fibonacci series"+arrayoffi);
    }
    fibonacci(10);

    // 
    // 
    // 15.Write a program to find the sum of all prime numbers up to a given limit. 

    function sumofprime(limit) {
        let sum = 0;
        if(limit<=1){
            console.log("15 : Not a prime number");
        }
        else{
            for(let i=2;i<=limit;i++){

                let prime =true;

                for(let j=2;j<=i/2;j++){
                    if(i%j==0){
                        prime = false;
                        break;
                    }
                }
                if(prime==true){
                    sum +=i;
                }
            }
        } 
        console.log("15 : sum Of Primenumbers : " +sum);
    }
    sumofprime(6);

    // 
    // 
    // 16.Write a program to find the sum of all the multiples of 3 or 5 below a given number.

    function sumofmultiple(limit) {
        let sum=0;
        for(i=1;i<=limit;i++){
            if(i%3==0 || i%5==0){
                sum+=i
            }
        }
        console.log("16 : "+"sum of all the multiples of 3 or 5 : "+sum);
    }
    sumofmultiple(10)


    // 
    // 
    // 17.Write a program to find the sum of all the even or odd numbers below a given number.

    function sumEO(limit,evenorodd) {
        let sum = 0;
        if(evenorodd == "even"){
            for(let i=0;i<=limit;i++){
                if(i%2==0){
                    sum+=i;
                }
            }
        }
        if(evenorodd == "odd"){
            for(let i=0;i<=limit;i++){
                if(i%2!=0){
                    sum+=i;
                }
            }
        }
        console.log("17 : "+"sum of"+evenorodd+":"+sum)
    }

    sumEO(10,"even");

    // 
    // 
    // 18.Write a program to find the union of two arrays of integers.

    function findunion(arr1,arr2) {
        let arr3 = arr1.concat(arr2);
        // here indexof is used to get the first index having that value
        let arr4 = arr3.filter((val,ind) => arr3.indexOf(val)==ind)
        console.log("18 : "+arr4);
    }
    let arr1 = [1,2,2,2,3,3,7,4,3,4];
    let arr2 = [3,4,5,6];
    findunion(arr1,arr2);

    // 
    // 
    // 19.Write a program to find the sum of the digits of a given number.

    function sumofdigit(num) {
        let sum = 0
        let strng = num.toString()
        let arrofnum = strng.split('');
        for(let i=0;i<arrofnum.length;i++){
            sum += parseInt(arrofnum[i]);
        }
        console.log("19 : "+sum);
    }
    sumofdigit(246);

    // 
    // 
    // 20.Write a program to count the number of vowels in a given string.

    function vowels(str) {
        let count = 0;
        let vowels = "aeiou"
        for(i=0;i<=str.length;i++){
            if(vowels.includes(str[i])){
                count++
            }
        }
        console.log("20 : "+count)
    }
    strin = "abcdefghijklmnopqrstuvwxyz"
    vowels(strin);
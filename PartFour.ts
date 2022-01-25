let string1: String = "Hi";
let boolean1: Boolean = true;
let no1: number = 8;
let array1:number[] = [1,2,3];

for(let i=0; i < array1.length; i++){
    console.log("Number is: " + array1[i]);
}

let notSure:any = 22;
console.log(notSure);

let myData:any[] = [3, "Hi", true];

for(let i=0; i < myData.length; i++){
    console.log("Any array is : " + myData[i])
}

console.log("My boolean value is: " + boolean1);
console.log("My number value is: " + no1);
console.log("Message is: " + string1);

function add(no2: number){
    no2 = no1 + 8;
    return no2;
}
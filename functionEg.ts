function stringCount(value:string):number{
    return value.length
}

let count:number = stringCount("test");
console.log(count);

function string_noSpaces(value:String):number{
    return value.replace(" ","").length;
}

let count2:number = string_noSpaces("H i");
console.log(count2);


function optionalSpaces(value:String, spaces?:boolean):number{

    if(spaces){
        return value.length;
    }
    else{
        return value.replace(" ","").length;
    }
    
}

let count3:number = optionalSpaces("test 1");
console.log(optionalSpaces);
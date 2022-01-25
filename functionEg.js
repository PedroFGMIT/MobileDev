function stringCount(value) {
    return value.length;
}
var count = stringCount("test");
console.log(count);
function string_noSpaces(value) {
    return value.replace(" ", "").length;
}
var count2 = string_noSpaces("H i");
console.log(count2);
function optionalSpaces(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
var count3 = optionalSpaces("test 1", true);
console.log(optionalSpaces);

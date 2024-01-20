function greet() {
var username= prompt("What is your name?")

if (username && username.trim()) {
    alert ('Hello,' + username.trim())
} else {
    alert ('Hello')
}
var age= prompt("How old are you?")

console.log(parseInt(age))

const d = new Date();
let year = d.getFullYear();

var birthday=confirm("Has your birthday passed this year?")


if (birthday===true) {
   var birthyear= Math.floor(year-age)
   alert("You were born in " + birthyear)
} else {
    var birthyear= Math.floor(year-age - 1)
    alert("You were born in " + birthyear)
}
}



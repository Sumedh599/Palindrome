var a;
console.log(a);

function check(a) {

a = document.querySelector("#input").value;
// document.write(a);
let z = a.toLowerCase();
console.log(z);
let b = z.split("");
console.log(b);
let c = b.reverse();
console.log(c);
let d = c.join("");
console.log(d);

if (z == d) {
    document.querySelector("#print").innerHTML = a + " is Palindrome"

} else {
    document.querySelector("#print").innerHTML = a + " is not Palindrome"
}
}

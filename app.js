let name = "John Doe";
let age = 30;
let occupation = "Software Developer";
let email = "john.doe@example.com";
let phoneNumber = "123-456-7890";
const instituteName = "Jawan Pakistan";
const education = "ABC";

let biodata = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Occupation:</strong> ${occupation}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Institute Name:</strong> ${instituteName}</p>
    <p><strong>Education:</strong> ${education}</p>
`;

document.write(biodata);


/*==================================*/


// Example for var
var a = "Muhammad";
var abc;

var a = "Wasif";
console.log(a);

var a = "Muhammad";

function abc() {
  var a = "Wasif";
  console.log(a);
}
abc();

// Example for let
let b = "Ali";
b = "Hassan";
console.log(b);
{
  let b = "Zain";
  console.log(b);
}
console.log(b);

// Example for const
const c = "Ahmed";
console.log(c);
{
  const c = "Bilal";
  console.log(c);
}
console.log(c);

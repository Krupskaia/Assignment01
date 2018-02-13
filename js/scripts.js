// STEP 1 - Camel Case notation
/*var someMonth
function theMonth 
currentMonth 
var summerMonth
MyLibraryAfunction  */

// STEP 2 - expressions
/*9.81 // numeric literal 
"Krupskaia" // string literal 
true // Boolean literal 
null // literal null value */

// STEP 3 - complex/variable expressions
var speedFinal = speedInitial + (9.81 * t);
var monthIncome = totalYearIncome / 12;

// STEP 4 - Declare 9 variables
var firstName;
var lastName;
var address;
var city;
var state;
var zip_code;
var your_age;
var referralSource;
var may_we_contact_you;

// STEP 5 - 3 methods for declaring and assigning values to variables
var firstName;
firstName = "John";
var lastName;
lastName = "Smith";
var address = "1217 Caminito Septimo";
var city = "Encinitas";
var state = "CA", zip_code = "92007";
var your_age = "45";
var referralSource = "Friend";
var may_we_contact_you = true;

// STEP 6 - use console.log 

var yearsLiving = 3 + "years";
window.console.log(yearsLiving);

var delivered = false + "Yesterday";
window.console.log(bill);

var bill = true + 50;
window.console.log(bill);

// STEP 7 - hoisting
var value1;
var value2;
window.console.log(value1 + value2);

// STEP 8 - string literal valid? 
// No, it is not.
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I"' + "'m not sure about the former.";
window.console.log(someString);

// STEP 9 - null value and undefined value 
var z = null;
window.console.log(z);

var x;
window.console.log(x);


// STEP 10 - typeof operator 
window.console.log(typeof "John");
window.console.log(typeof 9.81);
window.console.log(typeof true);
window.console.log(typeof {brand: "Apple", model: "Iphoe7"});
window.console.log(typeof myPhone);

// STEP 11 - alert box, use the concatenation operator (+)  

window.alert("Hello " + "Krupskaia Angulo" + ", welcome to the JavaScript class!");

// STEP 12	Declare a variable called name and set it equal to your name 
var name = "Krupskaia Angulo";
window.alert("Hello " + name + ", welcome to the JavaScript class!");

// STEP 13	Declare a variable called course and set it equal to “JavaScript” 
var course = "JavaScript";
window.alert("Hello " + name + ", welcome to the " + course + " class!");

// STEP 14 - \n

window.alert("Hello Krupskaia Angulo.\n" + "Welcome to the JavasScript class!");

// STEP 15-	prompt

var yourName = window.prompt("Please enter your name", yourName);
window.alert("Hello " + name + ".\n" + "Welcome to the JavasScript class!");

// STEP 16	- \n 
var yourCourse = window.prompt("Please enter your name", yourCourse);
window.alert("Hello " + name + ".\n" + "Welcome to the " + yourCourse + " class!");

// STEP 17	17.	Assign the values  
var x = 10;
var y = 20;
window.console.log("The sum is: " + x + y);


// STEP 18	+=
var x = 20;
x += 20;
window.console.log(x);

// STEP 19	*=
var x = 20;
x *= 5;
window.console.log(x);

// STEP 20 - remainder

var x = (20 % 3);
x /= 1;
window.console.log(x);

// STEP 21	Comparison and Logical operators
var x = 20;
var y = 100;
var result;
result = y > x;
window.console.log(result);

// STEP 22	Comparison and Logical operators
var x = 20;
var y = 100;
var result;
result = y < x;
window.console.log(result);

// STEP 23	new Object
var widget = new Object();
window.console.log(typeof widget);

// STEP 24	Using the instanceof operator , true
var result = widget instanceof Object;
if (result == true) {
    window.console.log(result);
}

// STEP 25	Using the instanceof operator, false

var result = widget instanceof Date;
if (result == false) {
    window.console.log(result);
}



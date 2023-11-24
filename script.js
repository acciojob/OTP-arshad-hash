//your JS code here. If required.
let one= document.getElementById("one");
let two= document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");

one.addEventListener("keyup",(event)=>{
	//after entering the first foucs should be 
	
		two.focus();
	
});


two.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    one.focus();
  } else {
    // after entering a value in the second, focus on the third
    three.focus();
  }
});


three.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    two.focus();
  } else {
    // after entering a value in the second, focus on the third
    four.focus();
  }
});

four.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    three.focus();
  } else {
    // after entering a value in the second, focus on the third
    five.focus();
  }
});

five.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    four.focus();
  } else {
    // after entering a value in the second, focus on the third
    six.focus();
  }
});

six.addEventListener("keyup", (event) => {
  // if backspace is pressed in the second, focus on the first
  if (event.key === "Backspace") {
    five.focus();
  } 
});









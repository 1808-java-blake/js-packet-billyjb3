var lastColor;
var colors;

// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

//function called on load event
function start()
{
	document.getElementById("num1").addEventListener("change", sumInputs);
	document.getElementById("num2").addEventListener("change", sumInputs);
	document.getElementsByName("skills")[0].addEventListener("change", skillSelect);

	colors = document.getElementsByName("favoriteColor");
	for(let i = 0; i < colors.length; i++)
		colors[i].addEventListener("click", colorChanged);

	let employees = document.querySelectorAll(".empName");
	for(let i = 0; i < employees.length; i++)
		employees[i].addEventListener("mouseover", empHover);

	theClock();

	document.getElementById("helloWorld").addEventListener("click", helloClicked);
	walkTheDom(document, function(node){
		console.log(node);
	})
}

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

function fib(nth)
{
	let count = 1;
	let previous = 0;
	let current = 1;

	while(count < nth)
	{
		let next = current + previous;
		previous = current;
		current = next;
		count++;
	}
	return current;
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray)
{
	let done = false;
	while(!done)
	{
		let swapped = false;
		for(let i = 0; i < numArray.length; i++)
		{
			if(i+1 < numArray.length && numArray[i] > numArray[i+1])
			{
				let temp = numArray[i];
				numArray[i] = numArray[i+1];
				numArray[i+1]  = temp;
				swapped = true;
			}
		}
		if(!swapped)
			done = true;
	}
	return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr)
{
	let chars = someStr.split("");
	let reversed = [];
	for(let i = chars.length-1; i >=0; i--)
		reversed.push(chars[i]);
	return reversed.join("");
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum)
{
	if(someNum == 1)
		return 1;
	return someNum*factorial(someNum - 1); 
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset)
{
	if(offset < 0 || length < 0 || length+offset-1 > someStr.length)
	{
		alert("parameters exceed string bounaries");
		return;
	}
	let chars = someStr.split("");
	let sub = [];
	for(let i = offset; i < offset+length; i++)
		sub.push(chars[i]);
	return sub.join("");
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum)
{
	let even = true;
	for(let i = 0; i < someNum; i++)
		even = !even;
	return even;
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr)
{
	let chars = someStr.split("");
	let rev = [];
	for(let i = chars.length-1; i >= 0; i--)
		rev.push(chars[i]);
	if(rev.join("") == someStr)
		return true;
	return false;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character)
{
	switch(shape)
	{
		case "Square":
			for(let i = 0; i < height; i++)
			{
				//console.log("new square line created");
				let line = [];
				for(let j = 0; j < height; j++)
					line.push(character);
				console.log(line.join(""));
			}
			break;
		case "Triangle":
			for(let i = 1; i <= height; i++)
			{
				let line = [];
				for(let j = 0; j < i; j++)
					line.push(character);
				console.log(line.join(""));
			}
			break;
		case "Diamond":
			let count = 1;
			let up = true;
			while(count > 0)
			{
				if(count < height)
				{
					let spacecount = (height-count)/2;
					let spaces = " ".repeat(spacecount);
					let chars = character.repeat(count);
					let line = spaces + chars + spaces;
					console.log(line);
				}
				if(count == height)
				{
					console.log(character.repeat(height));
					up = false;
				}
				if(up)
					count += 2;
				else
					count -= 2;
			}
	}
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function traverseObject(object)
{
	for(let property in object)
		console.log(`Propert: ${property}, Value: ${object[property]}`);
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr)
{
	console.log(someArr.length);
	someArr[2] = undefined;
	console.log(someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function splicElement(someArr)
{
	console.log(someArr.length);
	let newvalues = [];
	for(let i = 0; i < someArr.length; i++)
	{
		if(i != 2)
			newvalues.push(someArr[i])
	}
	newvalues.push(someArr[2])
	for(let i = 0; i < someArr.length; i++)
		someArr[i] = newvalues[i];
	console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);

function Person(name, age)
{
	this.name = name;
	this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);

function getPerson(name, age)
{
	return {name:name, age:age};
}
 

 
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA()
{

	let h1 = document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
	let span = h1.firstElementChild.nextElementSibling;
	console.log(`Element type: ${span.nodeName}, Element content: ${span.innerText}`);
}
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales()
{
	let p = document.getElementById("helloWorld");
	let div = p.nextElementSibling;
	let table = div.firstElementChild;
	let tbody = table.firstElementChild;
	let rows = tbody.childNodes;
	for(let i = 0; i < rows.length; i++)
	{
		if(rows[i].nodeName === "TR")
		{
			let elements = rows[i].childNodes;
			for(let j = 0; j < elements.length; j++)
			{
				if(elements[j].nodeName ===  "TD")
				{
					if(elements[j].innerText === "Sales")
						console.log(elements[j].previousElementSibling.innerText);
				}
			}
		}
	}
}
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren()
{
	let anchors = document.getElementsByTagName("a");
	for(let i = 0; i < anchors.length; i++)
	{
		let children = anchors[i].childNodes;
		for(let j = 0; j < children.length; j++)
		{
			if(children[j].nodeName === "SPAN")
				console.log(children[j].innerText);
		}
	}
}
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies()
{
	let select = document.getElementsByName("skills")[0];
	let selected = select.options[select.selectedIndex];
	let svalue = selected.value;
	let stext = selected.text;
	console.log(`Selected value: ${svalue}, Selected text: ${stext}`);
}
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute()
{
	let elements = document.querySelectorAll("[data-customAttr]");
	for(let i = 0; i < elements.length; i++)
	{
		let element = elements[i].nodeName;
		let value = elements[i].getAttribute("data-customAttr");
		console.log(`Element: ${element}, Value: ${value}`);
	}
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

function sumInputs()
{
	let span = document.getElementById("sum");
	let in1 = document.getElementById("num1");
	let in2 = document.getElementById("num2");
	let sum = parseInt(in1.value)+parseInt(in2.value);
	if(isNaN(sum))
		span.innerText = "Cannot add";
	else
		span.innerText = sum;
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

function skillSelect()
{
	let skills = document.getElementsByName("skills")[0];
	let skill = skills.options[skills.selectedIndex].value;
	alert(`Are you sure ${skill} is one of your skills?`);
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

function colorChanged(event)
{
	let selected = event.target;
	let color = selected.value;

	for(let i = 0; i < colors.length; i++)
	{
		let text = colors[i].nextSibling;
		let br = text.nextSibling;
		let parent = text.parentNode;

		let p = document.createElement("p");
		p.innerText = text.textContent;
		parent.removeChild(text);

		parent.insertBefore(p, br);
		p.style.backgroundColor = color;
		p.style.display = "inline";
	}
	
	if(lastColor == undefined)
	{
		lastColor = color;
	}
	else
	{
		alert(`So you like ${color} more than ${lastColor} now?`);
		lastcolor = color;
	}
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

function empHover(event)
{
	let emp = event.target;
	let opacity = window.getComputedStyle(emp, null)["opacity"];
	if(opacity == 1)
		emp.style.opacity = 0;
	else
		emp.style.opacity = 1;	
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function theClock()
{
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	if(sec < 10)
		sec = "0" + sec;

	if(min < 10)
		min = "0" + min;

	let suf;

	if(hour > 12)
	{
		hour = hour - 12;
		suf = "PM";
	}
	else
		suf = "AM";

	let dis = document.getElementById("currentTime");
	dis.innerText = hour + ":" + min + ":" + sec + " "+suf;

	setTimeout(theClock, 500);
}

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function helloClicked()
{
	setTimeout(function(){
		let text = document.getElementById("helloWorld");
		let r = Math.floor(Math.random()*255 + 1);
		let g = Math.floor(Math.random()*255 + 1);
		let b = Math.floor(Math.random()*255 + 1);
		text.style.color = `rgb(${r},${g},${b}`;
	}, 3000);
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDom(node, func)
{
	let children = node.childNodes;
	for(let i = 0; i < children.length; i++)
	{
		func(children[i]);
		walkTheDom(children[i], func);
	}
}

addEventListener("load", start, false);
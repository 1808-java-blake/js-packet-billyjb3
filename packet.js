var lastColor;
var colors;

function start()
{
	//1 1 2 3 5 8 13
	// console.log(fib(7));

	// let array = [1, 5, 3, 6, 2, 8, 23, 64, 12, 43, 11, 75, 45, 23, 53, 74];
	// console.log(bubbleSort(array));
	// console.log(reverseStr("reverse this"));
	// console.log(factorial(5));
	// console.log(substring("substring" ,3, 1));
	// console.log(isEven(17));
	// console.log(isPalindrome("adcda"));
	// printShape("Square", 3, "*");
	// printShape("Triangle", 5, "*");
	// printShape("Diamond", 7, "*");
	// let testobject = {name: "testobject", color: "green", age: 5};
	// console.log(testobject.name);
	// traverseObject(testobject);
	// console.log(array);
	// deleteElement(array);
	// console.log(array);

	// console.log(array);
	// splicElement(array);
	// console.log(array);

	// let john = getPerson("john", 25);
	// console.log(john.name);
	// console.log(john.age);

	//getUSA();
	//getPeopleInSales();
	//getAnchorChildren();
	//getHobbies();
	//getCustomAttribute();

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
}


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

function reverseStr(someStr)
{
	let chars = someStr.split("");
	let reversed = [];
	for(let i = chars.length-1; i >=0; i--)
		reversed.push(chars[i]);
	return reversed.join("");
}

function factorial(someNum)
{
	if(someNum == 1)
		return 1;
	return someNum*factorial(someNum - 1); 
}

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

function isEven(someNum)
{
	let even = true;
	for(let i = 0; i < someNum; i++)
		even = !even;
	return even;
}

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

function traverseObject(object)
{
	for(let property in object)
		console.log(`Propert: ${property}, Value: ${object[property]}`);
}

function deleteElement(someArr)
{
	console.log(someArr.length);
	someArr[2] = undefined;
	console.log(someArr.length);
}

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

function Person(name, age)
{
	this.name = name;
	this.age = age;
}

function getPerson(name, age)
{
	return {name:name, age:age};
}


///////////////////////////////PART 2///////////////////////////////


function getUSA()
{

	// let h1 = document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
	// let span = h1.firstElementChild.nextElementSibling;
	// console.log(`Element type: ${span.nodeName}, Element content: ${span.innerText}`);
}

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

function getHobbies()
{
	let select = document.getElementsByName("skills")[0];
	let selected = select.options[select.selectedIndex];
	let svalue = selected.value;
	let stext = selected.text;
	console.log(`Selected value: ${svalue}, Selected text: ${stext}`);
}

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

function skillSelect()
{
	let skills = document.getElementsByName("skills")[0];
	let skill = skills.options[skills.selectedIndex].value;
	alert(`Are you sure ${skill} is one of your skills?`);
}

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

function empHover(event)
{
	let emp = event.target;
	let opacity = window.getComputedStyle(emp, null)["opacity"];
	if(opacity == 1)
		emp.style.opacity = 0;
	else
		emp.style.opacity = 1;	
}

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

function helloClicked()
{
	setTimeout(helloColor, 3000);
}
function helloColor()
{
	let text = document.getElementById("helloWorld");
	let r = Math.floor(Math.random()*255 + 1);
	let g = Math.floor(Math.random()*255 + 1);
	let b = Math.floor(Math.random()*255 + 1);
	text.style.color = `rgb(${r},${g},${b}`;
}

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
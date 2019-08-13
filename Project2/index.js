let num = "", num1 = "", num2 = "", doNext = 0;
function push (i) {
	if(num || i) {
		num += i;
		print(num);
	}
	else
		print("");
}

function operation (i) 
{
	switch (i) 
	{
		case 'equal':
		manipulate();

		break;

		case 'CE':
			num = "";
			print("");
		break;

		case 'C':
			num = num1 = num2 = "";
			print("");
			printH("");
			printH2("");
		break;

		case 'backspace':
			let num12 = document.getElementById('resultArea').value;
			if(num12.length)
			{
				console.log([num12.length - 1]);
				num = num12;
				print(num);
			}
		break;

		case 'divide':
		if(document.getElementById('numArea').value) 
		{
			manipulate();
			doNext = 1;
		}
		else 
		{
			document.getElementById('numArea').value = num;
			doNext = 1;
			num = "";
			print(""); 
		}	
		break;

		case 'multiply':
		if(document.getElementById('numArea').value) 
		{
			manipulate();
			doNext = 2;
		}
		else 
		{
			document.getElementById('numArea').value = num;
			doNext = 2;
			num = "";
			print(""); 
		}
		break;

		case 'minus':
		if(document.getElementById('numArea').value) 
		{
			manipulate();
			doNext = 3;
		}
		else 
		{
			document.getElementById('numArea').value = num;
			doNext = 3;
			num = "";
			print(""); 
		}
		break;

		case 'summ':
		if(document.getElementById('numArea').value) 
		{
			manipulate();
			doNext = 4;
		}
		else 
		{
			document.getElementById('numArea').value = num;
			doNext = 4;
			num = "";
			print(""); 
		}
		break;

		case 'inversion':
		
		break;

		case 'point':
		
		break;
	}
}

function manipulate () {
	switch (doNext) {
		case 1:
			num1 = document.getElementById('numArea').value;
			document.getElementById('numArea2').value = num;
			num = parseInt(num1) / parseInt(num);
			document.getElementById('numArea').value = num;
			num="";
			print("");
		break;

		case 2:
			num1 = document.getElementById('numArea').value;
			document.getElementById('numArea').value = num;
			num = parseInt(num1) * parseInt(num);
			document.getElementById('numArea').value = num;
			num="";
			print("");
		break;

		case 3:
			num1 = document.getElementById('numArea').value;
			document.getElementById('numArea').value = num;
			num = parseInt(num1) - parseInt(num);
			document.getElementById('numArea').value = num;
			num="";
			print("");
		break;

		case 4:
			num1 = document.getElementById('numArea').value;
			document.getElementById('numArea').value = num;
			document.getElementById('numArea').value = num;
			num="";
			print("");
		break;
	}
}
function print (someText) {
	document.getElementById('resultArea').value = someText;
}

function printH (someText) {
	document.getElementById('numArea').value = someText;
}

function printH2 (someText) {
	document.getElementById('numArea2').value = someText;
}
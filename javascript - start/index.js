var name = prompt("what is your name:");

var firstChar = name.slice(0, 1);

var UpperCaseOfName =  firstChar.toUpperCase();

var restOfName = name.slice(1, name.length);

restOfName = restOfName.toLowerCase();

var capitalisedName = UpperCaseOfName + restOfName;

alert("Hello " + capitalisedName);



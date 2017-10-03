$(document).ready(function() {
	$(".settingsPage").hide();
	$(".creditsPage").hide();
	upgradeArray=[];
	byteUpgradeSecArray=[];
	byteUpgradeIdeaArray=[];
	
	function fillUpgradeArray()
	{
		var counter = 1;
		while(counter<=14)
		{
			upgradeArray.push('#upgrade'+counter);
			counter++
		}
	}

fillUpgradeArray()

	function fillByteUpgradeSec()
	{
		var counter=3;
		while(counter<=8)
		{
			byteUpgradeSecArray.push("#byteUpgradeSec"+counter);
			counter++
		}
	}

fillByteUpgradeSec()

	function fillByteUpgradeIdeaArray()
	{
		var counter=1;
		while(counter<=5)
		{
			byteUpgradeIdeaArray.push("#byteUpgradeIdea"+counter);
			counter++
		}	
	}

fillByteUpgradeIdeaArray()
	
	function hideThem(a)
	{
		for(i=0;i<=a.length;i++)
		{
			$($(a[i])).hide();
		}
	}
	
hideThem(upgradeArray);
hideThem(byteUpgradeSecArray);
hideThem(byteUpgradeIdeaArray);

	function hoverThem(a,b){
		$($(a)).hover(function(){
			$($(b)).toggle();
		})
	}
	
	hoverThem($("#byteUpgradeSec1"),upgradeArray[0]);
	hoverThem($("#byteUpgradeSec2"),upgradeArray[1]);
	hoverThem(byteUpgradeSecArray[0],upgradeArray[2]);
	hoverThem(byteUpgradeSecArray[1],upgradeArray[3]);
	hoverThem(byteUpgradeSecArray[2],upgradeArray[4]);
	hoverThem(byteUpgradeSecArray[3],upgradeArray[5]);
	hoverThem(byteUpgradeSecArray[4],upgradeArray[6]);
	hoverThem(byteUpgradeSecArray[5],upgradeArray[7]);
	hoverThem(byteUpgradeIdeaArray[0],upgradeArray[8]);
	hoverThem(byteUpgradeIdeaArray[1],upgradeArray[9]);
	hoverThem(byteUpgradeIdeaArray[2],upgradeArray[10]);
	hoverThem(byteUpgradeIdeaArray[3],upgradeArray[11]);
	hoverThem(byteUpgradeIdeaArray[4],upgradeArray[12]);
	hoverThem(byteUpgradeIdeaArray[5],upgradeArray[13]);

});

function Bytes() {
	this.bytes = 0,
		this.upgrades = 0,
		this.perClick = 1,
		this.perSec = 0,
		this.upgrade1 = 1;
}

// var upgrade1 = 15;
// var upgrade2 = 100;
// var upgrade3 = 600;
// var upgrade4 = 10000;
// var upgrade5 = 150000;
// var upgrade6 = 1600000;
// var upgrade7 = 21000000;
// var upgrade8 = 110000000;

var clicker = new Bytes();
var count = 0;
var total = 0

/*var sound1 = document.getElementById("myAudio1");

var playAudio1 = function() {
    sound1.play();
}*/

/*var changePrice = function(price, id) {
	price *= 2;
	document.getElementById(id).innerHTML = price + " bytes";
};
*/

// Function for the receipt
function appendText(space, bytes) {
	if (clicker.cookies <= 0) {
		return false;
	} else {
		count += 1
		total += 1
		var txt1 = "<p>You bought a " + space + " for " + bytes + " bytes, and you have " + clicker.bytes + " bytes remaing. You have bought " + count + " upgrades.</p>";
		$("#filePlot").append(txt1); // Append new elements
	}

	if (total === 10) {
		total = 0
		var txt1 = "<p>You have " + clicker.bytes + " bytes left over after buying " + count + " upgrades.</p>";
		$("#filePlot").append(txt1);
	} else {
		return false;
	}
};

var dateFunc = function() {
	setInterval(function() {
		document.getElementById("dateCount").innerHTML = Date();
	}, 1000);
};

// showUpgrades main function
var showUpgrades = function(amount, name) {
	if (clicker.bytes >= amount) {
		$(name).show();
	};
};

// showCode main function
var showCode = function(amount, id, name) {
	if (clicker.bytes >= amount) {
		var idea = document.getElementById(id).innerHTML = name;
	}
};

// Change price function
var changePrice = function(originalMoney) {
	originalMoney * 2
}

// Game function. Contains all the show code and show upgrade functions.
var game = function() {
	// Show code function calls
	showCode(0, "code1", "Storage Addition");
	showCode(70, "code2", "Addition++");
	showCode(550, "code3", "File system+++");
	showCode(9950, "code4", "Search bytes");
	showCode(149950, "code5", "Files+++");
	showCode(4999950, "code6", "Byte-o-rama");
	showCode(74999950, "code7", "Searching and create");
	showCode(129999950, "code8", "Searching and create+");
	showCode(100, "idea1", "Clicker update");
	showCode(400, "idea2", "Clicker update++");
	showCode(900, "idea3", "Clicker update+++");
	showCode(9000, "idea4", "Clicker update++++");
	showCode(950000000, "idea5", "Super Computer");

	// Upgrade function calls
	showUpgrades(350, "#byteUpgradeSec3");
	showUpgrades(1000, "#byteUpgradeSec4");
	showUpgrades(10000, "#byteUpgradeSec5");
	showUpgrades(400000, "#byteUpgradeSec6");
	showUpgrades(5000000, "#byteUpgradeSec7");
	showUpgrades(10000000, "#byteUpgradeSec8");
	showUpgrades(70, "#byteUpgradeIdea1");
	showUpgrades(200, "#byteUpgradeIdea2");
	showUpgrades(800, "#byteUpgradeIdea3");
	showUpgrades(8000, "#byteUpgradeIdea4");
	showUpgrades(900000000, "#byteUpgradeIdea5");
};

var invalid = function() {
	alert("Sorry! You don't have enough space to buy a space upgrade!");
};;

var spaceGenPerSec = function() {
	setInterval(function() {
		var second = document.getElementById("perSecond").innerHTML = "per second: " + clicker.perSec + "";
		clicker.bytes = sumDecimals(clicker.bytes, clicker.perSec);
		var perSec = document.getElementById("bytes").innerHTML = "Bytes: " + clicker.bytes + "";
	}, 1000);
};

// Minified code functions
var idea = function(name, cost, addition) {
	if (clicker.bytes >= cost) {
		clicker.perClick = sumDecimals(clicker.perClick, addition);
		clicker.bytes = sumDecimals(clicker.bytes, -cost);		
	}
}

/**
 * Return the sum of two numbers,
 * fixing floating point errors
 */
function sumDecimals(n1, n2) {
  let a = n1+'';
  let b = n2+'';
  let aIntegerPart = a.indexOf('.') !== -1? a.indexOf('.') - 1 : a.length; 
  let aFractalPart = a.indexOf('.') !== -1? (a.length - a.indexOf('.')) : 0;
  let bIntegerPart = b.indexOf('.') !== -1? b.indexOf('.') - 1 : b.length; 
  let bFractalPart = b.indexOf('.') !== -1? (b.length - b.indexOf('.')) : 0;
  let maxLength = Math.max(aIntegerPart,bIntegerPart) + Math.max(aFractalPart,bFractalPart) + 1;
  return Number((n1 + n2).toPrecision(maxLength));
}

var upgrade = function(name, cost, addition) {
	if (clicker.bytes >= cost) {
		clicker.perSec = sumDecimals(clicker.perSec, addition);
		clicker.bytes = sumDecimals(clicker.bytes, -cost);
	}
}

var idea2 = function(name, cost, addition) {
	if (clicker.bytes >= cost) {
		clicker.perSec *= addition;
		clicker.perClick *= addition;
		clicker.bytes = sumDecimals(clicker.bytes, -cost);
	}
}

spaceGenPerSec();

var secondFunction = function() {
	setInterval(function() {
		game();
		showUpgrades();
	}, 100);
};

secondFunction();

var spaceGen = function() {
	clicker.bytes = sumDecimals(clicker.bytes, clicker.perClick);
	var count = document.getElementById("bytes").innerHTML = "Bytes: " + clicker.bytes + "";
};

// TODO: Minify code. See idea(), upgrade(), and idea2();
// TODO: Fix the changePrice function.
// TODO: Add music and sounds.
// IDEA: Add graphics.

/*
IDEA code:
setInterval(function() { showCode(80, "idea1", "one") },10);
*/

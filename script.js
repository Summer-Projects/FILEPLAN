$(document).ready(function() {
	$(".settingsPage").hide();
	$(".creditsPage").hide();
	$("#upgrade1").hide();
	$("#upgrade2").hide();
	$("#upgrade3").hide();
	$("#upgrade4").hide();
	$("#upgrade5").hide();
	$("#upgrade6").hide();
	$("#upgrade7").hide();
	$("#upgrade8").hide();
	$("#upgrade9").hide();
	$("#upgrade10").hide();
	$("#upgrade11").hide();
	$("#upgrade12").hide();
	$("#upgrade13").hide();
	$("#upgrade14").hide();
	$("#byteUpgradeSec3").hide();
	$("#byteUpgradeSec4").hide();
	$("#byteUpgradeSec5").hide();
	$("#byteUpgradeSec6").hide();
	$("#byteUpgradeSec7").hide();
	$("#byteUpgradeSec8").hide();
	$("#byteUpgradeIdea1").hide();
	$("#byteUpgradeIdea2").hide();
	$("#byteUpgradeIdea3").hide();
	$("#byteUpgradeIdea4").hide();
	$("#byteUpgradeIdea5").hide();

	$("#byteUpgradeSec1").hover(function() {
		$("#upgrade1").show();
	}, function() {
		$("#upgrade1").hide();
	});

	$("#byteUpgradeSec2").hover(function() {
		$("#upgrade2").show();
	}, function() {
		$("#upgrade2").hide();
	});

	$("#byteUpgradeSec3").hover(function() {
		$("#upgrade3").show();
	}, function() {
		$("#upgrade3").hide();
	});

	$("#byteUpgradeSec4").hover(function() {
		$("#upgrade4").show();
	}, function() {
		$("#upgrade4").hide();
	});

	$("#byteUpgradeSec5").hover(function() {
		$("#upgrade5").show();
	}, function() {
		$("#upgrade5").hide();
	});

	$("#byteUpgradeSec6").hover(function() {
		$("#upgrade6").show();
	}, function() {
		$("#upgrade6").hide();
	});

	$("#byteUpgradeSec7").hover(function() {
		$("#upgrade7").show();
	}, function() {
		$("#upgrade7").hide();
	});

	$("#byteUpgradeSec8").hover(function() {
		$("#upgrade8").show();
	}, function() {
		$("#upgrade8").hide();
	});

	$("#byteUpgradeIdea1").hover(function() {
		$("#upgrade9").show();
	}, function() {
		$("#upgrade9").hide();
	});

	$("#byteUpgradeIdea2").hover(function() {
		$("#upgrade10").show();
	}, function() {
		$("#upgrade10").hide();
	});

	$("#byteUpgradeIdea3").hover(function() {
		$("#upgrade11").show();
	}, function() {
		$("#upgrade11").hide();
	});

	$("#byteUpgradeIdea4").hover(function() {
		$("#upgrade12").show();
	}, function() {
		$("#upgrade12").hide();
	});

	$("#byteUpgradeIdea5").hover(function() {
		$("#upgrade13").show();
	}, function() {
		$("#upgrade13").hide();
	});

	$("#byteUpgradeIdea6").hover(function() {
		$("#upgrade14").show();
	}, function() {
		$("#upgrade14").hide();
	});
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
// clicker function
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

var showUpgrades = function(amount, name) {
	if (clicker.bytes >= amount) {
		$(name).show();
	};
};

var dateFunc = function() {
	setInterval(function() {
		document.getElementById("dateCount").innerHTML = Date();
	}, 1000);
};

var showCode = function(amount, id, name) {
	if (clicker.bytes >= amount) {
		var idea = document.getElementById(id).innerHTML = name;
	}
};

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
};

var spaceGenPerSec = function() {
	setInterval(function() {
		var second = document.getElementById("perSecond").innerHTML = "per second: " + clicker.perSec + "";
		clicker.bytes += clicker.perSec;
		var perSec = document.getElementById("bytes").innerHTML = "Bytes: " + clicker.bytes + "";
	}, 1000);
};

// Minified code functions
var idea = function(name, cost, addition) {
	if (clicker.bytes >= cost) {
		clicker.perClick += addition;
		clicker.bytes -= cost;
	}
}

var upgrade = function(name, cost, addition) {
	if (clicker.bytes >= cost) {
		clicker.perSec += addition;
		clicker.bytes -= cost;
	}
}

var idea2 = function(name, cost, addition) {
	if (clicker.bytes >= cost) {
		clicker.perSec *= addition;
		clicker.perClick *= addition;
		clicker.bytes -= cost;
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
	clicker.bytes += clicker.perClick;
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

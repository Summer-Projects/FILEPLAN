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
	$("#byteUpgradeIdea6").hide();

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
	this.upgrade1 = 15;
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
	if(clicker.cookies <= 0) {
		return false;
	}else{
		count += 1
		total += 1
		var txt1 = "<p>You bought a " + space +  " for " + bytes + " bytes, and you have " + clicker.bytes + " bytes remaing. You have bought " + count + " upgrades.</p>";
		$("#filePlot").append(txt1);     // Append new elements
	}

	if(total === 10) {
		total = 0
		var txt1 = "<p>You have " + clicker.bytes + " bytes left over after buying " + count + " upgrades.</p>" ;
		$("#filePlot").append(txt1);
	}else{
		return false;
	}
};

var showUpgrades = function() {
	if(clicker.bytes >= 350) {
		$("#byteUpgradeSec3").show();
	}

	if(clicker.bytes >= 1000) {
		$("#byteUpgradeSec4").show();
	}

	if(clicker.bytes >= 10000) {
		$("#byteUpgradeSec5").show();
	}

	if(clicker.bytes >= 4000000) {
		$("#byteUpgradeSec6").show();
	}

	if(clicker.bytes >= 50000000) {
		$("#byteUpgradeSec7").show();
	}

	if(clicker.bytes >= 100000000) {
		$("#byteUpgradeSec8").show();
	}

	if(clicker.bytes >= 70) {
		$("#byteUpgradeIdea1").show();
	}

	if(clicker.bytes >= 200) {
		$("#byteUpgradeIdea2").show();
	}

	if(clicker.bytes >= 800) {
		$("#byteUpgradeIdea3").show();
	}

	if(clicker.bytes >= 8000)  {
		$("#byteUpgradeIdea4").show();
	}

	if(clicker.bytes >= 900000000) {
		$("#byteUpgradeIdea5").show();
	}

	if(clicker.bytes >= 200) {
		$("#byteUpgradeIdea6").show();
	}
};

var dateFunc = function() {
	setInterval(function() {
        document.getElementById("dateCount").innerHTML = Date();
    },1000);
};

var showCode = function() {
	if(clicker.bytes >= 0) {
		var code1 = document.getElementById("code1").innerHTML = "Storage Addition";
	}

	if(clicker.bytes >= 70) {
		var code2 = document.getElementById("code2").innerHTML = "Addition++";
	}

	if(clicker.bytes >= 550) {
		var code3 = document.getElementById("code3").innerHTML = "File system+++";
	}

	if(clicker.bytes >= 9950) {
		var code4 = document.getElementById("code4").innerHTML = "Search bytes";
	}

	if(clicker.bytes >= 149950) {
		var code5 = document.getElementById("code5").innerHTML = "Files+++";
	}

	if(clicker.bytes >= 4999950) {
		var code6 = document.getElementById("code6").innerHTML = "Byte-o-rama";
	}

	if(clicker.bytes >= 74999950) {
		var code7 = document.getElementById("code7").innerHTML = "Searching and create";
	}

	if(clicker.bytes >= 129999950) {
		var code8 = document.getElementById("code8").innerHTML = "Searching and create+";
	}

	if(clicker.bytes >= 100) {
		var idea1 = document.getElementById("idea1").innerHTML = "Clicker update";
	}

	if(clicker.bytes >= 400) {
		var idea2 = document.getElementById("idea2").innerHTML = "Clicker update++";
	}

	if(clicker.bytes >= 900) {
		var idea3 = document.getElementById("idea3").innerHTML = "Clicker update+++";
	}

	if(clicker.bytes >= 9000) {
		var idea4 = document.getElementById("idea4").innerHTML = "Clicker update++++";
	}

	if(clicker.bytes >= 950000000) {
		var idea5 = document.getElementById("idea5").innerHTML = "Super Computer";
	}

	if(clicker.bytes >= 250) {
		var idea5 = document.getElementById("idea6").innerHTML = "Times Production";
	}
};

var invalid = function() {
	alert("Sorry! You don't have enough space to buy a space upgrade!");
};

var spaceGenPerSec = function() {
	setInterval(function() {
		var second = document.getElementById("perSecond").innerHTML = "per second: " + clicker.perSec + "";
		clicker.bytes += clicker.perSec;
		var perSec = document.getElementById("bytes").innerHTML = "Bytes: " + clicker.bytes + "";
	},1000);
};

var upgrade1 = function() {
	if(clicker.bytes >= 15) {
		clicker.perSec += 1;
		clicker.bytes -= 15;
		clicker.upgrades += clicker.upgrade1;
	//	changePrice(upgrade1, "space1");
	}else{
		invalid();
	}
};

var upgrade2 = function() {
	if(clicker.bytes >= 100) {
		clicker.perSec += 7;
		clicker.bytes -= 100;
		clicker.upgrades += 1;
	//	changePrice(upgrade2, "space2");
	}else{
		invalid();
	}
};

var upgrade3 = function() {
	if(clicker.bytes >= 600) {
		clicker.perSec += 42;
		clicker.bytes -= 600;
		clicker.upgrades += 1;
	//	changePrice(upgrade3, "space3");
	}else{
		invalid();
	}
};

var upgrade4 = function() {
	if(clicker.bytes >= 10000) {
		clicker.perSec += 100;
		clicker.bytes -= 10000;
		clicker.upgrades += 1;
	//	changePrice(upgrade4, "space4");
	}else{
		invalid();
	}
};

var upgrade5 = function() {
	if(clicker.bytes >= 150000) {
		clicker.perSec += 230;
		clicker.bytes -= 150000;
		clicker.upgrades += 1;
	//	changePrice(upgrade5, "space5");
	}else{
		invalid();
	}
};

var upgrade6 = function() {
	if(clicker.bytes >= 1600000) {
		clicker.perSec += 1600;
		clicker.bytes -= 1600000;
		clicker.upgrades += 1;
	//	changePrice(upgrade6, "space6");
	}else{
		invalid();
	}
};

var upgrade7 = function() {
	if(clicker.bytes >= 21000000) {
		clicker.perSec += 8000;
		clicker.bytes -= 21000000;
		clicker.upgrades += 1;
	//	changePrice(upgrade7, "space7");
	}else{
		invalid();
	}
};

var upgrade8 = function() {
	if(clicker.bytes >= 110000000) {
		clicker.perSec += 32000;
		clicker.bytes -= 110000000;
		clicker.upgrades += 1;
	//	changePrice(upgrade8, "space8");
	}else{
		invalid();
	}
};

spaceGenPerSec();

var secondFunction = function() {
	setInterval(function() {
		showCode();
		showUpgrades();
	},100);
};

secondFunction();

var spaceGen = function() {
	clicker.bytes += clicker.perClick;
	var count = document.getElementById("bytes").innerHTML = "Bytes: " + clicker.bytes + "";
};

// Idea lister 5:20

// Clicker update

var idea1 = function() {
	if(clicker.bytes >= 200) {
		clicker.bytes -= 200;
		clicker.perClick += 3
		$("#byteUpgradeIdea1").hide();
	}else{
		invalid();
	}
};

//Clicker update++
var idea2 = function() {
	if(clicker.bytes >= 500) {
		clicker.bytes -= 500;
		clicker.perClick += 100
		$("#byteUpgradeIdea2").hide();
	}else{
		invalid();
	}
};

//Clicker update+++
var idea3 = function() {
	if(clicker.bytes >= 1000) {
		clicker.bytes -= 1000;
		clicker.perClick += 1000;
		$("#byteUpgradeIdea3").hide();
	}else{
		invalid();
	}
};

//Clicker update++++
var idea4 = function() {
	if(clicker.bytes >= 10000) {
		clicker.bytes -= 10000;
		clicker.perClick += 100000;
		$("#byteUpgradeSec4").hide();
	}else{
		invalid();
	}
};

// Everthing times five
var idea5 = function() {
	if(clicker.bytes >= 1000000000) {
		clicker.bytes -= 1000000000;
		clicker.perClick *= 5;
		clicker.perSec *= 5;
		$("#byteUpgradeIdea5").hide();
	}else{
		invalid();
	}
};

// upgrade idea1 prodution times two
var idea6 = function() {
	if(clicker.bytes >= 300) {
		clicker.upgrade1 * 2;
	}else{
		invalid();
	}
};

var tests = function() {
	spacenGen();
};

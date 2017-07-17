$(document).ready(function() { 
	$(".settingsPage").hide();
	$(".creditsPage").hide();
	$("#byteUpgradeSec3").hide();
	$("#byteUpgradeSec4").hide();
	$("#byteUpgradeSec5").hide();
	$("#byteUpgradeSec6").hide();
	$("#byteUpgradeSec7").hide();
	$("#byteUpgradeSec8").hide();
});

function Bytes() {
	this.bytes = 0,
	this.upgrades = 0,
	this.perClick = 1,
	this.perSec = 0;
}

var clicker = new Bytes();

var showUpgrades = function() {
	if(clicker.bytes >= 350) {
		$("#byteUpgradeSec3").show();
	}
	
	if(clicker.bytes >= 1000) {
		$("#byteUpgradeSec4").show();
	}
	
	if(clicker.bytes >= 100000) {
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
		var code7 = document.getElementById("code5").innerHTML = "Searching and create";
	}
	
	if(clicker.bytes >= 129999950) {
		var code8 = document.getElementById("code6").innerHTML = "Searching and create++";
	}
};
/*
var showCode = function(bytes,id,text) {
	if(clicker.bytes >= bytes) {
		var code = document.getElementById(id).innerHTML = text;
	}
};*/

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
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade2 = function() {
	if(clicker.bytes >= 100) {
		clicker.perSec += 7;
		clicker.bytes -= 100;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade3 = function() {
	if(clicker.bytes >= 600) {
		clicker.perSec += 8;
		clicker.bytes -= 600;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade4 = function() {
	if(clicker.bytes >= 10000) {
		clicker.perSec += 45;
		clicker.bytes -= 10000;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade5 = function() {
	if(clicker.bytes >= 150000) {
		clicker.perSec += 230;
		clicker.bytes -= 150000;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade6 = function() {
	if(clicker.bytes >= 1600000) {
		clicker.perSec += 1600;
		clicker.bytes -= 1600000;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade7 = function() {
	if(clicker.bytes >= 21000000) {
		clicker.perSec += 8000;
		clicker.bytes -= 21000000;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade8 = function() {
	if(clicker.bytes >= 110000000) {
		clicker.perSec += 32000;
		clicker.bytes -= 110000000;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};


/*showCode();
showUpgrades();*/
spaceGenPerSec();

var spaceGen = function() {
	clicker.bytes += clicker.perClick;
	var count = document.getElementById("bytes").innerHTML = "Bytes: " + clicker.bytes + "";
	/*showCode(0,"code1", "Storage Addition")
	showCode(70,"code2", "Addition++")*/
	showUpgrades();
};

// Right Panel

// Clicker update

var idea1 = function() {
	if(clicker.bytes >= 200) {
		clicker.bytes -= 200;
		clicker.perClick += 3
	}else{
		invaild();
	}
};

//Clicker update++
var idea2 = function() {
	if(clicker.bytes >= 500) {
		clicker.bytes -= 500;
		clicker.perClick += 100
	}else{
		invaild();
	}
};

//Clicker update+++
var idea3 = function() {
	if(clicker.bytes >= 10000) {
		clicker.bytes -= 10000;
		clicker.perClick += 10000
	}else{
		invaild();
	}
};

//Clicker update++++
var idea3 = function() {
	if(clicker.bytes >= 100000) {
		clicker.bytes -= 100000;
		clicker.perClick += 1000000
	}else{
		invaild();
	}
};

/*$(document).ready(function() {
	$("#credit").click(function() { 
		$(".creditsPage").show();
		$("#credit").html("<i class="fa fa-sign-out" class="credit"></i>");
		$("#credit").click(function() { 
			$("credits").hide();
			$("#credit").html("<i class="material-icons" id="credit">info_outline</i>");
		});
	});
	$("#credit").click(function() { 
		$(".creditsPage").hide();
	});
});*/

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
		clicker.perSec += 0.1;
		clicker.bytes -= 15;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade2 = function() {
	if(clicker.bytes >= 100) {
		clicker.perSec += 1;
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
	if(clicker.bytes >= 5000000) {
		clicker.perSec += 500;
		clicker.bytes -= 5000000;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade7 = function() {
	if(clicker.bytes >= 75000000) {
		clicker.perSec += 4000;
		clicker.bytes -= 75000000;
		clicker.upgrades += 1;
	}else{
		invalid();
	}
};

var upgrade8 = function() {
	if(clicker.bytes >= 130000000) {
		clicker.perSec += 32000;
		clicker.bytes -= 130000000;
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
	showCode();
	showUpgrades();
};
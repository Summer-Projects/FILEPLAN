/*$(document).ready(function() {
	$('#credit').click(function() { 
		$('.creditsPage').show();
		$('#credit').html('<i class="fa fa-sign-out" class="credit"></i>');
		$('#credit').click(function() { 
			$('credits').hide();
			$('#credit').html('<i class="material-icons" id="credit">info_outline</i>');
		});
	});
	$('#credit').click(function() { 
		$('.creditsPage').hide();
	});
});*/

function Bytes() {
	this.bytes = 0,
	this.upgrades = 0,
	this.perClick = 1,
	this.perSec = 0
}

var clicker = new Bytes()

$('.settingsPage').hide();
$('.creditsPage').hide();
$('#byteUpgradeSec3').hide();
$('#byteUpgradeSec4').hide();
$('#byteUpgradeSec5').hide();
$('#byteUpgradeSec6').hide();

if(clicker.bytes >= 550) {
	$('#byteUpgradeSec3').show();
}else if(clicker.bytes >= 9950) {
	$('#byteUpgradeSec4').show();
}
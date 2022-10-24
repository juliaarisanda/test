'use strict';

var $window = $(window);

function run()
{
	var fName = arguments[0],
		aArgs = Array.prototype.slice.call(arguments, 1);
	try {
		fName.apply(window, aArgs);
	} catch(err) {
		 
	}
};
 
/* chart
================================================== */
function _chart ()
{
	$('.track-left').appear(function() {
		setTimeout(function() {
			$('.chart').easyPieChart({
				easing: 'easeOutElastic',
				delay: 3000,
				barColor: '#369670',
				trackColor: '#fff',
				scaleColor: false,
				lineWidth: 21,
				trackWidth: 21,
				size: 250,
				lineCap: 'round',
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});
		}, 150);
	});
};
 

$(document).ready(function() {
  
	run(_chart);
  
    
});


// Hitung Kalori
function getData(){
	var beratbadan = localStorage.getItem('berat');
	var tinggibadan = localStorage.getItem('tinggi');
	var jeniskelamin = localStorage.getItem('kelamin');
	var umur = localStorage.getItem('umur');
	var kalori = localStorage.getItem('kalori');
	var hitung = '';
	if(jeniskelamin == 'Laki'){
		hitung = (66.5 + (13.75 * beratbadan) + (5.003 * tinggibadan) - (6.75 * umur));

	} else if( jeniskelamin == 'Perempuan'){
		hitung = (655.1 + (9.563 * beratbadan ) + (1.850 * tinggibadan) - (4.676 * umur));
	} else{
		document.getElementById('hitung-cal').innerHTML = 'Data tidak DItemukan';
	}
	document.getElementById('hitung-cal').innerHTML = hitung;
	document.getElementById('cal-terpenuhi').innerHTML = kalori;
	
}
getData();

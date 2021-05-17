    var users = ['Ahmad', 'Nemat', 'Qosim', 'Sunnat', 'Samandar', 'Azamad', 'Muhammad'];

    function everyone(){
    	var items = '';
        for (var i = 0; i < users.length; i++) {
	    	items += `<tr>
				<td>`+ (i+1) +`</td> <td>` + users[i] + `</td> <td><input type="text" name="math` + (i+1) + `"></td> <td><input type="text" name="fiz` + (i+1) + `"></td> <td><input type="text" name="on` + (i+1) + `"></td> <td id="general_` + (i+1) + `"></td> <td id="bali_` + (i+1) + `"></td> <td id="baho_` + (i+1) + `"></td>
	 		</tr>`; }
         var tbody = document.querySelector('tbody');
         tbody.innerHTML = items;  
    }
    everyone();

	function calculyator(){
		for (var i = 1; i <= users.length; i++) {

		     var m = document.querySelector('input[name="math' + i + '"]');
		     var  math = (m.value == '') ? 0 : parseInt(m.value);
		     var f = document.querySelector('input[name="fiz' + i + '"]');
		     var  fizik = (f.value == '') ? 0 : parseInt(f.value);
		     var o = document.querySelector('input[name="on' + i + '"]');
		     var  ona = (o.value == '') ? 0 : parseInt(o.value);
		     
		     //Umumiy va bali aniqladigan qismi.
		     var total = math + fizik + ona;
		     var avg = total / 3;
            

             //Bahoni aniqlash qismi.
		     if (avg >= 90 && avg<=100) {
		     	var besh = document.querySelector('#baho_' + i);
		     	besh.innerHTML = 5;
		     }else if ( avg >= 70 && avg <= 90) {
		     	var tort = document.querySelector('#baho_' + i);
		     	besh.innerHTML = 4
		     }else if (avg >=60 && avg <= 70) {
		     	var uch = document.querySelector('#baho_' +i);
		     	uch.innerHTML = 3;
		     }else if (avg < 60 && avg !== 0) {
		     	var ikki = document.querySelector('#baho_' + i);
		     	ikki.innerHTML = 2;
		     }else {
		     	var nol = document.querySelector('#baho_' + i);
		        nol.innerHTML = 0;
		     }
             

             //Chop etiladigan qismi.
		     var g = document.querySelector('#general_' + i);
             g.innerHTML = total;
		     var b = document.querySelector('#bali_' + i);
             b.innerHTML = avg.toFixed(1);
		};
	}

function calculateRice() {
		
		var donation = document.donationbox.amount.value;
		var rice=Math.round(eval(donation/2.58)*100)/100;
		
		document.getElementById('update').innerHTML = rice;}

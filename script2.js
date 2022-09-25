document.getElementById("Bookingconfirm").addEventListener("click",sub);

function sub(){
	var x1= document.getElementById("validationCustom01").value;
	var x2= document.getElementById("validationCustom03").value;
	var x3= document.getElementById("validationCustom04").value;
	
	if(x1 == "" && x2 == "" && x3 == ""){
		document.getElementById("place1").innerHTML="ERROR!!!!";
		document.getElementById("place2").innerHTML="Please fill form first!";
		document.getElementById("place1").style.color="blue";
		document.getElementById("place2").style.color="blue";
	}
	else if(x1 !== "" && x2 !== "" && x3 !== ""){
		document.getElementById("place1").innerHTML="   ";
		document.getElementById("place2").innerHTML="Ticket Booked";
		document.getElementById("place1").style.color="red";
		document.getElementById("place2").style.color="skyblue";
	}
}
function check1(lname){
	
	var vname=document.getElementById("vname")
	var ivname=document.getElementById("ivname")
	var Lname=document.getElementById("lname")
	var regex=/^[a-zA-Z ]{2,30}$/;
	if (regex.test(Lname.value)) {

     Lname.style.border=("2px solid green")
     vname.style.visibility=("visible")

     return true;
	}
	else{
		ivname.style.visibility=("visible")
		Lname.style.border=('2px solid red')
		return false;
	}
}
 function check2(pnum){
 	var vnum=document.getElementById("vnum")
 	var ivnum=document.getElementById("ivnum")
 	var Pnum=document.getElementById("pnum")
 	var regex=/^[0-9]+$/;
 	if (Pnum.value.length==10) {
 		Pnum.style.border=("2px solid green")
     vnum.style.visibility=("visible")
     return true;
 	}
 	else{
		ivnum.style.visibility=("visible")
		Pnum.style.border=('2px solid red')
		return false;
	}
}

	function check3(email){
		var vmail=document.getElementById("vmail")
		var ivmail=document.getElementById("ivmail")
		var Email=document.getElementById("email")
		var regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if(regex.test(Email.value)){
			Email.style.border=("2px solid green")
			vmail.style.visibility=("visible")
			return true;
		}
		else{
			ivmail.style.visibility=("visible")
			Email.style.border=('2px solid red')
			alert('Email is invalid');
			return false;
		}
	}
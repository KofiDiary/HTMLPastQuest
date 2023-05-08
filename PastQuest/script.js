var firstnameError = document.getElementById('firstnameError');
var lastnameError = document.getElementById('lastnameError');
var submitError = document.getElementById('submitError');

function validateFname(){
	var name = document.getElementById('fname').value;

	if(name.length === 0){
		firstnameError.innerHTML = '**Required';
		firstnameError.style.color = 'red';
		firstnameError.style.left = '631px';
		return false;
	}
	if(name.length < 4){
		firstnameError.innerHTML = '**Required';
		firstnameError.style.color = 'red';
		firstnameError.style.left = '631px';
		return false;
	}
	firstnameError.innerHTML = '**Valid';
	firstnameError.style.color = 'green';
	firstnameError.style.left = '656px';
	return true;
};

function validateLname(){
	var lname = document.getElementById('lname').value;

	if(lname.length === 0){
		lastnameError.innerHTML = '**Required';
		lastnameError.style.color = 'red';
		lastnameError.style.left = '631px';
		return false;
	}
	if(lname.length < 4){
		lastnameError.innerHTML = '**Required';
		lastnameError.style.color = 'red';
		lastnameError.style.left = '631px';
		return false;
	}

	else{
		lastnameError.innerHTML = '**Valid';
		lastnameError.style.color = 'green';
		lastnameError.style.left = '656px';
		return true;
	}

};

function validateButton(){
	if(!validateFname() && !validateLname()){
		submitError.innerHTML = '**Fix Errors To Submit';
		submitError.style.display = 'block';
		submitError.style.color = 'red';
		submitError.style.left = '500px';
		setTimeout(function(){submitError.style.display = 'none';}, 3000);
		return false;
	}

	else{
		submitError.innerHTML = '**Submitted Suucessfully';
		submitError.style.display = 'block';
		submitError.style.color = 'green';
		setTimeout(function(){submitError.style.display = 'none';}, 3000);
		var url = document.querySelector('a');
		url.getAttribute('href');
		url.setAttribute('href', 'welcome.html');
		return true;
	}
};

function validateClick(){
	var url = document.querySelector('a');
	url.getAttribute('href');
	url.setAttribute('href', 'form.html');
};
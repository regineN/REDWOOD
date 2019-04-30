function validateName() {
	var name = document.getElementById('contact-name').value;

	if(name.length == 0) {

		producePrompt('Name is required', 'red');
		return false;
	}

	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

		producePrompt('Your name please.', 'red');
		return false;
	}

}

function validateEmail() {
	var email = document.getElementById('contact-email').value;

	if(email.length == 0) {
       
       producePrompt('Email is required', 'red');
       return false;
       
    } else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    	producePrompt('Email Invalid','email-error','red');
    	return false;

    } else {

    	producePrompt('Valid','email-error','green');
    	return true;

    }

}

function validateSubject() {
	var subject = document.getElementById('contact-subject').value;

	if(subject.length == 0) {

		producePrompt('Subject is required', 'red');
		return false;
	}

	if(!subject.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

		producePrompt('Subject Invalid','subject-error','red');
		return false;
	}



}

function validateMessage() {
	var message = document.getElementById('contact-message').value;
	var required = 30;
	var left = required - message.length;

	if(left > 0) {
		producePrompt(left + 'message-error','red');
		return false;

	}

	    producePrompt('Valid', 'message-error', 'green');
	    return true;

}

function valideForm() {
	if(!valideName() || !valideEmail || !valideSubject || !valideMessage()) {
		jsShow('submit-error');
		producePrompt('Please fix errors to submit.','submit-error','red');
		return false;

	}

	else {

	}
}

function jsShow(id) {
	document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
	document.getElementById(id).style.display = 'none';
}

function producePrompt(message,promptLocation, color) {
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}
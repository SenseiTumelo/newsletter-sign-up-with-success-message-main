document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('signup-form');
	const emailInput = document.getElementById('e-mail');
	const emailError = document.getElementById('email-error');
	const modal = document.getElementById('success-modal');
	const modalClose = document.getElementById('modal-close');
	const modalDismiss = document.getElementById('modal-dismiss');
	const modalEmail = document.getElementById('modal-email');

	function showError(message){
		emailError.textContent = message;
		emailInput.classList.add('invalid');
	}

	function clearError(){
		emailError.textContent = '';
		emailInput.classList.remove('invalid');
	}

	function showModal(email){
		modalEmail.textContent = email;
		modal.setAttribute('aria-hidden', 'false');
		document.body.classList.add('modal-open');
		modalDismiss.focus();
	}

	function hideModal(){
		modal.setAttribute('aria-hidden', 'true');
		document.body.classList.remove('modal-open');
		
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		clearError();
		if (!emailInput.value) {
			showError('Email address is required');
			emailInput.focus();
			return;
		}
		if (!emailInput.checkValidity()) {
			showError('Please enter a valid email address');
			emailInput.focus();
			return;
		}

		showModal(emailInput.value);
		form.reset();
	});

	modalClose.addEventListener('click', hideModal);
	modalDismiss.addEventListener('click', hideModal);

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
			hideModal();
		}
	});

});


import { useState } from 'react';
// service
import { PostFormData } from '../../service/service';

const useContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');
	const [nameErr, setNameErr] = useState(false);
	const [emailErr, setEmailErr] = useState(false);
	const [msgErr, setMsgErr] = useState(false);
	const [errMsg, setErrMsg] = useState('');

	const handleInput = (type, value) => {
		// remove error input if present
		handleResetErr();

		switch (type) {
			case 'name':
				setName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			default:
				setMsg(value);
		}
	};

	const handleResetErr = () => {
		if (errMsg === '');
		{
			setErrMsg('');
		}
		if (emailErr) {
			setEmailErr(false);
		} else if (nameErr) {
			setNameErr(false);
		} else if (msgErr) {
			setMsgErr(false);
		}
	};

	const validateEmail = (email) => {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	function validateName(name) {
		var regex = /^[a-zA-Z ]{2,30}$/;
		return regex.test(name);
	}

	const handlErrors = () => {
		// Handles empty fields
		if (name === '') {
			setErrMsg('Name is missing');
			setNameErr(true);
			return false;
		} else if (email === '') {
			setErrMsg('Email is missing');
			setEmailErr(true);
			return false;
		} else if (msgErr === '') {
			setErrMsg('Message is missing');
			setMsgErr(true);
			return false;
		}

		if (!validateEmail(email)) {
			setErrMsg('Email not valid');
			setEmailErr(true);
			return false;
		}

		if (!validateName(name)) {
			setErrMsg('Name is not valid');
			setNameErr(true);
			return false;
		}

		return true;
	};

	const handleClearInput = () => {
		setName('');
		setEmail('');
		setMsg('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (handlErrors()) {
			handleClearInput();
			PostFormData(name, email, msg);
		}
	};

	return {
		handleInput: handleInput,
		handleSubmit: handleSubmit,
		values: {
			name: name,
			email: email,
			msg: msg,
		},
		errors: {
			nameErr: nameErr,
			emailErr: emailErr,
			msgErr: msgErr,
			errMsg: errMsg,
		},
	};
};

export default useContactForm;

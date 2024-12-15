import axios from 'axios';
import React, { useState } from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router';

function Register() {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [errors, setErrors] = useState({});

	const navigateHome = useNavigate();

	// Validate inputs
	const validateForm = () => {
		const newErrors = {};

		if (!userName.trim()) {
			newErrors.userName = 'Bu xananı doldurmaq zəruridir.';
		} else if (userName.length < 3) {
			newErrors.userName = 'İstifadəçi adı ən azı 3 simvoldan ibarət olmalıdır.';
		}

		if (!email.trim()) {
			newErrors.email = 'Bu xananı doldurmaq zəruridir.';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email =
				'Lütfən, düzgün e-poçt ünvanı daxil edin (Məs: сustomer@domain.az).';
		}

		if (!pwd.trim()) {
			newErrors.pwd = 'Bu xananı doldurmaq zəruridir.';
		} else if (pwd.length < 6) {
			newErrors.pwd = 'Şifrə ən azı 6 simvoldan ibarət olmalıdır.';
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const sendData = async (e) => {
		e.preventDefault();

		if (validateForm()) {
			await axios.post('http://localhost:3000/users', { userName, email, pwd });
			navigateHome('/');
		}
	};

	return (
		<div className='w-[100%] bg-[#F3F3F3] h-[70vh]'>
			<form
				onSubmit={sendData}
				className='md:w-[50%] m-auto md:p-12 sm:w-[60%] max-sm:w-[90%] sm:p-7 max-sm:p-7 h-[40vh] flex flex-col gap-2'>
				{/* Username Input */}
				<label htmlFor='userName'>
					<span className='text-red-600'>* </span>İstifadəçi adı
				</label>
				<input
					onChange={(e) => setUserName(e.target.value)}
					className={`p-3 outline-none px-4 ${
						errors.userName ? 'border-red-500' : ''
					}`}
					type='text'
					id='userName'
				/>
				{errors.userName && (
					<span className='flex gap-1 text-red-600 mt-1 text-[12px]'>
						<BiSolidErrorAlt className='fill-red-600' />
						{errors.userName}
					</span>
				)}

				{/* Email Input */}
				<label htmlFor='email' className='mt-4'>
					<span className='text-red-600 text-[12px]'>* </span>Elektron poçt
				</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					className={`p-3 outline-none px-4 ${
						errors.email ? 'border-red-500' : ''
					}`}
					type='email'
					id='email'
				/>

				{errors.userName && (
					<span className='flex gap-1 text-red-600 mt-1 text-[12px]'>
						<BiSolidErrorAlt className='fill-red-600' />
						{errors.email}
					</span>
				)}

				{/* Password Input */}
				<label htmlFor='password' className='mt-4'>
					<span className='text-red-600 text-[12px]'>* </span>Şifrə
				</label>
				<input
					onChange={(e) => setPwd(e.target.value)}
					className={`p-3 outline-none px-4 ${
						errors.pwd ? 'border-red-500' : ''
					}`}
					type='password'
					id='pass'
				/>

				{errors.userName && (
					<span className='flex gap-1 text-red-600 mt-1 text-[12px]'>
						<BiSolidErrorAlt className='fill-red-600' />
						{errors.pwd}
					</span>
				)}

				{/* Submit Button */}
				<button className='bg-[#FF003C] text-white p-[15px] mt-6 rounded-lg text-[14px] ease-in duration-100 hover:opacity-55'>
					Register
				</button>
			</form>
		</div>
	);
}

export default Register;

import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import googleIcon from '../../assets/images/google.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import '../login-sidebar/loginSidebar.css';
import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';
import { BiSolidErrorAlt } from 'react-icons/bi';
import ForgetPassword from './ForgetPassword';
import Register from './Register';
import { useNavigate } from 'react-router';
import axios from 'axios';

function LoginSidebar({
	openLoginSidebar,
	closeLoginSidebar,
	showLoginSidebar,
	openAccount,
	showAccount,
}) {
	const Navigate = useNavigate();
	const [open, setOpen] = useState(true);

	// Show the password
	const [showPassword, setShowPassword] = useState(false);

	// Forget Password
	const [forgetPassword, setForgetPassword] = useState(false);
	const openForgetPassword = () => setForgetPassword(!forgetPassword);

	// Check Email Input
	const [email, setEmail] = useState('');
	const [showEmailError, setShowEmailError] = useState('');

	const getEmail = (e) => {
		setEmail(e.target.value);
		setShowEmailError('');
	};

	// Check Password Input
	const [password, setPassword] = useState('');
	const [showPasswordError, setShowPasswordError] = useState('');

	const getPassword = (e) => {
		setPassword(e.target.value);
		setShowPasswordError('');
	};

	// Click Log In button
	const logIn = () => {
		let valid = true;

		if (email.trim() === '') {
			setShowEmailError('Bu xananı doldurmaq zəruridir.');
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setShowEmailError(
				'Lütfən, düzgün e-poçt ünvanı daxil edin (Məs: сustomer@domain.az).'
			);
			valid = false;
		}

		if (password.trim() === '') {
			setShowPasswordError('Bu xananı doldurmaq zəruridir.');
			valid = false;
		} else if (password.length < 6) {
			setShowPasswordError('Şifrə 6 simvoldan ibarət olmalıdır.');
			valid = false;
		}

		if (valid) {
			setShowPasswordError('');
			setShowEmailError('');
			setOpen(false);
			location.reload();
		}
	};

	// const [showRegister, setShowRegister] = useState(false)

	const register = () => {
		Navigate('/register');
		setOpen(false);
	};

	const [userData, setUserData] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3000/users')
			.then((res) => setUserData(res.data));
	});

	const checkData = (e) => {
		e.preventDefault();
		let currentUser = userData.find((data) => data.email == email);
		console.log('current user', currentUser);

		if (currentUser) {
			let currPwd = currentUser?.pwd?.includes(password);
			if (currPwd) {
				localStorage.setItem('ID', JSON.stringify(currentUser.id));
				console.log('sucsess');
			}
		}
	};

	return (
		<Dialog
			open={open}
			onClose={setOpen}
			className='relative'
			style={{ zIndex: 999999999999999 }}>
			<DialogBackdrop
				transition
				className='fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0'
			/>

			<div className='fixed inset-0 overflow-hidden'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
						<DialogPanel
							transition
							className='pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700'>
							{forgetPassword && (
								<ForgetPassword openForgetPassword={openForgetPassword} />
							)}

							<TransitionChild>
								<div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4'>
									<button
										type='button'
										onClick={() => setOpen(false)}
										className='relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'>
										<span className='absolute -inset-2.5' />
										<span className='sr-only'>Close panel</span>
									</button>
								</div>
							</TransitionChild>
							<div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
								<div className='px-4 sm:px-6 w-[85%] mx-auto'>
									<XMarkIcon
										onClick={() => {
											if (showLoginSidebar) {
												openLoginSidebar();
											} else if(showAccount){
												openAccount()
											}
											else {
												closeLoginSidebar();
											}
										}}
										aria-hidden='true'
										className='size-[30px] cursor-pointer flex justify-self-end'
									/>
									<DialogTitle className='text-base text-[#111827] mt-[75px]'>
										<h3 className='text-[28px] font-[600] mt-[50px]'>
											Xoş gördük! 👋🏻
										</h3>
										<p className='text-[#777777] text-[14px] mt-3'>
											Üstünlüklərindən faydalanmaq üçün daxil olun!
										</p>
									</DialogTitle>
								</div>
								<div className='relative mt-6 flex-1 px-4 sm:px-6 w-[85%] mx-auto'>
									<div className='flex flex-col gap-3 '>
										<button className='w-[100%] bg-[#f3f3f3] p-[15px] rounded-xl ease-in duration-100 hover:opacity-55'>
											<a
												className='flex flex-row justify-center items-center gap-3'
												href='https://www.facebook.com/login.php?skip_api_login=1&api_key=363704107748111&kid_directed_site=0&app_id=363704107748111&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D363704107748111%26redirect_uri%3Dhttps%253A%252F%252Fkontakt.az%252Fsociallogin%252Fsocial%252Flogin%252Fid%252Ffacebook%252F%26scope%3Demail%252C%2Bpublic_profile%26state%3DHA-0NQW3O9GYEZF1CL2UMB7SDVTP68XHAI5RK4J%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D2e20420b-60cb-4e6d-8b3e-40953db922be%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fkontakt.az%2Fsociallogin%2Fsocial%2Flogin%2Fid%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DHA-0NQW3O9GYEZF1CL2UMB7SDVTP68XHAI5RK4J%23_%3D_&display=page&locale=en_US&pl_dbl=0'>
												<img src={facebookIcon} alt='facebook' />
												<p className='text-[14px] text-[#4b5563] '>Facebook</p>
											</a>
										</button>
										<button className='w-[100%] bg-[#f3f3f3] p-[15px] rounded-xl ease-in duration-100 hover:opacity-55'>
											<a
												className='flex flex-row justify-center items-center gap-3'
												href='https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=834829546702-op7csh1vfd4fi41l7u5pvolbsiq7dgl8.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fkontakt.az%2Fsociallogin%2Fsocial%2Flogin%2Fid%2Fgoogle%2F&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&state=HA-SDHTO4ZCAUWME9KGP26FYXV71INBQR08L35J&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow'>
												<img src={googleIcon} alt='facebook' />
												<p className='text-[14px] text-[#4b5563] '>Google</p>
											</a>
										</button>
									</div>

									<div className='flex items-center mt-10 w'>
										<hr className=' w-[40%]' />
										<p className='w-[20%] text-center text-gray-500 text-[14px]'>
											və ya
										</p>
										<hr className='w-[40%]' />
									</div>

									<div>
										<form onSubmit={checkData} className='login-form' action=''>
											<div className='form-input'>
												<label htmlFor='email'>
													<span className='text-red-600'>* </span>Elektron poçt
												</label>
												<input onChange={getEmail} type='email' id='email' />
											</div>
											{showEmailError && (
												<span className='flex gap-1 text-red-600 mt-[-20px] text-[12px]'>
													<BiSolidErrorAlt className='fill-red-600' />
													{showEmailError}
												</span>
											)}
											<div className='form-input'>
												<label htmlFor='password'>
													<span className='text-red-600'>* </span>Şifrə
												</label>

												<input
													// required
													onChange={getPassword}
													type={showPassword ? 'text' : 'password'}
													id='password'
												/>

												{showPassword ? (
													<VscEye
														onClick={() => setShowPassword(false)}
														className='cursor-pointer'
														size={22}
													/>
												) : (
													<VscEyeClosed
														onClick={() => setShowPassword(true)}
														className='cursor-pointer'
														size={22}
													/>
												)}
											</div>

											{showPasswordError && (
												<span className='flex gap-1 text-red-600 mt-[-20px] text-[12px]'>
													<BiSolidErrorAlt className='fill-red-600' />
													{showPasswordError}
												</span>
											)}

											<div className='flex align-center justify-between mt-[-10px]'>
												<div
													className='flex align-center gap-1'
													onClick={register}>
													<p className='cursor-pointer text-[12px] text-[#777777]'>
														Register
													</p>
												</div>

												<div>
													<p
														onClick={openForgetPassword}
														className='cursor-pointer text-[12px] text-[#777777] hover:underline'>
														Şifrənizi unutmusuz?
													</p>
												</div>
											</div>

											<button
												onClick={logIn}
												disabled={showEmailError || showPasswordError}
												className='bg-[#FF003C] text-white p-[15px] rounded-lg text-[14px] ease-in duration-100 hover:opacity-55'>
												Daxil ol
											</button>
										</form>
									</div>
								</div>
							</div>
						</DialogPanel>
					</div>
				</div>
			</div>
		</Dialog>
	);
}

export default LoginSidebar;

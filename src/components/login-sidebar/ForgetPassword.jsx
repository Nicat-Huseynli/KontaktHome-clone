import React from 'react';
import { useState } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { BiSolidErrorAlt } from 'react-icons/bi';
import '../login-sidebar/loginSidebar.css';

function ForgetPassword({openForgetPassword}) {
	const [open, setOpen] = useState(true);

	// Check Email Input
	const [email, setEmail] = useState('');
	const [showEmailError, setShowEmailError] = useState('');

	const getEmail = (e) => {
		setEmail(e.target.value);
		setShowEmailError('');
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

		if (valid) {
			setShowEmailError('');
		}
	};

	return (
		<Dialog open={open} onClose={setOpen} className='relative z-10'>
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
										onClick={openForgetPassword}
										aria-hidden='true'
										className='size-[30px] cursor-pointer flex justify-self-end'
									/>
									<DialogTitle className='text-base text-[#111827] mt-[75px]'>
										<h3 className='text-[28px] font-[600] mt-[50px]'>
											Şifrənin sıfırlanması
										</h3>
										<p className='text-[#777777] text-[14px] mt-3'>
											Şifrəni sıfırlamaq üçün e-poçtunuzu daxil edin.
										</p>
									</DialogTitle>
								</div>
								<div className='relative mt-6 flex-1 px-4 sm:px-6 w-[85%] mx-auto'>
									<div className='mt-[85px]'>
										<form className='login-form' action=''>
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

											<button
												onClick={logIn}
												disabled={showEmailError}
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

export default ForgetPassword;

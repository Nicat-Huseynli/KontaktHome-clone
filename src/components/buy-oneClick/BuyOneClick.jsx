import React from 'react';
import { useState } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';

function BuyOneClick({openPaymentModal}) {
	const [open, setOpen] = useState(true);

	// Phone Number
	const [phone, setPhone] = useState('+994');

	const addPhone = (e) => {
		setPhone(e.target.value);
	};

	return (
		<Dialog open={open} onClose={setOpen} className='relative z-10'>
			<DialogBackdrop
				transition
				className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
			/>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					<DialogPanel
						transition
						className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'>
						<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-start'>
								<div className='mt-3 w-[100%] text-center sm:ml-4 sm:mt-0 sm:text-left'>
									<DialogTitle
										as='h3'
										className='flex items-center justify-between text-base font-semibold text-gray-900'>
										1 kliklə satın alın
										<IoMdClose size={25} className='cursor-pointer' onClick={openPaymentModal}/>
									</DialogTitle>
									<div className='mt-8 w-[100%]'>
										<form action='' className=' w-[100%] flex flex-col gap-7 pb-5'>
											<div className='flex items-center justify-around'>
												<div className='flex items-center gap-2'>
													<input
														type='radio'
														name='payment'
														id='cash'
														className='w-6 h-6 ring-green-500 accent-green-500 cursor-pointer'
													/>
													<label
														className='text-[#323232] font-[600] text-[14px] cursor-pointer'
														htmlFor='cash'>
														Nağd al
													</label>
												</div>
												<div className='flex items-center gap-2'>
													<input
														type='radio'
														name='payment'
														id='credit'
														className='w-6 h-6 ring-green-500 accent-green-500 cursor-pointer'
													/>
													<label
														className='text-[#323232] font-[600] text-[14px] cursor-pointer'
														htmlFor='credit'>
														Hissə- hissə al
													</label>
												</div>
											</div>
											<div className='flex gap-3 border-solid border-b-[1px] border-black p-2'>
												<label
													className='text-[#323232] font-[600] text-[12px]'
													htmlFor='tele'>
													<span className='text-[#FF003C]'>*</span> Nömrə
												</label>
												<input
													className='text-[#323232] font-[500] text-[14px] outline-none'
                                                    maxLength={16}
													type='tel'
													value={phone}
													onChange={addPhone}
													id='tele'
												/>
											</div>

											<button
												type='submit'
												className='text-[#4B5563] text-[16px] border-[#323232] border-solid border-[1px] inline-flex w-[100%] justify-center rounded-md bg-none px-12 py-3 text-sm font-semibold shadow-sm hover:bg-none sm:ml-3 sm:w-auto'>
												Bir kliklə al
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}

export default BuyOneClick;

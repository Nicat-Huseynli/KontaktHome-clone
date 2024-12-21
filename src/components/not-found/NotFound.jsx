import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
	document.title = `Kontak Home: Basket`;
	const { t, i18n } = useTranslation();

	const NavigateHome = useNavigate();

	return (
		<div className='bg-[#F3F3F3]'>
			<div className='md:px-12 sm:px-2 max-sm:px-2 py-4 text-center'>
				<div className='w-[100%] mx-auto bg-white h-[50vh] flex flex-col items-center justify-center gap-4 rounded-lg'>
					<p className='font-[700] text-[60px] text-[#323232]'>
						<span className='text-[#FF003C] font-[700] text-[60px]'>
							{':('}
						</span>{' '}
						404
					</p>
					<p className='md:text-[24px] font-[600] text-[#323232] mt-3 sm:text-[20px]'>
						{t('notFoundInfo')}
					</p>
					<p className='md:text-[16px] font-[500] text-[#777] sm:text-[14px]'>
						{t('notFoundProblem')}
					</p>
					<button
						className='text-[14px] font-[500] text-[#323232] md:w-[18%] sm:w-[30%] max-sm:w-[50%] py-4 border-solid border-[1px] border-[#323232] rounded-md mt-4'
						onClick={() => NavigateHome('/')}>
						{t('home')}
					</button>
				</div>
			</div>
		</div>
	);
}

export default NotFound;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa6';
import { SlBasket } from 'react-icons/sl';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoMdHeartEmpty } from 'react-icons/io';
import { TbHandClick } from 'react-icons/tb';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import birbank from '../../assets/images/birbank-cashback-debet.png';
import { CiCirclePlus } from 'react-icons/ci';
import BuyOneClick from '../buy-oneClick/BuyOneClick';
import LoginSidebar from '../login-sidebar/LoginSidebar';
import { useTranslation } from 'react-i18next';

function ProductInfo() {
	const { t, i18n } = useTranslation();

	const [data, setData] = useState([]);
	const { id } = useParams();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`http://localhost:3000/products/${id}`).then((res) => {
			setData(res.data);
			setLoading(false);
		});
	}, [id]);

	const [active, setActive] = useState(2);

	const toggleActive = (index) => {
		setActive(index);
	};

	const [duration, setDuration] = useState(12);

	const getDuration = (month) => {
		setDuration(month);
	};

	const [paymentModal, setPaymentModal] = useState(false);

	const openPaymentModal = () => {
		setPaymentModal(!paymentModal);
	};

	const [basketOpenLoginSidebar, setBasketOpenLoginSidebar] = useState(false);
	const closeLoginSidebar = () => {
		setBasketOpenLoginSidebar(!basketOpenLoginSidebar);
	};

	const userId = JSON.parse(localStorage.getItem('ID'));

	const addBasket = () => {
		let prodId = data.id;
		let prodName = data.name;
		let prodPrice = data.price;
		let prodOldPrice = data.oldPrice;
		let prodImg = data.imageUrl;

		if (userId) {
			axios.post('http://localhost:3000/basket', {
				userId,
				prodId,
				prodName,
				prodPrice,
				prodOldPrice,
				prodImg,
			});

			location.reload();
		} else {
			closeLoginSidebar();
		}
	};

	return (
		<div className='bg-[#F3F3F3]'>
			{loading && (
				<div className='flex items-center justify-center h-screen'>
					<div
						className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-[#FF003C] motion-reduce:animate-[spin_1.5s_linear_infinite]'
						role='status'>
						<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
							Loading...
						</span>
					</div>
				</div>
			)}

			<div className=' px-7 py-3'>
				<div className='flex gap-2 w-[100%] m-auto lg:flex-row sm:flex-col max-sm:flex-col '>
					<div className='bg-white w-[100%] p-8 rounded-lg flex items-center justify-center '>
						<img className='w-[60%]' src={data.imageUrl} alt={data.name} />
					</div>
					<div className='bg-white w-[100%] rounded-lg'>
						<div className='pt-6 ps-5'>
							<h3 className='text-[24px] text-[#323232] font-[600]'>
								{data.name}
							</h3>
						</div>
						<div className='w-[100%] border-b-[1px] border-gray-200 border-solid pt-6 ps-5 flex items-center gap-5 pb-4'>
							<div className='rating flex items-center gap-1 border-solid border-[1.5px] rounded-full p-1 px-2 border-gray-200'>
								<FaStar className='fill-yellow-400' />
								<p className='text-[14px] font-[#323232]'>{data.rating}</p>
							</div>
							<div className='comments border-solid border-[1.5px] rounded-full p-[5px] border-gray-200'>
								<p className='text-[14px] font-[#323232]'>Comments</p>
							</div>
						</div>
						<div className='basket p-4 sm:p-5 w-full border-b border-gray-200 border-solid'>
							<p className='bg-[#FF003C] text-[#FFF] font-[550] p-1 w-[50%] sm:w-[12%] max-sm:w-[25%] rounded-md text-[14px] sm:text-[16px]'>
								-{(data.oldPrice - data.price).toFixed(2) + '₼'}
							</p>

							<div className='prices flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2'>
								<p className='text-[#FF003C] text-[20px] sm:text-[24px] font-[700]'>
									{data.price?.toFixed(2) + ' ₼'}
								</p>
								<p className='text-[#777] font-[500] text-[18px] sm:text-[24px]'>
									<del>{data.oldPrice?.toFixed(2) + ' ₼'}</del>
								</p>
							</div>

							<div className='buttons flex flex-wrap sm:flex-nowrap gap-3 mt-4'>
								<button
									onClick={addBasket}
									className='w-full sm:w-[40%] flex items-center justify-center gap-2 bg-[#FF003C] text-white py-3 px-4 sm:py-4 sm:px-16 rounded-lg text-[16px] sm:text-[18px] font-[500]'>
									<SlBasket size={19} />
									{t('addBasket')}
								</button>
								<button
									onClick={openPaymentModal}
									className='w-full sm:w-[40%] flex items-center justify-center gap-2 bg-none border border-black py-3 px-4 sm:py-4 sm:px-16 rounded-lg text-[16px] sm:text-[18px] font-[500]'>
									<TbHandClick size={19} />
									{t('buyOneClick')}
								</button>
								<div className='bg-[#F3F3F3] p-3 sm:p-4 rounded-xl flex justify-center items-center'>
									<IoMdHeartEmpty size={20} sm:size={25} />
								</div>
								<div className='bg-[#F3F3F3] p-3 sm:p-4 rounded-xl flex justify-center items-center'>
									<LiaBalanceScaleSolid size={20} sm:size={25} />
								</div>
							</div>
						</div>

						<div className='calculator p-4 sm:p-5 w-full border-b border-gray-200 border-solid mb-4 sm:mb-5'>
							<h4 className='text-[14px] sm:text-[16px] font-[600] text-[#323232]'>
								{t('calculator')}
							</h4>
							<p className='text-[10px] sm:text-[12px] font-[500] text-[#777] mt-2'>
								{t('calculatorInfo')}
							</p>

							<div className='flex flex-wrap sm:flex-nowrap'>
								<div className='mt-3 flex border border-gray-200 w-full sm:w-[80%] items-center justify-center gap-4 sm:gap-8 rounded-lg py-2 rounded-e-none'>
									{[6, 9, 12, 15, 18].map((item, index) => (
										<div
											key={item}
											className='flex flex-col items-center justify-center text-center'>
											<p className='text-[#FF003C] text-[8px] sm:text-[10px]'>
												{item !== 15 && item !== 18 && '0%'}
											</p>
											<div
												onClick={() => (toggleActive(index), getDuration(item))}
												className={`bg-[#F3F3F3] px-3 sm:px-[6px] py-2 sm:py-3 rounded-full cursor-pointer ${
													active == index
														? 'bg-black text-white'
														: 'bg-[#F3F3F3] text-[#323232]'
												}`}>
												<p className='text-[10px] sm:text-[12px] font-[#323232]'>
													{item} {t('month')}
												</p>
											</div>
										</div>
									))}
								</div>
								<div className='mt-3 border border-gray-200 w-full sm:w-[20%] flex flex-col items-center justify-center rounded-lg py-2 text-center border-s-0 rounded-s-none'>
									<p className='text-[10px] sm:text-[12px] font-[500] text-[#323232]'>
										{t('monthlyPayment')}
									</p>
									<p className='text-[14px] sm:text-[16px] font-[600] mt-3'>
										{(data.price / duration).toFixed(2) + ' ₼'}
									</p>
								</div>
							</div>
							<div className='flex items-center gap-1 mt-3'>
								<IoIosInformationCircleOutline className='text-[14px] sm:text-[16px] text-[#777] font-[500]' />
								<p className='text-[10px] sm:text-[12px] text-[#777] font-[500]'>
									{t('commissionInfo')}
								</p>
							</div>
						</div>

						<div className='partly-buy p-4 sm:p-5 py-0 w-full border-b border-gray-200 border-solid mb-4 sm:mb-5'>
							<h4 className='text-[14px] sm:text-[16px] font-[600] text-[#323232]'>
								{t('buyInstallments')}
							</h4>

							<div className='flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 border-black border-[1.5px] p-2 sm:p-3 w-full sm:w-[40%] rounded-xl my-3 sm:my-4'>
								<img
									className='rounded-lg w-[15%] sm:w-[15%] max-sm:w-[10%] object-contain'
									src={birbank}
									alt='Birbank Logo'
								/>
								<p className='text-[12px] sm:text-[14px] font-[500]'>
									12 {t('month')} {(data.price / 12).toFixed(2) + ' ₼'}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-2 w-full py-3 bg-white px-5 sm:px-7 mt-3 rounded-lg'>
					<h3 className='font-[600] text-[18px] sm:text-[20px]'>
						{t('features')}
					</h3>

					<div>
						<div className='w-full flex flex-col px-3 sm:px-5'>
							{data.characteristics ? (
								Object.entries(data.characteristics).map(([key, value]) => (
									<div
										key={key}
										className='flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 border-solid border-gray-200 border-b-2 py-2 sm:py-3'>
										<p className='text-[#777] text-[12px] sm:text-[14px] font-[500]'>
											{key.slice(0, 1).toLocaleUpperCase() + key.slice(1)}
										</p>
										<p className='text-[#323232] text-[12px] sm:text-[14px] font-[500]'>
											{value}
										</p>
									</div>
								))
							) : (
								<p className='text-[12px] sm:text-[14px] text-[#777]'>
									Loading characteristics...
								</p>
							)}
						</div>
					</div>
				</div>

				{paymentModal && <BuyOneClick openPaymentModal={openPaymentModal} />}
				{basketOpenLoginSidebar && (
					<LoginSidebar closeLoginSidebar={closeLoginSidebar} />
				)}
			</div>
		</div>
	);
}

export default ProductInfo;

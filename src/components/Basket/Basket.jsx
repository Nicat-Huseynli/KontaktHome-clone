import axios from 'axios';
import React, { useEffect, useState } from 'react';
import basketEmpty from '../../assets/images/basket.png';
import { useNavigate } from 'react-router';
import { FiPlusCircle } from 'react-icons/fi';
import { FiMinusCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { TbHandClick } from 'react-icons/tb';
import BuyOneClick from '../buy-oneClick/BuyOneClick';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Basket() {
	const { t, i18n } = useTranslation();

	const NavigateHome = useNavigate();
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/products').then((res) => {
			setData(res.data);
			setLoading(false);
		});
	}, []);

	// Get Basket data
	const [basketData, setBasketData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/basket').then((res) => {
			setBasketData(res.data);
			setLoading(false);
		});
	}, []);

	// Delete product
	const userId = JSON.parse(localStorage.getItem('ID'));

	const deleteProd = async (id) => {
		await axios.delete(`http://localhost:3000/basket/${id}`);
		setBasketData((prevData) => prevData.filter((item) => item.id !== id));
	};

	// Buy One Click
	const [paymentModal, setPaymentModal] = useState(false);

	const openPaymentModal = () => {
		setPaymentModal(!paymentModal);
	};

	// Count of product
	// State to track product counts
	const [productCounts, setProductCounts] = useState({});

	// Initialize the count for a product if not already set
	const initializeCount = (id) => {
		if (!productCounts[id]) {
			setProductCounts((prevCounts) => ({ ...prevCounts, [id]: 1 }));
		}
	};

	// Increase count for a specific product
	const increaseCount = (id) => {
		setProductCounts((prevCounts) => ({
			...prevCounts,
			[id]: prevCounts[id] < 10 ? prevCounts[id] + 1 : prevCounts[id],
		}));
	};

	// Decrease count for a specific product
	const decreaseCount = (id) => {
		setProductCounts((prevCounts) => ({
			...prevCounts,
			[id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : prevCounts[id],
		}));
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
			<div className=' md:px-12 sm:px-5 max-sm:px-5 py-4'>
				{/* <div> */}
				<div className=' bg-white p-4'>
					<p className='font-[500] text-[16px]'>
						{t('cart')} ({' '}
						{basketData?.filter((basket) => basket.userId === userId).length}{' '}
						{t('product')})
					</p>
				</div>

				<div className='mt-3'>
					{userId ? (
						basketData?.filter((basket) => basket.userId === userId).length >
						0 ? (
							<div className='flex gap-2 lg:flex-row sm:flex-col max-sm:flex-col'>
								<div className='lg:w-[70%] sm:w-[100%] max-sm:w-[100%]'>
									{basketData
										?.filter((basket) => basket.userId === userId)
										.map((basket) => (
											<div
												key={basket.id}
												className='flex bg-white p-5 items-center justify-between border-solid border-[#F3F3F3] border-b-2'>
												<Link to={`/productInfo/${basket.prodId}`}>
													<div className='flex items-center justify-center sm:flex-row max-sm:flex-col gap-2'>
														<img
															className='w-[60px]'
															src={basket.prodImg}
															alt=''
														/>
														<h3 className='font-[600] md:text-[16px] text-[#323232] sm:text-[14px] max-sm:text-[14px]'>
															{basket.prodName}
														</h3>
													</div>
												</Link>

												<div className='flex gap-4'>
													<div className='flex items-center gap-3 text-[#777]'>
														{/* Initialize count if not already done */}
														{initializeCount(basket.id)}

														<FiMinusCircle
															onClick={() => decreaseCount(basket.id)}
															size={21}
														/>
														<p>{productCounts[basket.id] || 1}</p>
														<FiPlusCircle
															onClick={() => increaseCount(basket.id)}
															size={21}
														/>
													</div>

													<div className='flex items-center md:flex-row sm:flex-col max-sm:flex-col gap-2'>
														<p className='font-[700] text-[#FF003C] text-[16px]'>
															{basket.prodPrice?.toFixed(2)}₼
														</p>
														<p className='font-[550] text-[#777] text-[14px]'>
															<del>{basket.prodOldPrice?.toFixed(2)}₼</del>
														</p>
													</div>
													<IoMdClose
														onClick={() => deleteProd(basket.id)}
														size={27}
														className='text-[#777]'
													/>
												</div>
											</div>
										))}
								</div>
								<div className='lg:w-[30%] sm:w-[100%] max-sm:w-[100%]'>
									<div className=' bg-white p-4 '>
										<div className='flex justify-between p-3 border-solid border-b-2 border-[#F3F3F3]'>
											<p className='font-[600] text-[16px]'>{t('product')}:</p>
											<p>
												{
													basketData?.filter(
														(basket) => basket.userId === userId
													).length
												}{' '}
												{t('product')}
											</p>
										</div>
										<div>
											<div className='border-solid border-b-2 border-[#F3F3F3] pb-3 '>
												{basketData
													?.filter((basket) => basket.userId === userId)
													.map((item) => {
														return (
															<div className='p-3 flex justify-between border-solid border-b-2 border-[#F3F3F3] text-[14px] font-[500] text-[#323232]'>
																<p className='sm:w-[60%] max-sm:w-[50%]'>
																	{item.prodName}
																	<span className='text-[#FF9933] font-[500] ms-1'>
																		( {productCounts[item.id] || 1}{' '}
																		{t('pieces')})
																	</span>
																</p>
																<p>
																	<p className='text-[14px] text-[#777] font-[600]'>
																		<del>{item.prodOldPrice?.toFixed(2)} ₼</del>
																	</p>
																	<p className='font-[600] text-[16px] text-[#FF003C]'>
																		{item.prodPrice?.toFixed(2)} ₼
																	</p>
																</p>
															</div>
														);
													})}

												<div className='flex justify-between mt-4 font-[500] text-[14px] bg-[#F3F3F3] p-4'>
													<p>{t('totalAmount')}</p>
													<p>
														{basketData
															?.filter((basket) => basket.userId === userId)
															.reduce((acc, item) => {
																const count = productCounts[item.id] || 1;
																return (acc + item.prodOldPrice) * count;
															}, 0)
															?.toFixed(2)}
														₼
													</p>
												</div>

												<div className='flex justify-between mt-4 font-[500] text-[14px] bg-[#F3F3F3] p-4'>
													<p>{t('discount')}:</p>
													<p className='font-[600] text-[14px] text-[#FF003C]'>
														{(
															basketData
																?.filter((basket) => basket.userId === userId)
																.reduce((acc, item) => {
																	const count = productCounts[item.id] || 1;
																	return (acc + item.prodOldPrice) * count;
																}, 0) -
															// (acc, item) => acc + item.prodOldPrice,
															// 0
															// )
															basketData
																?.filter((basket) => basket.userId === userId)
																.reduce((acc, item) => {
																	const count = productCounts[item.id] || 1;
																	return (acc + item.prodPrice) * count;
																}, 0)
														)?.toFixed(2)}
														₼
													</p>
												</div>
											</div>
											<div className='flex justify-between mt-8 bg-[#F3F3F3] p-4'>
												<p className='font-[600] text-[14px]'>
													{t('finalAmount')}:
												</p>
												<p className='font-[700] text-[16px]'>
													{basketData
														?.filter((basket) => basket.userId === userId)
														.reduce((acc, item) => {
															const count = productCounts[item.id] || 1;
															return (acc + item.prodPrice) * count;
														}, 0)
														?.toFixed(2)}
													₼
												</p>
											</div>
										</div>
									</div>
									<div className='flex flex-col'>
										<button className='w-[95%] m-auto mt-4 flex items-center justify-center gap-2 bg-[#FF003C] text-white py-4 px-16 rounded-lg text-[18px] font-[500]'>
											{t('confirmOrder')}
										</button>
										<button
											onClick={openPaymentModal}
											className='w-[95%] m-auto mt-3 flex items-center justify-center gap-2 bg-white py-4 px-16 rounded-lg text-[18px] font-[500]'>
											<TbHandClick
												size={19}
												style={{ cursor: 'pointer', fil: 'white' }}
											/>
											{t('buyOneClick')}
										</button>
									</div>
								</div>
							</div>
						) : (
							<div className='w-[100%] bg-white h-[50vh] flex flex-col items-center justify-center gap-4 rounded-lg'>
								<img src={basketEmpty} alt='' />
								<p className='text-[24px] font-[600] text-[#323232] mt-3'>
									{t('noProd')}
								</p>
								<p className='text-[16px] font-[500] text-[#777]'>
									{t('addProd')}
								</p>
								<button
									className='text-[14px] font-[500] text-[#323232] w-[18%] py-4 border-solid border-[1px] border-[#323232] rounded-md mt-4'
									onClick={() => NavigateHome('/')}>
									{t('home')}
								</button>
							</div>
						)
					) : (
						<div className='w-[100%] mx-auto bg-white h-[50vh] flex flex-col items-center justify-center gap-4 rounded-lg'>
							<img src={basketEmpty} alt='' />
							<p className='md:text-[24px] font-[600] text-[#323232] mt-3 sm:text-[20px]'>
								{t('noProd')}
							</p>
							<p className='md:text-[16px] font-[500] text-[#777] sm:text-[14px]'>
								{t('addProd')}
							</p>
							<button
								className='text-[14px] font-[500] text-[#323232] md:w-[18%] sm:w-[30%] max-sm:w-[50%] py-4 border-solid border-[1px] border-[#323232] rounded-md mt-4'
								onClick={() => NavigateHome('/')}>
								{t('home')}
							</button>
						</div>
					)}
				</div>
				{/* </div> */}
				{paymentModal && <BuyOneClick openPaymentModal={openPaymentModal} />}
			</div>
		</div>
	);
}

export default Basket;

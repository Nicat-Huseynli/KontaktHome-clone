import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import macMini from '../../assets/images/home-page-carousel-imgs/macminiaz_1-b577ae11.webp';
import macPro from '../../assets/images/home-page-carousel-imgs/macproazban_1-a424ff62.webp';
import furniture from '../../assets/images/home-page-carousel-imgs/mebel-bilboard-1x1_1__1-b64b645f.webp';
import samsung from '../../assets/images/home-page-carousel-imgs/samabaneraz_1-45b69e15.webp';
import subscribe from '../../assets/images/home-page-carousel-imgs/subscribebilboard.webp';
import guarantee from '../../assets/images/home-page-carousel-imgs/urekle_iaaaaqqqqqaz_595_1-a00538ff.webp';
import '../home/carousel.css';
import ReactDOM from 'react-dom';
import Countdown, { zeroPad } from 'react-countdown';
import axios from 'axios';
import { SlBasket } from 'react-icons/sl';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoMdHeartEmpty } from 'react-icons/io';

import Category from '../category/Category';

import acer from '../../assets/images/brands/Acer-90486c00.webp';
import apple from '../../assets/images/brands/Applenewlogo-6d6b8aea.webp';
import bosch from '../../assets/images/brands/Bosch-048095cb.webp';
import hp from '../../assets/images/brands/Hp-56f4253c.webp';
import lenovo from '../../assets/images/brands/Lenovo-753198bf.webp';
import lg from '../../assets/images/brands/Lg-aee4b428.webp';
import samsungBrand from '../../assets/images/brands/SamsungLogo-6413e586.webp';
import sony from '../../assets/images/brands/Sony-0343943e.webp';
import toshiba from '../../assets/images/brands/Toshiba-ab509b65.webp';

import { CiCreditCard2 } from 'react-icons/ci';
import { SiAdguard } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';
import { PiMedal } from 'react-icons/pi';
import Products from '../products/Products';
import LoginSidebar from '../login-sidebar/LoginSidebar';

function Home() {
	document.title = `Kontak Home: Home`;
	const { t, i18n } = useTranslation();

	// const changeLanguage = (lang) => {
	// 	// localStorage.setItem("lang", lang);
	// 	i18n.changeLanguage(lang); // Switch language
	// };

	// Carousel
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const brandsResponsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 6,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 4,
		},
	};

	// Countdown
	const hour = ({ hours, completed }) => {
		if (completed) {
			return <Completionist />;
		} else {
			return <span>{zeroPad(hours)}</span>;
		}
	};

	const minute = ({ minutes, completed }) => {
		if (completed) {
			return <Completionist />;
		} else {
			return <span>{zeroPad(minutes)}</span>;
		}
	};

	const second = ({ seconds, completed }) => {
		if (completed) {
			return <Completionist />;
		} else {
			return <span>{zeroPad(seconds)}</span>;
		}
	};

	const [loading, setLoading] = useState(true);

	// Daily Offer
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/products').then((response) => {
			setData(response.data);
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		axios.get('http://localhost:3000/categories').then((response) => {
			setCategories(response.data);
			setLoading(false);
		});
	}, []);

	// Scale Up product info
	const [hoveredItem, setHoveredItem] = useState(null);

	// Scale Up Product info for daily offer
	const [hoveredDailyItem, setHoveredDailyItem] = useState(null);

	// Choose Category button
	const [activeCategory, setActiveCategory] = useState(null);
	const [activeProds, setActiveProds] = useState(null);

	const categoryBtnClick = (index, categoryId) => {
		setActiveCategory(index);
		setActiveProds(categoryId);
	};

	// Add Basket
	const [basketOpenLoginSidebar, setBasketOpenLoginSidebar] = useState(false);
	const closeLoginSidebar = () => {
		setBasketOpenLoginSidebar(!basketOpenLoginSidebar);
	};

	const userId = JSON.parse(localStorage.getItem('ID'));

	const addBasket = (selectedId) => {
		let prodId = data.find((item) => item.id == selectedId).id;
		let prodName = data.find((item) => item.id == selectedId).name;
		let prodPrice = data.find((item) => item.id == selectedId).price;
		let prodOldPrice = data.find((item) => item.id == selectedId).oldPrice;
		let prodImg = data.find((item) => item.id == selectedId).imageUrl;

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

	// Translate Category to the Azerbaijan language
	const translateToAze = (category) => {
		switch (category) {
			case 'Phones':
				return 'Smartfonlar və aksessuarlar';
			case 'Smart Watches':
				return 'Smart qadjetlər';
			case 'Notebooks and Tablets':
				return 'Notbuklar, PK, planşetlər';
			case 'For Gamers':
				return 'Geymerlər üçün məhsullar';
			case 'TV & Audio':
				return 'TV, audio və foto';
			case 'Kitchen Electronics':
				return 'Mətbəx texnikası';
			case 'Home Electronics':
				return 'Ev texnikası';
			case 'Hobby':
				return 'Hobbi və əyləncə';
			case 'Furniture':
				return 'Mebel və tekstil';
			case 'Home and Garden':
				return 'Ev və bağ';

			default:
				break;
		}
	};

	// Translate Category to the Russian language
	const translateToRu = (category) => {
		switch (category) {
			case 'Phones':
				return 'Смартфоны и аксессуары';
			case 'Smart Watches':
				return 'Умные гаджеты';
			case 'Notebooks and Tablets':
				return 'Ноутбуки, ПК, планшеты';
			case 'For Gamers':
				return 'Товары для геймеров';
			case 'TV & Audio':
				return 'ТВ, аудио и фото';
			case 'Kitchen Electronics':
				return 'Кухонная техника';
			case 'Home Electronics':
				return 'Бытовая техника';
			case 'Hobby':
				return 'Хобби и развлечения';
			case 'Furniture':
				return 'Мебель и текстиль';
			case 'Home and Garden':
				return 'Дом и сад';

			default:
				return category;
		}
	};

	const pageLang = localStorage.getItem('i18nextLng');

	return (
		<div>


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
			{/* <AccountSetting /> */}
			<div className='bg-[#F3F3F3] flex flex-col gap-1 '>
				<div className='md:px-8 max-sm:px-3 sm:px-3 py-5 flex gap-8 w-[100%] md:h-[90vh] sm:h-[55vh] max-sm:h-[55vh]'>
					<Category />

					<section className='relative xl:w-[50%] lg:w-[70%] sm:w-[100%] max-sm:w-[100%] xl:h-[84.5vh] md:h-[100%] sm:h-[50vh] max-sm:h-[50vh]'>
						<Carousel
							className='carousel	'
							responsive={responsive}
							autoPlay={true}
							autoPlaySpeed={2500}
							removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
							infinite={true}
							showDots={true}>
							<div>
								<Link to={'/telefoniya/type/Laptop'}>
									<img src={macMini} alt='macMini' />
								</Link>
							</div>
							<div>
								<Link to={'/telefoniya/type/Laptop'}>
									<img src={macPro} alt='macPro' />
								</Link>
							</div>
							<div>
								<Link to={''}>
									<img src={samsung} alt='samsung' />
								</Link>
							</div>
							<div>
								<Link to={'/guarantee-best-price'}>
									<img src={guarantee} alt='guarantee' />
								</Link>
							</div>
							<div>
								<Link to={'/telefoniya/9'}>
									<img src={furniture} alt='furniture' />
								</Link>
							</div>
							<div>
								<Link to={''}>
									<img src={subscribe} alt='subscribe' />
								</Link>
							</div>
						</Carousel>
					</section>
					<aside className='bg-white xl:flex flex-col w-[25%] p-5 rounded-lg sm:hidden max-sm:hidden'>
						<header className='w-[100%] flex flex-col gap-4'>
							<h2 className='text-center font-[600] text-[20px]'>
								{t('dailyOffer')}
							</h2>
							<div className='countdown flex gap-4 justify-center items-center'>
								<div className='felx flex-col items-center justify-center'>
									<div className='text-[#17a539] font-[600] text-center'>
										<Countdown renderer={hour} date={Date.now() + 20000000} />
									</div>
									<span className='text-[12px] font-[500]'>{t('hour')}</span>
								</div>

								<div className='felx flex-col border-x-2 border-x-[#F3F3F3] border-solid px-2'>
									<div className='text-[#17a539] font-[600] text-center'>
										<Countdown renderer={minute} date={Date.now() + 20000000} />
									</div>
									<span className='text-[12px] font-[500]'>{t('minute')}</span>
								</div>

								<div className='felx flex-col'>
									<div className='text-[#17a539] font-[600] text-center'>
										<Countdown renderer={second} date={Date.now() + 20000000} />
									</div>
									<span className='text-[12px] font-[500]'>{t('second')}</span>
								</div>
							</div>
							<hr className='w-[112.5%] mx-[-20px]' />
						</header>

						<body className='w-[90%] mt-12 mx-auto'>
							<Carousel
								className=''
								responsive={responsive}
								autoPlay={true}
								autoPlaySpeed={1500}
								removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
								infinite={true}>
								{data.slice(0, 5).map((item) => {
									return (
										<div key={item.id}>
											<Link
												to={`/productInfo/${item.id}`}
												className=' flex flex-col gap-4 h-[330px]'>
												<h2 className='text-center font-[600] text-[18px]'>
													{item.name}
												</h2>
												<div className='flex gap-3 items-end justify-center'>
													<h3 className='text-[#ff003c] font-[700] text-[18px] '>
														{item.price > item.oldPrice
															? item.oldPrice
															: item.price + ' ₼'}
													</h3>
													<h3 className='text-[#777] font-[700] text-[14px]'>
														{' '}
														<del>
															{item.price > item.oldPrice
																? item.price
																: item.oldPrice + ' ₼'}
														</del>{' '}
													</h3>
												</div>
												<img
													className='w-[250px] ps-12 object-contain'
													src={item.imageUrl}
													alt={item.name}
												/>
											</Link>

											<button
												onClick={() => addBasket(item.id)}
												className='flex gap-4 text-white bg-[#ff003c] py-4 px-12 w-[90%] justify-center text-center rounded-xl ms-5 font-[550]'>
												<SlBasket
													size={20}
													style={{ cursor: 'pointer', fil: 'white' }}
												/>{' '}
												{t('addBasket')}
											</button>
										</div>
									);
								})}
							</Carousel>
						</body>
					</aside>
				</div>

				{/* Brand Container */}
				<div className='bg-white mb-1 w-[94.5%] m-auto'>
					<Carousel
						className='brandCarousel'
						responsive={brandsResponsive}
						autoPlay={true}
						autoPlaySpeed={2500}
						// customTransition="all .2"
						// transitionDuration={1000}
						removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
						infinite={true}>
						<Link>
							<img src={acer} alt='acer' />
						</Link>

						<Link>
							<img src={hp} alt='hp' />
						</Link>

						<Link>
							<img src={apple} alt='apple' />
						</Link>

						<Link>
							<img src={samsungBrand} alt='samsung' />
						</Link>

						<Link>
							<img src={lenovo} alt='lenovo' />
						</Link>

						<Link>
							<img src={lg} alt='lg' />
						</Link>

						<Link>
							<img src={toshiba} alt='toshiba' />
						</Link>

						<Link>
							<img src={sony} alt='sony' />
						</Link>

						<Link>
							<img src={bosch} alt='bosch' />
						</Link>
					</Carousel>
				</div>

				{/*  Info Container*/}
				<div
					className='flex w-[100%] scroll-smooth overflow-x-scroll mb-12 gap-2 px-2 sm:px-4 md:px-8
					[&::-webkit-scrollbar]:w-1
					[&::-webkit-scrollbar]:h-1
					[&::-webkit-scrollbar-track]:rounded-full
					[&::-webkit-scrollbar-thumb]:rounded-full
					dark:[&::-webkit-scrollbar-track]:bg-neutral-300
					dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800'>
					<Link
						to={'/delivery-payment'}
						className='flex flex-shrink-0 gap-5 items-center bg-white rounded-lg p-5 w-[160px] sm:w-[260px] md:w-[360px]'>
						<CiCreditCard2 className='text-red-500 lg:text-[30px] md:text-[25px] sm:text-[50px] max-sm:text-[70px]' />
						<div className='flex flex-col gap-3'>
							<h3 className='font-[600] text-[14px] sm:text-[16px] md:text-[18px]'>
								{t('clearance')}
							</h3>
							<p className='font-[500] text-[12px] sm:text-[14px] text-[#777]'>
								{t('clearanceInfo')}
							</p>
						</div>
					</Link>
					<Link className='flex flex-shrink-0 gap-5 items-center bg-white rounded-lg p-5 w-[160px] sm:w-[260px] md:w-[360px]'>
						<SiAdguard className='text-red-500 lg:text-[30px] md:text-[25px] sm:text-[40px] max-sm:text-[70px]' />
						<div className='flex flex-col gap-3'>
							<h3 className='font-[600] text-[14px] sm:text-[16px] md:text-[18px]'>
								{t('warrantyOption')}
							</h3>
							<p className='font-[500] text-[12px] sm:text-[14px] text-[#777]'>
								{t('warrantyOptionInfo')}
							</p>
						</div>
					</Link>
					<Link
						to={'/delivery-payment'}
						className='flex flex-shrink-0 gap-5 items-center bg-white rounded-lg p-5 w-[160px] sm:w-[260px] md:w-[360px]'>
						<TbTruckDelivery className='text-red-500 lg:text-[30px] md:text-[25px] sm:text-[40px] max-sm:text-[70px]' />
						<div className='flex flex-col gap-3'>
							<h3 className='font-[600] text-[14px] sm:text-[16px] md:text-[18px]'>
								{t('delivery')}
							</h3>
							<p className='font-[500] text-[12px] sm:text-[14px] text-[#777]'>
								{t('deliveryInfo')}
							</p>
						</div>
					</Link>
					<Link
						to={'/guarantee-best-price'}
						className='flex flex-shrink-0 gap-5 items-center bg-white rounded-lg p-5 w-[160px] sm:w-[260px] md:w-[360px]'>
						<PiMedal className='text-red-500 lg:text-[30px] md:text-[25px] sm:text-[40px] max-sm:text-[70px]' />
						<div className='flex flex-col gap-3'>
							<h3 className='font-[600] text-[14px] sm:text-[16px] md:text-[18px]'>
								{t('guarantee')}
							</h3>
							<p className='font-[500] text-[12px] sm:text-[14px] text-[#777]'>
								{t('guaranteeInfo')}
							</p>
						</div>
					</Link>
				</div>

				{/* Daily Offer md size of wiew port */}
				<aside className='bg-white max-sm:flex sm:flex flex-col w-[90%] m-auto p-2 rounded-lg xl:hidden'>
					<header className='w-[100%] flex flex-col gap-4'>
						<div className='flex items-center justify-between px-3'>
							<h2 className='text-center font-[600] text-[20px]'>
								{t('dailyOffer')}
							</h2>
							<div className='countdown flex gap-4 justify-center items-center'>
								<div className='felx flex-col items-center justify-center'>
									<div className='text-[#17a539] font-[600] text-center'>
										<Countdown renderer={hour} date={Date.now() + 20000000} />
									</div>
									<span className='text-[12px] font-[500]'>{t('hour')}</span>
								</div>

								<div className='felx flex-col border-x-2 border-x-[#F3F3F3] border-solid px-2'>
									<div className='text-[#17a539] font-[600] text-center'>
										<Countdown renderer={minute} date={Date.now() + 20000000} />
									</div>
									<span className='text-[12px] font-[500]'>{t('minute')}</span>
								</div>

								<div className='felx flex-col'>
									<div className='text-[#17a539] font-[600] text-center'>
										<Countdown renderer={second} date={Date.now() + 20000000} />
									</div>
									<span className='text-[12px] font-[500]'>{t('second')}</span>
								</div>
							</div>
						</div>
						<hr className='w-[100%]' />
					</header>

					<body className='w-[90%] mt-12 mx-auto '>
						<Carousel
							className=''
							responsive={responsive}
							autoPlay={true}
							autoPlaySpeed={1500}
							removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
							infinite={true}>
							{data.slice(0, 5).map((item) => {
								return (
									<div key={item.id} className='flex items-start gap-6'>
										<Link to={`/productInfo/${item.id}`}>
											<img
												className='sm:w-[250px] max-sm:w-[100%] ps-12 object-contain'
												src={item.imageUrl}
												alt={item.name}
											/>
										</Link>
										<div className='flex flex-col items-center justify-center pb-6'>
											<Link
												to={`/productInfo/${item.id}`}
												className=' flex items-start gap-4 sm:h-[150px] max-sm:h-[120px]'>
												<div className='flex flex-col items-center justify-center'>
													<h2 className='text-center font-[600] text-[18px]'>
														{item.name}
													</h2>
													<div className='flex gap-3 items-end justify-center mt-5'>
														<h3 className='text-[#ff003c] font-[700] text-[18px] '>
															{item.price > item.oldPrice
																? item.oldPrice
																: item.price + ' ₼'}
														</h3>
														<h3 className='text-[#777] font-[700] text-[14px]'>
															{' '}
															<del>
																{item.price > item.oldPrice
																	? item.price
																	: item.oldPrice + ' ₼'}
															</del>{' '}
														</h3>
													</div>
													<p className='text-[#777] mt-2'>0% 18 {t('month')}</p>
												</div>
											</Link>

											<button className='flex gap-4 items-center text-white bg-[#ff003c] sm:py-4 sm:px-12 sm:w-[100%] justify-center text-center rounded-xl ms-5 font-[550] max-sm:py-2 max-sm:px-6 max-sm:w-[85%]'>
												<SlBasket
													size={20}
													style={{ cursor: 'pointer', fil: 'white' }}
												/>{' '}
												{t('addBasket')}
											</button>

											{/* <Link className='flex items-center sm:text-[14px] max-sm:text-[12px] justify-center mt-3 w-[100%] hover:underline '>
												Bütün təklifləri gör
											</Link> */}
										</div>
									</div>
								);
							})}
						</Carousel>
					</body>
				</aside>

				{/* Sales leaders */}
				<div className='mt-12 w-[100%] px-9 flex flex-col mb-10'>
					<h3 className='text-[20px] font-[600]'>{t('salesLeaders')}</h3>
					<div className='flex gap-3 mt-6 flex-wrap mb-3'>
						{categories.map((category, index) => {
							return (
								<button
									key={category.id}
									onClick={() => categoryBtnClick(index, category.id)}
									className={`bg-[#eaeaea] text-[14px] rounded-[30px] p-3 font-[500] text-[#535353] hover:text-white hover:bg-[#323232] transition-all duration-500 ${
										activeCategory === index
											? 'text-white bg-[#323232] '
											: 'bg-[#eaeaea]'
									}`}>
									{pageLang == 'en'
										? category.name
										: pageLang == 'ru'
										? translateToRu(category.name)
										: translateToAze(category.name)}
								</button>
							);
						})}
					</div>

					<div
						className='flex gap-2 overflow-x-scroll overflow-y-hidden 
					[&::-webkit-scrollbar]:w-1
					[&::-webkit-scrollbar]:h-2
					[&::-webkit-scrollbar-track]:rounded-full
					[&::-webkit-scrollbar-thumb]:rounded-full
					dark:[&::-webkit-scrollbar-track]:bg-neutral-300
					dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800'>
						{(data.filter((info) => info.categoryId == activeProds).length > 0
							? data.filter((info) => info.categoryId == activeProds)
							: data
						).map((item, index) => (
							<div key={item.id}>
								<Link to={`/productInfo/${item.id}`}>
									<div
										onMouseEnter={() => setHoveredItem(index)}
										onMouseLeave={() => setHoveredItem(null)}
										// onMouseEnter={() => setScaleUp(true)}
										// onMouseLeave={() => setScaleUp(false)}
										className='flex flex-col w-[300px] h-[350px] bg-white pb-6 rounded-lg px-4'>
										<img
											className='w-[55%] m-auto'
											src={item.imageUrl}
											alt={item.name}
										/>
										<h3 className='text-[14px] font-[500] mb-7'>{item.name}</h3>
										<p className='text-[12px] bg-[#ff003c] mb-4 text-white font-[500] w-[26%] p-1 text-center rounded-md'>
											{item.price > item.oldPrice
												? -(item.price - item.oldPrice).toFixed(2)
												: (-(item.oldPrice - item.price)).toFixed(2) + '₼'}
										</p>
										<h3 className='text-[#777] font-[500] text-[13px]'>
											<del>
												{item.price > item.oldPrice
													? item.price
													: item.oldPrice + ' ₼'}
											</del>
										</h3>
										<div className='flex justify-between'>
											<h3 className='text-[#ff003c] font-[700] text-[16px] '>
												{item.price > item.oldPrice
													? item.oldPrice
													: item.price + ' ₼'}
											</h3>
											<p className='font-[600] text-[12px] text-[#323232]'>
												0% 12 ay
											</p>
										</div>
									</div>
								</Link>
								{hoveredItem == index && (
									<div
										onMouseEnter={() => setHoveredItem(index)}
										onMouseLeave={() => setHoveredItem(null)}
										// onMouseEnter={() => setScaleUp(true)}
										// onMouseLeave={() => setScaleUp(false)}
										className='flex items-center justify-center gap-3 bg-white mt-[-7px] pt-8 pb-6 '>
										<div className='bg-[#f3f3f3] p-2 rounded-xl'>
											<IoMdHeartEmpty size={25} style={{ cursor: 'pointer' }} />
										</div>
										<div className='bg-[#f3f3f3] p-2 rounded-xl'>
											<LiaBalanceScaleSolid
												size={25}
												style={{ cursor: 'pointer' }}
											/>
										</div>
										<button
											onClick={() => addBasket(item.id)}
											className='flex gap-4 text-white bg-[#ff003c] p-3 justify-center items-center text-center rounded-xl font-[550] text-[12px]'>
											<SlBasket
												size={20}
												style={{ cursor: 'pointer', fil: 'white' }}
											/>{' '}
											{t('addBasket')}
										</button>
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Daily Offer Container */}
				<div className='mt-12 w-[100%] px-9 flex flex-col mb-[120px]'>
					<h3 className='text-[20px] font-[600] mb-6'>{t('dailyOffer')}</h3>
					<div
						className='flex gap-2 overflow-x-scroll overflow-y-hidden 
					[&::-webkit-scrollbar]:w-1
					[&::-webkit-scrollbar]:h-2
					[&::-webkit-scrollbar-track]:rounded-full
					[&::-webkit-scrollbar-thumb]:rounded-full
					dark:[&::-webkit-scrollbar-track]:bg-neutral-300
					dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800'>
						{data.slice(0, 5).map((item, index) => {
							return (
								<div key={item.id}>
									<Link to={`/productInfo/${item.id}`}>
										<div
											onMouseEnter={() => setHoveredDailyItem(index)}
											onMouseLeave={() => setHoveredDailyItem(null)}
											className='flex flex-col w-[300px] h-[350px] bg-white pb-6 rounded-lg px-4'>
											<img
												data-tooltip={item.name}
												className='w-[55%] m-auto'
												src={item.imageUrl}
												alt={item.name}
											/>
											<h3 className='text-[14px] font-[500] mb-7'>
												{item.name}
											</h3>
											<p className='text-[12px] bg-[#ff003c] mb-4 text-white font-[500] w-[25%] p-1 rounded-md'>
												{item.price > item.oldPrice
													? -(item.price - item.oldPrice).toFixed(2)
													: (-(item.oldPrice - item.price)).toFixed(2) + '₼'}
											</p>
											<h3 className='text-[#777] font-[500] text-[13px]'>
												<del>
													{item.price > item.oldPrice
														? item.price
														: item.oldPrice + ' ₼'}
												</del>
											</h3>
											<div className='flex justify-between'>
												<h3 className='text-[#ff003c] font-[700] text-[16px] '>
													{item.price > item.oldPrice
														? item.oldPrice
														: item.price + ' ₼'}
												</h3>
												<p className='font-[600] text-[12px] text-[#323232]'>
													0% 12 ay
												</p>
											</div>
										</div>
									</Link>
									{hoveredDailyItem == index && (
										<div
											onMouseEnter={() => setHoveredDailyItem(index)}
											onMouseLeave={() => setHoveredDailyItem(null)}
											// onMouseEnter={() => setScaleUp(true)}
											// onMouseLeave={() => setScaleUp(false)}
											className='flex items-center justify-center gap-3 bg-white mt-[-7px] pt-8 pb-6'>
											<div className='bg-[#f3f3f3] p-2 rounded-xl'>
												<IoMdHeartEmpty
													size={25}
													style={{ cursor: 'pointer' }}
												/>
											</div>
											<div className='bg-[#f3f3f3] p-2 rounded-xl'>
												<LiaBalanceScaleSolid
													size={25}
													style={{ cursor: 'pointer' }}
												/>
											</div>
											<button
												onClick={() => addBasket(item.id)}
												className='flex gap-4 text-white bg-[#ff003c] p-3 justify-center items-center text-center rounded-xl font-[550] text-[12px]'>
												<SlBasket
													size={20}
													style={{ cursor: 'pointer', fil: 'white' }}
												/>{' '}
												{t('addBasket')}
											</button>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* <Products/> */}
			{basketOpenLoginSidebar && (
				<LoginSidebar closeLoginSidebar={closeLoginSidebar} />
			)}
		</div>
	);
}

export default Home;

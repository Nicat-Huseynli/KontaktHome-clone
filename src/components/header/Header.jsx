import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../header/header.css';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import MonthlPayModal from '../monthly-payment-modal/MonthlPayModal';
import LoginSidebar from '../login-sidebar/LoginSidebar';
import { AiFillAppstore } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoMdHeartEmpty } from 'react-icons/io';
import { SlBasket } from 'react-icons/sl';
import { RiAccountCircleLine } from 'react-icons/ri';
import Sticky from 'react-sticky-el';
import Category from '../category/Category';
import axios from 'axios';

function Header() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		// localStorage.setItem("lang", lang);
		i18n.changeLanguage(lang); // Switch language
	};

	const Navigate = useNavigate();
	// Language Dropdown
	const [showLang, setShowLang] = useState(false);
	const wrapperRef = useRef(null);

	const toggleLang = () => setShowLang(!showLang);

	const clickOutside = (e) => {
		if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
			setShowLang(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', clickOutside);
		return () => {
			document.removeEventListener('mousedown', clickOutside);
		};
	}, []);

	// Open Payment Modal
	const [showPayModal, setShowPayModal] = useState(false);

	const showPaymentModal = () => setShowPayModal(!showPayModal);

	// Open Log In Sidebar
	const [showLoginSidebar, setShowLoginSidebar] = useState(false);

	const openLoginSidebar = () => setShowLoginSidebar(!showLoginSidebar);

	// Open Category
	const [showCategory, setShowCategory] = useState(false);

	// const openCategory = () => setShowCategory(!showCategory);

	// Open Acconut
	const [showAccount, setShowAccount] = useState(false);

	const openAccount = () => {
		setShowAccount(!showAccount);
	};

	// Search Bar
	const [inputText, setInputText] = useState('');

	const handleInput = (e) => {
		setInputText(e.target.value.toLowerCase());
	};

	// Product Data
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/products').then((response) => {
			setData(response.data);
		});
	}, []);

	// Log Out
	const logOut = () => {
		localStorage.removeItem('ID');
		location.reload();
	};

	const userId = JSON.parse(localStorage.getItem('ID'));

	const [basketData, setBasketData] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3000/basket')
			.then((res) => setBasketData(res.data));
	}, []);

	// Refresh page when cohoose prod from search bar
	const refreshPage = () => {
		setInputText('');
	};

	// document.title = `Kontak Home: Home | page`;
	return (
		<div className='relative'>
			<div>
				{/* <h1>{t('welcome')}</h1> */}
				{/* <p>{t('description')}</p> */}
				{/* <button>{t('monthlyPayment')}</button> */}
				{/* <button>{t('logIn')}</button> */}
				{/* <button onClick={() => changeLanguage('en')}>English</button>
				<button onClick={() => changeLanguage('az')}>Azerbaijan</button> */}
			</div>
			<div className='w-[100%]'>
				<nav className='flex items-center justify-between w-[100%] py-[15px] md:px-[35px] sm:px-4 max-sm:px-4'>
					<div className='sm:w-[150px] max-sm:w-[120px]'>
						<Link to={'/'}>
							<img
								className='cursor-pointer w-[100%]'
								src='../src/assets/images/logo.svg'
								alt='logo'
							/>
						</Link>
					</div>
					<ul className='flex items-center gap-[20px] text-[#323232] max-sm:hidden sm:hidden lg:flex'>
						<li className='active-link header-link hover:underline cursor-pointer font-[500] text-red-500'>
							<Link to={'/trade-in'}>Trade-in</Link>
						</li>
						<li className='header-link hover:underline cursor-pointer font-[500]'>
							<Link to={'/stores'}>{t('shops')}</Link>
						</li>
						<li className='header-link hover:underline cursor-pointer font-[500]'>
							<Link to={'/corporate'}>{t('corporateSales')}</Link>
						</li>
					</ul>

					<div className='flex items-center md:gap-[20px] sm:gap-[10px] max-sm:gap-[10px]'>
						<p className='flex gap-1 font-[550] md:text-[20px] sm:text-[16px] max-sm:text-[16px]'>
							<span className='text-red-500'>*</span>{' '}
							<a href='tel:*6060'>6060</a>{' '}
						</p>
						<div className=' gap-3 items-center justify-center md:flex max-sm:hidden sm:hidden'>
							<button
								className='monthly-payment-btn'
								onClick={showPaymentModal}>
								{t('monthlyPayment')}
							</button>
							{userId ? (
								<button className='enter-account-btn' onClick={logOut}>
									{t('logOut')}
								</button>
							) : (
								<button
									className='enter-account-btn'
									onClick={openLoginSidebar}>
									{t('logIn')}
								</button>
							)}
						</div>

						<select
							onChange={(e) => changeLanguage(e.target.value)}
							className='outline-none px-2'
							name=''
							id=''>
							<option value='az'>Az</option>
							<option value='en'>En</option>
							<option value='ru'>Ru</option>
						</select>

						<div className='md:hidden max-sm:flex sm:flex'>
							{userId && (
								<button className='enter-account-btn' onClick={logOut}>
									Çıxış
								</button>
							)}
						</div>

						<div
							ref={wrapperRef}
							className={`flex gap-3 items-center justify-center ${
								userId ? 'sm:hidden max-sm:hidden' : 'sm:flex max-sm:flex'
							} `}>
							<RiAccountCircleLine
								className='md:hidden sm:block'
								size={25}
								onClick={openAccount}
							/>
						</div>
					</div>
				</nav>
			</div>

			<Sticky stickyStyle={{ zIndex: 99999 }}>
				<div className='search-container bg-white md:px-[35px] sm:px-2 max-sm:px-2 py-3'>
					<div className=' flex justify-between align-center w-[100%] '>
						<div className='category-div flex gap-1.5 items-center ms-3'>
							{showCategory ? (
								<AiFillAppstore
									onClick={() => setShowCategory(!showCategory)}
									style={{ cursor: 'pointer' }}
									size={25}
								/>
							) : (
								<AiOutlineAppstore
									onClick={() => setShowCategory(!showCategory)}
									style={{ cursor: 'pointer' }}
									size={25}
								/>
							)}
							<span
								onClick={() => setShowCategory(!showCategory)}
								className='text-[#4B5563] font-[500] text-[16px] cursor-pointer lg:block sm:hidden  max-sm:hidden'>
								{t('catalog')}
							</span>
						</div>

						<div className='relative w-[55%]'>
							<div className='search-bar flex bg-[#F3F3F3] w-[100%] px-2.5 py-2 rounded-lg '>
								<IoSearch className='fill-[#828282]' size={22} />
								<input
									type='text'
									placeholder={t('searching')}
									onChange={handleInput}
									className='bg-[#F3F3F3] text-[#828282] font-[500] w-[100%] ps-2 outline-none placeholder:font-[450] '
								/>
							</div>
							<div className='absolute bg-white w-[100%] flex '>
								{inputText && (
									<div className='w-[100%] p-5 grid md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-y-4'>
										{data
											.filter((item) =>
												item.name
													.toLowerCase()
													.startsWith(inputText.toLowerCase())
											)
											.slice(0, 10)
											.map((item) => (
												<Link to={`/productInfo/${item.id}`}>
													<div
														onClick={refreshPage}
														className='flex items-center gap-2 w-[90%] border-solid border-gray-200 border-[1px] rounded-lg'>
														<img
															className='w-[30%]'
															src={item.imageUrl}
															alt={item.name}
														/>
														<div>
															<h3 className='text-[14px] font-[600] text-[#58585a]'>
																{item.name}
															</h3>
															<p className='text-[13px] font-[600] text-[#818285]'>
																{item.price + ' ₼'}
															</p>
															<p className='text-[12px] font-[600] text-[#d1d2d4]'>
																<del>{item.oldPrice + ' ₼'}</del>
															</p>
														</div>
													</div>
												</Link>
											))}
									</div>
								)}
							</div>
						</div>

						<div className='flex align-center '>
							<div className='md:px-5 pt-2 md:block sm:px-2  max-sm:px-2'>
								<LiaBalanceScaleSolid size={25} style={{ cursor: 'pointer' }} />
							</div>
							<div
								className='md:px-5 pt-2 md:block max-sm:px-2 sm:px-2'
								style={{
									borderInline: '1px solid',
									borderColor: '#bcbcbc98',
								}}>
								<IoMdHeartEmpty size={25} style={{ cursor: 'pointer' }} />
							</div>
							<Link to={'/basket'}>
								<div className='relative md:px-5 mt-2.5 max-sm:px-2 sm:px-2'>
									<SlBasket size={20} style={{ cursor: 'pointer' }} />
									{userId && (
										<div className='absolute bottom-2 right-1 bg-[#FF003C] rounded-full text-white w-[20px] h-[20px] text-center text-[12px] font-[500]'>
											<p className='pt-1 pr-[1px]'>
												{
													basketData?.filter((item) => item.userId === userId)
														.length
												}
											</p>
										</div>
									)}
								</div>
							</Link>
						</div>
					</div>
				</div>
			</Sticky>

			{showCategory && <Category showCategory={showCategory} />}

			{showPayModal && <MonthlPayModal showPaymentModal={showPaymentModal} />}
			{showLoginSidebar && (
				<LoginSidebar
					openLoginSidebar={openLoginSidebar}
					showLoginSidebar={showLoginSidebar}
				/>
			)}

			{showAccount && (
				<LoginSidebar openAccount={openAccount} showAccount={showAccount} />
			)}

		</div>
	);
}

export default Header;

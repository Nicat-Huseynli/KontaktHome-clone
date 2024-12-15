import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { SlBasket } from 'react-icons/sl';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoMdHeartEmpty } from 'react-icons/io';
// import Filters from '../sidebar-filtres/Filters';
import { VscSettings } from 'react-icons/vsc';
import { FaPlus, FaMinus } from 'react-icons/fa6';
// import DoubleRangeSlider from '../price-range/DoubleRangeSlider';
import MultiRangeSlider from 'multi-range-slider-react';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import LoginSidebar from '../login-sidebar/LoginSidebar';
import { IoFilterSharp } from 'react-icons/io5';

function Products() {
	const navigateCategory = useNavigate();

	const [data, setData] = useState([]);

	const { type } = useParams();

	const [hoveredItem, setHoveredItem] = useState(null);

	const [select, setSelect] = useState('');

	const [typeOfProducts, setTypeOfProducts] = useState([]);

	const [brands, setBrands] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`http://localhost:3000/products`).then((response) => {
			setData(response.data);
			setLoading(false)
			
			const types = [
				...new Set(response.data.map((item) => item.characteristics.type)),
			];
			setTypeOfProducts(types);
		});
	}, []);

	// More button
	const [typeCount, setTypeCount] = useState(10);

	const increaseTypeCount = () => setTypeCount(typeOfProducts.length);

	const decreaseTypeCount = () => setTypeCount(10);

	// Open and close
	const [openManufacturer, setOpenManufacturer] = useState(true);

	const triggerManufacturer = () => setOpenManufacturer(!openManufacturer);

	const [openCategory, setOpenCategory] = useState(true);

	const triggerCategory = () => setOpenCategory(!openCategory);

	const [openPrice, setOpenPrice] = useState(true);

	const triggerPrice = () => setOpenPrice(!openPrice);

	// Selected Brand

	const [selectedBrands, setSelectedBrands] = useState([]);

	const handleBrand = (selectedBrand) => {
		setSelectedBrands((prev) =>
			prev.includes(selectedBrand)
				? prev.filter((b) => b !== selectedBrand)
				: [...prev, selectedBrand]
		);
	};

	console.log(selectedBrands);

	console.log(selectedBrands.map((brand) => brand));
	// console.log(selectedBrands.map((brand) => console.log(brand)));

	console.log(select);

	// Price Slider Filter

	const [minValue, set_minValue] = useState(15);
	const [maxValue, set_maxValue] = useState(2000);
	const handleInput = (e) => {
		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
	};

	// const [minVal, setMinVal] = useState(0);
	// const [maxVal, setMaxVal] = useState(3000);

	// const min = 0;
	// const max = 5000;

	// const handleMinChange = (e) => {
	// 	const value = Math.min(Number(e.target.value), maxVal - 1);
	// 	setMinVal(value);
	// };

	// const handleMaxChange = (e) => {
	// 	const value = Math.max(Number(e.target.value), minVal + 1);
	// 	setMaxVal(value);
	// };

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

	const getCategory = (cat) => {
		navigateCategory(`/telefoniya/type/${cat}`);
	};

	const [showFilter, setShowFilter] = useState(false);

	const openFilter = () => {
		setShowFilter(!showFilter);
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
			<div className='lg:px-12 sm:px-5 max-sm:px-4 pt-3'>
				<div className='bg-white flex items-center justify-between px-4 py-4 rounded-lg'>
					<h3 className='md:text-[20px] sm:text-[18px] max-sm:text-[18px] font-[600] text-[#111827]'>
						{type}
					</h3>

					<div className='flex items-center gap-5'>
						<IoFilterSharp className='xl:hidden' onClick={openFilter} />

						<select
							className='p-2 outline-none bg-[#F3F3F3] rounded-lg md:text-[14px] sm:text-[12px] max-sm:text-[12px] text-[#323232] font-[500]'
							onChange={(e) => setSelect(e.target.value)}
							id=''>
							<option value=''>Sıralama</option>
							<option value='1'>Məhsul adı</option>
							<option value='2'>Ucuzdan bahaya</option>
							<option value='3'>Bahadan ucuza</option>
						</select>
					</div>
				</div>

				<div className='flex justify-between sm:flex-col lg:flex-row'>
					{/* <Filters type={type} /> */}

					{showFilter && (
						<div className='absolute scroll-none z-50 w-[91%] top-22 bg-white rounded-lg mt-6 xl:hidden sm:block'>
							<div className='header flex items-center justify-between p-4'>
								<h3>Filtr</h3>
								<div className='flex items-center gap-4'>
									<button
										onClick={openFilter}
										className='bg-green-600 text-white p-2 rounded-md'>
										Təsdiq et
									</button>
									<VscSettings size={22} />
								</div>
							</div>

							<div className='price border-solid border-y-[1px] border-gray-200 p-5'>
								<div
									onClick={triggerPrice}
									className='flex justify-between cursor-pointer'>
									<h4>Qiymət</h4>

									{openPrice ? <FaMinus /> : <FaPlus />}
								</div>

								{openPrice && (
									<div className='flex flex-col gap-3'>
										<div className='flex items-center gap-1 mt-5'>
											<input
												type='text'
												value={minValue + ' ₼'}
												readOnly
												className='bg-[#F3F3F3] w-[50%] p-2 rounded-lg text-center'
											/>
											<span className='text-gray-300'>-</span>
											<input
												type='text'
												value={maxValue + ' ₼'}
												readOnly
												className='bg-[#F3F3F3] w-[50%] p-2 rounded-lg text-center'
											/>
										</div>

										<div>
											<MultiRangeSlider
												min={0}
												max={3000}
												step={5}
												minValue={minValue}
												maxValue={maxValue}
												onInput={(e) => {
													handleInput(e);
												}}
												ruler='false'
												label='false'
												barLeftColor='black'
												barInnerColor='black'
												barRightColor='black'
												labels='false'
												minCaptionColor='red'
												barHeight='2px'
												style={{ boxShadow: 'none', border: 'none' }}
											/>
										</div>
									</div>
								)}
							</div>

							<div className='manufacturer border-solid border-y-[1px] border-gray-200 p-5'>
								<div
									onClick={triggerManufacturer}
									className='flex justify-between cursor-pointer'>
									<h4>İstehsalçı</h4>

									{openManufacturer ? <FaMinus /> : <FaPlus />}
								</div>

								{openManufacturer && (
									<div className='flex flex-col gap-3 mt-4'>
										{[
											...new Set(
												data
													.filter((item) => item.characteristics.type === type)
													.map((item) => item.brand)
											),
										].map((brand) => (
											<div key={brand} className='flex gap-2'>
												<input
													type='checkbox'
													id={brand}
													className='w-[18px] h-[18px]'
													onChange={() => handleBrand(brand)}
													checked={selectedBrands.includes(brand)}
												/>
												<label
													htmlFor={brand}
													className='text-[16px] text-[#323232] cursor-pointer'>
													{brand}
												</label>
											</div>
										))}
									</div>
								)}
							</div>

							<div className='category border-solid border-y-[1px] border-gray-200 p-5'>
								<div
									onClick={triggerCategory}
									className='flex justify-between cursor-pointer'>
									<h4>Kateqoriya</h4>
									{openCategory ? <FaMinus /> : <FaPlus />}
								</div>

								{openCategory && (
									<div className='flex flex-col gap-3 mt-4'>
										{typeOfProducts.slice(0, typeCount).map((item, index) => {
											return (
												<div key={index} className='flex items-center gap-2'>
													<input
														type='checkbox'
														id={item}
														className='w-[18px] h-[18px]'
														checked={item === type}
														onChange={() => getCategory(item)}
													/>
													<label
														htmlFor={item}
														className='text-[16px] text-[#323232] cursor-pointer'>
														{item}
													</label>
												</div>
											);
										})}

										{typeCount === typeOfProducts.length ? (
											<p
												className='cursor-pointer text-[#323232]'
												onClick={decreaseTypeCount}>
												Daha az
											</p>
										) : (
											<p
												className='cursor-pointer text-[#323232]'
												onClick={increaseTypeCount}>
												Hamısını göstər
											</p>
										)}
									</div>
								)}
							</div>

							{/* <div className='category border-solid border-y-[1px] border-gray-200 p-5'>
							<div className='flex justify-between'>
								<h4>Reytinq</h4>
								<FaPlus />
								<FaMinus />
							</div>
							<div className='flex flex-col gap-3 mt-4'>
								2+
							</div>
						</div> */}
						</div>
					)}

					<div className='w-[20%] bg-white rounded-lg mt-6 xl:block sm:hidden max-sm:hidden'>
						<div className='header flex items-center justify-between p-4'>
							<h3>Filtr</h3>
							<VscSettings size={22} />
						</div>

						<div className='price border-solid border-y-[1px] border-gray-200 p-5'>
							<div
								onClick={triggerPrice}
								className='flex justify-between cursor-pointer'>
								<h4>Qiymət</h4>

								{openPrice ? <FaMinus /> : <FaPlus />}
							</div>

							{openPrice && (
								<div className='flex flex-col gap-3'>
									<div className='flex items-center gap-1 mt-5'>
										<input
											type='text'
											value={minValue + ' ₼'}
											readOnly
											className='bg-[#F3F3F3] w-[50%] p-2 rounded-lg text-center'
										/>
										<span className='text-gray-300'>-</span>
										<input
											type='text'
											value={maxValue + ' ₼'}
											readOnly
											className='bg-[#F3F3F3] w-[50%] p-2 rounded-lg text-center'
										/>
									</div>

									<div>
										<MultiRangeSlider
											min={0}
											max={3000}
											step={5}
											minValue={minValue}
											maxValue={maxValue}
											onInput={(e) => {
												handleInput(e);
											}}
											ruler='false'
											label='false'
											barLeftColor='black'
											barInnerColor='black'
											barRightColor='black'
											labels='false'
											minCaptionColor='red'
											barHeight='2px'
											style={{ boxShadow: 'none', border: 'none' }}
										/>
									</div>
								</div>
							)}
						</div>

						<div className='manufacturer border-solid border-y-[1px] border-gray-200 p-5'>
							<div
								onClick={triggerManufacturer}
								className='flex justify-between cursor-pointer'>
								<h4>İstehsalçı</h4>

								{openManufacturer ? <FaMinus /> : <FaPlus />}
							</div>

							{openManufacturer && (
								<div className='flex flex-col gap-3 mt-4'>
									{[
										...new Set(
											data
												.filter((item) => item.characteristics.type === type)
												.map((item) => item.brand)
										),
									].map((brand) => (
										<div key={brand} className='flex gap-2'>
											<input
												type='checkbox'
												id={brand}
												className='w-[18px] h-[18px]'
												onChange={() => handleBrand(brand)}
												checked={selectedBrands.includes(brand)}
											/>
											<label
												htmlFor={brand}
												className='text-[16px] text-[#323232] cursor-pointer'>
												{brand}
											</label>
										</div>
									))}
								</div>
							)}
						</div>

						<div className='category border-solid border-y-[1px] border-gray-200 p-5'>
							<div
								onClick={triggerCategory}
								className='flex justify-between cursor-pointer'>
								<h4>Kateqoriya</h4>
								{openCategory ? <FaMinus /> : <FaPlus />}
							</div>

							{openCategory && (
								<div className='flex flex-col gap-3 mt-4'>
									{typeOfProducts.slice(0, typeCount).map((item, index) => {
										return (
											<div key={index} className='flex items-center gap-2'>
												<input
													type='checkbox'
													id={item}
													className='w-[18px] h-[18px]'
													checked={item === type}
													onChange={() => getCategory(item)}
												/>
												<label
													htmlFor={item}
													className='text-[16px] text-[#323232] cursor-pointer'>
													{item}
												</label>
											</div>
										);
									})}

									{typeCount === typeOfProducts.length ? (
										<p
											className='cursor-pointer text-[#323232]'
											onClick={decreaseTypeCount}>
											Daha az
										</p>
									) : (
										<p
											className='cursor-pointer text-[#323232]'
											onClick={increaseTypeCount}>
											Hamısını göstər
										</p>
									)}
								</div>
							)}
						</div>

						{/* <div className='category border-solid border-y-[1px] border-gray-200 p-5'>
							<div className='flex justify-between'>
								<h4>Reytinq</h4>
								<FaPlus />
								<FaMinus />
							</div>
							<div className='flex flex-col gap-3 mt-4'>
								2+
							</div>
						</div> */}
					</div>

					<div className='w-[100%] mx-auto lg:col-span-3'>
						<div>
							<div className='w-[100%] mx-auto max-w-2xl px-4 py-3 sm:px-6 lg:max-w-7xl lg:px-8'>
								<div className='bg-[#F3F3F3] p-4 grid grid-cols-1 gap-x-1 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 sm:gap-x-5'>
									{selectedBrands.length > 0
										? // console.log(
										  selectedBrands.flatMap((brand) =>
												// console.log(brand)

												// console.log(
												data
													.filter(
														(item) =>
															// console.log(item)
															// console.log(type)

															item.characteristics.type === type &&
															item.brand === brand &&
															item.price > minValue &&
															item.price < maxValue
													)
													// )
													.sort((a, b) => {
														console.log('Sorting:', a, b);
														if (select == 1) {
															return a.name.localeCompare(b.name);
														} else if (select == 2) {
															return Number(a.price) - Number(b.price);
														} else if (select == 3) {
															return Number(b.price) - Number(a.price);
														}
													})
													.map((product, index) => (
														<div className='flex flex-col w-[100%] h-[105%] bg-white rounded-lg px-4 pt-2 group'>
															<Link
																to={`/productInfo/${product.id}`}
																onMouseEnter={() => setHoveredItem(index)}
																onMouseLeave={() => setHoveredItem(null)}
																// onMouseEnter={() => setScaleUp(true)}
																// onMouseLeave={() => setScaleUp(false)}
																// className='flex flex-col w-[300px] h-[500px] bg-white rounded-lg px-4 group relative'
																key={product.id}>
																<img
																	alt={product.name}
																	src={product.imageUrl}
																	className='aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80'
																/>
																<h3 className='text-[14px] font-[500] mb-7 mt-5'>
																	{product.name}
																</h3>
																<p className='text-[12px] bg-[#ff003c] mb-4 text-white font-[500] w-[26%] p-1 text-center rounded-md'>
																	{product.price > product.oldPrice
																		? -(
																				product.price - product.oldPrice
																		  ).toFixed(2)
																		: (-(
																				product.oldPrice - product.price
																		  )).toFixed(2) + '₼'}
																</p>
																<h3 className='text-[#777] font-[500] text-[13px]'>
																	<del>
																		{product.price > product.oldPrice
																			? product.price
																			: product.oldPrice + ' ₼'}
																	</del>
																</h3>
																<div className='flex justify-between'>
																	<h3 className='text-[#ff003c] font-[700] text-[16px] '>
																		{product.price > product.oldPrice
																			? product.oldPrice
																			: product.price + ' ₼'}
																	</h3>
																	<p className='font-[600] text-[12px] text-[#323232]'>
																		0% 12 ay
																	</p>
																</div>
															</Link>
															{hoveredItem == index && (
																<div
																	onMouseEnter={() => setHoveredItem(index)}
																	onMouseLeave={() => setHoveredItem(null)}
																	// onMouseEnter={() => setScaleUp(true)}
																	// onMouseLeave={() => setScaleUp(false)}
																	className='flex items-center justify-center gap-3 bg-white pt-5 pb-0
																	 w-[276px] mx-auto'>
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
																		onClick={() => addBasket(product.id)}
																		className='flex gap-4 text-white bg-[#ff003c] p-3 justify-center items-center text-center rounded-xl font-[550] text-[12px]'>
																		<SlBasket
																			size={20}
																			style={{
																				cursor: 'pointer',
																				fil: 'white',
																			}}
																		/>{' '}
																		Səbətə at
																	</button>
																</div>
															)}
														</div>
													))
										  )
										: //   )
										  data
												.filter(
													(item) =>
														item.characteristics.type == type &&
														item.price > minValue &&
														item.price < maxValue
												)
												.sort((a, b) => {
													if (select == 1) {
														return a.name.localeCompare(b.name);
													} else if (select == 2) {
														return a.price - b.price;
													} else if (select == 3) {
														return b.price - a.price;
													}
												})
												.map((product, index) => (
													<div className='flex flex-col w-[100%] h-[105%] bg-white rounded-lg px-4 pt-2 group'>
														<Link
															to={`/productInfo/${product.id}`}
															onMouseEnter={() => setHoveredItem(index)}
															onMouseLeave={() => setHoveredItem(null)}
															// onMouseEnter={() => setScaleUp(true)}
															// onMouseLeave={() => setScaleUp(false)}
															// className='flex flex-col w-[300px] h-[500px] bg-white rounded-lg px-4 group relative'
															key={product.id}>
															<img
																alt={product.name}
																src={product.imageUrl}
																className='aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80'
															/>
															<h3 className='text-[14px] font-[500] mb-7 mt-5'>
																{product.name}
															</h3>
															<p className='text-[12px] bg-[#ff003c] mb-4 text-white font-[500] w-[26%] p-1 text-center rounded-md'>
																{product.price > product.oldPrice
																	? -(product.price - product.oldPrice).toFixed(
																			2
																	  )
																	: (-(
																			product.oldPrice - product.price
																	  )).toFixed(2) + '₼'}
															</p>
															<h3 className='text-[#777] font-[500] text-[13px]'>
																<del>
																	{product.price > product.oldPrice
																		? product.price
																		: product.oldPrice + ' ₼'}
																</del>
															</h3>
															<div className='flex justify-between'>
																<h3 className='text-[#ff003c] font-[700] text-[16px] '>
																	{product.price > product.oldPrice
																		? product.oldPrice
																		: product.price + ' ₼'}
																</h3>
																<p className='font-[600] text-[12px] text-[#323232]'>
																	0% 12 ay
																</p>
															</div>
														</Link>
														{hoveredItem == index && (
															<div
																onMouseEnter={() => setHoveredItem(index)}
																onMouseLeave={() => setHoveredItem(null)}
																// onMouseEnter={() => setScaleUp(true)}
																// onMouseLeave={() => setScaleUp(false)}
																className='flex items-center justify-center gap-3 bg-white pt-5 pb-0
																 w-[276px] mx-auto'>
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
																	onClick={() => addBasket(product.id)}
																	className='flex gap-4 text-white bg-[#ff003c] p-3 justify-center items-center text-center rounded-xl font-[550] text-[12px]'>
																	<SlBasket
																		size={20}
																		style={{ cursor: 'pointer', fil: 'white' }}
																	/>{' '}
																	Səbətə at
																</button>
															</div>
														)}
													</div>
												))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{basketOpenLoginSidebar && (
				<LoginSidebar closeLoginSidebar={closeLoginSidebar} />
			)}
		</div>
	);
}

export default Products;

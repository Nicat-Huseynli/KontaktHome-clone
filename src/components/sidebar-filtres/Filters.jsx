// import React, { useEffect, useState, createContext, useContext } from 'react';
// import { VscSettings } from 'react-icons/vsc';
// import { FaPlus, FaMinus } from 'react-icons/fa6';
// import DoubleRangeSlider from '../price-range/DoubleRangeSlider';
// import axios from 'axios';

// function Filters({ type }) {
// 	const [data, setData] = useState([]);

// 	// const [categories, setCategories] = useState([]);

// 	// useEffect(() => {
// 	// 	axios.get('http://localhost:3000/categories').then((res) => {
// 	// 		setCategories(res.data);
// 	// 	});
// 	// });

// 	const [typeOfProducts, setTypeOfProducts] = useState([]);

// 	useEffect(() => {
// 		axios.get(`http://localhost:3000/products`).then((response) => {
// 			setData(response.data);

// 			const types = [
// 				...new Set(response.data.map((item) => item.characteristics.type)),
// 			];
// 			setTypeOfProducts(types);
// 		});
// 	}, []);

// 	// More button
// 	const [typeCount, setTypeCount] = useState(10);

// 	const increaseTypeCount = () => setTypeCount(typeOfProducts.length);

// 	const decreaseTypeCount = () => setTypeCount(10);

// 	// Open and close
// 	const [openManufacturer, setOpenManufacturer] = useState(true);

// 	const triggerManufacturer = () => setOpenManufacturer(!openManufacturer);

// 	const [openCategory, setOpenCategory] = useState(true);

// 	const triggerCategory = () => setOpenCategory(!openCategory);

// 	const [openPrice, setOpenPrice] = useState(true);

// 	const triggerPrice = () => setOpenPrice(!openPrice);

// 	// Selected Brand

// 	const [brand, setBrand] = useState(null);

// 	const handleBrand = (brand) => {
// 		setBrand(brand);
// 	};

// 	return (
// 		<div className='w-[20%] bg-white rounded-lg mt-6'>
// 			<div className='header flex items-center justify-between p-4'>
// 				<h3>Filtr</h3>
// 				<VscSettings size={22} />
// 			</div>

// 			<div className='price border-solid border-y-[1px] border-gray-200 p-5'>
// 				<div
// 					onClick={triggerPrice}
// 					className='flex justify-between cursor-pointer'>
// 					<h4>Qiymət</h4>

// 					{openPrice ? <FaMinus /> : <FaPlus />}
// 				</div>

// 				{openPrice && <DoubleRangeSlider />}

// 				{/* <div className='flex flex-col gap-5'>
// 					<div className='flex items-center gap-1 mt-5'>
// 						<input
// 							type='text'
// 							className='bg-[#F3F3F3] w-[50%] p-2 rounded-lg'
// 						/>
// 						<span className='text-gray-300'>-</span>
// 						<input
// 							type='text'
// 							className='bg-[#F3F3F3] w-[50%] p-2 rounded-lg'
// 						/>
// 					</div>
// 					<DoubleRangeSlider />
// 				</div> */}
// 			</div>

// 			<div className='manufacturer border-solid border-y-[1px] border-gray-200 p-5'>
// 				<div
// 					onClick={triggerManufacturer}
// 					className='flex justify-between cursor-pointer'>
// 					<h4>İstehsalçı</h4>

// 					{openManufacturer ? <FaMinus /> : <FaPlus />}
// 				</div>

// 				{openManufacturer && (
// 					<div className='flex flex-col gap-3 mt-4'>
// 						{data
// 							.filter((item) => item.characteristics.type == type)
// 							.map((item) => {
// 								return (
// 									<div key={item.id} className='flex gap-2'>
// 										<input
// 											type='checkbox'
// 											id={item.brand}
// 											className='w-[18px] h-[18px]'
// 											onChange={() => handleBrand(item.brand)}
// 										/>
// 										<label
// 											htmlFor={item.brand}
// 											className='text-[16px] text-[#323232] cursor-pointer'>
// 											{item.brand}
// 										</label>
// 									</div>
// 								);
// 							})}
// 					</div>
// 				)}
// 			</div>

// 			<div className='category border-solid border-y-[1px] border-gray-200 p-5'>
// 				<div
// 					onClick={triggerCategory}
// 					className='flex justify-between cursor-pointer'>
// 					<h4>Kateqoriya</h4>
// 					{openCategory ? <FaMinus /> : <FaPlus />}
// 				</div>

// 				{openCategory && (
// 					<div className='flex flex-col gap-3 mt-4'>
// 						{typeOfProducts.slice(0, typeCount).map((item, index) => {
// 							return (
// 								<div key={index} className='flex items-center gap-2'>
// 									<input
// 										type='checkbox'
// 										id={item}
// 										className='w-[18px] h-[18px]'
// 										checked={item === type}
// 										// onChange={() => {}}
// 									/>
// 									<label
// 										htmlFor={item}
// 										className='text-[16px] text-[#323232] cursor-pointer'>
// 										{item}
// 									</label>
// 								</div>
// 							);
// 						})}

// 						{typeCount === typeOfProducts.length ? (
// 							<p
// 								className='cursor-pointer text-[#323232]'
// 								onClick={decreaseTypeCount}>
// 								Daha az
// 							</p>
// 						) : (
// 							<p
// 								className='cursor-pointer text-[#323232]'
// 								onClick={increaseTypeCount}>
// 								Hamısını göstər
// 							</p>
// 						)}
// 					</div>
// 				)}
// 			</div>

// 			{/* <div className='category border-solid border-y-[1px] border-gray-200 p-5'>
// 				<div className='flex justify-between'>
// 					<h4>Reytinq</h4>
// 					<FaPlus />
// 					<FaMinus />
// 				</div>
// 				<div className='flex flex-col gap-3 mt-4'>
// 					2+
// 				</div>
// 			</div> */}
// 		</div>
// 	);
// }

// export default Filters;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoMdHeartEmpty } from 'react-icons/io';
import LoginSidebar from '../login-sidebar/LoginSidebar';

function Telefoniya() {
	const [data, setData] = useState([]);
	const [typeOfProducts, setTypeOfProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:3000/categories`).then((response) => {
			setCategory(response.data);
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		axios.get(`http://localhost:3000/products`).then((response) => {
			setData(response.data);
			setLoading(false);

			const types = [
				...new Set(
					response.data
						.filter((item) => item.categoryId == id)
						.map((item) => item.characteristics.type)
				),
			];
			setTypeOfProducts(types);
		});
	}, []);

	const [hoveredItem, setHoveredItem] = useState(null);

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

	return (
		<div className=' bg-[#F3F3F3]'>
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
			<div className=' py-1'>
				<header className=' flex flex-col w-[100%]'>
					<div className='px-5 my-0 flex flex-wrap gap-2 mt-6 w-[100%]'>
						{typeOfProducts.map((type, index) => {
							return (
								<Link
									key={index}
									to={`/telefoniya/type/${type}`}
									className='bg-white p-7 rounded-lg'>
									<h2>{type}</h2>
								</Link>
							);
						})}
					</div>
				</header>

				<main className=' ps-6 my-8 w-[100%]'>
					<h3 className='font-[600] text-[20px]'>Top satılanlar</h3>

					<div
						className='flex gap-2 mt-8 overflow-x-scroll overflow-y-hidden 
						[&::-webkit-scrollbar]:w-1
						[&::-webkit-scrollbar]:h-2
						[&::-webkit-scrollbar-track]:rounded-full
						[&::-webkit-scrollbar-thumb]:rounded-full
						dark:[&::-webkit-scrollbar-track]:bg-neutral-300
						dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800'>
						{data
							.filter((item) => item.categoryId == id)
							.slice(2, 9)
							.map((item, index) => (
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
											<h3 className='text-[14px] font-[500] mb-7'>
												{item.name}
											</h3>
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
												Səbətə at
											</button>
										</div>
									)}
								</div>
							))}
					</div>
				</main>
			</div>
			{basketOpenLoginSidebar && (
				<LoginSidebar closeLoginSidebar={closeLoginSidebar} />
			)}
		</div>
	);
}

export default Telefoniya;

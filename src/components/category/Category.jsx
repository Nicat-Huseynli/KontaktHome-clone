import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';

import beauty from '../../assets/images/category-icons/beauty.svg';
import furniture from '../../assets/images/category-icons/furniture.svg';
import gamer from '../../assets/images/category-icons/gamer.svg';
import hobby from '../../assets/images/category-icons/hobby.svg';
import homeElectronic from '../../assets/images/category-icons/home-electronic.svg';
import kitchen from '../../assets/images/category-icons/kitchen.svg';
import notebook from '../../assets/images/category-icons/notebook.svg';
import phone from '../../assets/images/category-icons/phone.svg';
import tvAudio from '../../assets/images/category-icons/tv-audio.svg';
import watch from '../../assets/images/category-icons/watch.svg';
import { useTranslation } from 'react-i18next';

function Category({ showCategory }) {
	const { t, i18n } = useTranslation();

	// const changeLanguage = (lang) => {
	// 	// localStorage.setItem("lang", lang);
	// 	i18n.changeLanguage(lang); // Switch language
	// };

	const [loading, setLoading] = useState(true);
	// const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/categories').then((response) => {
			setCategories(response.data);
			setLoading(false);
		});
	}, []);

	// Show Categories
	const [showCategories, setShowCategories] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('');

	const openCategory = (category) => {
		setShowCategories(true);
		setSelectedCategory(category);
	};

	// Type of products
	const [data, setData] = useState([]);
	const [typeOfProducts, setTypeOfProducts] = useState([]);
	const [brands, setBrand] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/products').then((response) => {
			setData(response.data);
			setLoading(false);

			const types = [
				...new Set(response.data.map((item) => item.characteristics.type)),
			];
			setTypeOfProducts(types);

			const brands = [...new Set(response.data.map((item) => item.brand))];
			setBrand(brands);
		});
	}, []);

	// Translate category to the English language
	const translateToEng = (category) => {
		switch (category) {
			case 'Smartfonlar və aksessuarlar':
				return 'Phones';
			case 'Smart qadjetlər':
				return 'Smart Watches';
			case 'Notbuklar, PK, planşetlər':
				return 'Notebooks and Tablets';
			case 'Geymerlər üçün məhsullar':
				return 'For Gamers';
			case 'TV, audio və foto':
				return 'TV & Audio';
			case 'Mətbəx texnikası':
				return 'Kitchen Electronics';
			case 'Ev texnikası':
				return 'Home Electronics';
			case 'Hobbi və əyləncə':
				return 'Hobby';
			case 'Mebel və tekstil':
				return 'Furniture';
			case 'Ev və bağ':
				return 'Home and Garden';

			default:
				break;
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

	// Type of products
	// const [typeOfProducts, setTypeOfProducts] = useState([])

	// useEffect(() => {
	// 	axios.get()
	// })

	const refreshPage = () => {
		location.reload();
	};

	const pageLang = localStorage.getItem('i18nextLng');

	return (
		<div
			className={`h-[90vh] overflow-hidden lg:block md:block ${
				showCategory ? 'sm:block max-sm:block' : 'sm:hidden max-sm:hidden'
			} `}>
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
			<aside className='bg-white flex w-[300px] h-[85vh] p-5 rounded-lg'>
				<ul className='flex flex-col w-[100%] gap-4 '>
					{categories.map((category) => {
						return (
							<li onClick={refreshPage}>
								<Link
									to={`/telefoniya/${category.id}`}
									onMouseEnter={() =>
										openCategory(translateToAze(category.name))
									}
									onMouseLeave={() => setShowCategories(false)}
									className='flex items-center gap-3 text-[#323232] lg:text-[14px] md:text-[12px] font-[500] group hover:text-[#ff003c]'>
									<img src={category.imageUrl} alt={category.name} />
									<p className=' group-hover:text-[#ff003c]'>
										{pageLang == 'en'
											? category.name
											: (pageLang == 'ru'
											? translateToRu(category.name)
											: translateToAze(category.name))}
									</p>
									<SlArrowRight className='text-gray-300 group-hover:text-[#ff003c] lg:size-3 md:size-9 ml-auto' />
								</Link>
							</li>
						);
					})}
				</ul>
			</aside>
			{showCategories && (
				<div
					onMouseEnter={() => setShowCategories(true)}
					onMouseLeave={() => setShowCategories(false)}
					className='p-5 bg-white absolute top-[149px] lg:left-[310px] md:left-[200px] z-[7000] h-[85vh] w-[77%]'>
					<p>
						{categories.map((category) => {
							if (translateToEng(selectedCategory) === category.name) {
								return (
									<div key={category.id} className='flex flex-wrap gap-12'>
										{typeOfProducts.map((type) => {
											const filteredBrands = brands.filter((brand) => {
												return data.some(
													(item) =>
														item.categoryId === category.id &&
														item.characteristics.type === type &&
														item.brand === brand
												);
											});

											if (filteredBrands.length > 0) {
												return (
													<ul onClick={refreshPage} key={type} className='pt-2'>
														<Link to={`/telefoniya/type/${type}`}>
															<h3 className='font-[600] text-[14px] hover:text-[#ff003c] cursor-pointer'>
																{type}
															</h3>
														</Link>
														{filteredBrands.map((brand) => (
															<Link
																key={brand}
																to={`/telefoniya/brand/${brand}`}>
																<li className='text-[#777] text-[14px] mt-3 hover:text-[#ff003c] cursor-pointer'>
																	{brand}
																</li>
															</Link>
														))}
														<br />
													</ul>
												);
											}

											return null;
										})}
									</div>
								);
							}
							return null;
						})}
					</p>
				</div>
			)}
		</div>
	);
}

export default Category;

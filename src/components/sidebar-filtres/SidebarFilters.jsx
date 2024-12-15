import { useEffect, useState } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { SlBasket } from 'react-icons/sl';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoMdHeartEmpty } from 'react-icons/io';
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from '@heroicons/react/20/solid';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const sortOptions = [
	{ name: 'Məhsul adı', href: '#', current: false },
	{ name: 'Ucuzdan bahaya', href: '#', current: false },
	{ name: 'Bahadan ucuza', href: '#', current: false },
	{ name: 'Öncə yeniliklər', href: '#', current: false },
];
// const subCategories = [
//   { name: 'Totes', href: '#' },
//   { name: 'Backpacks', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' },
// ]

// const filters = [
//   {
//     id: 'color',
//     name: 'Color',
//     options: [
//       { value: 'white', label: 'White', checked: false },
//       { value: 'beige', label: 'Beige', checked: false },
//       { value: 'blue', label: 'Blue', checked: true },
//       { value: 'brown', label: 'Brown', checked: false },
//       { value: 'green', label: 'Green', checked: false },
//       { value: 'purple', label: 'Purple', checked: false },
//     ],
//   },
//   {
//     id: 'category',
//     name: 'Category',
//     options: [
//       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//       { value: 'sale', label: 'Sale', checked: false },
//       { value: 'travel', label: 'Travel', checked: true },
//       { value: 'organization', label: 'Organization', checked: false },
//       { value: 'accessories', label: 'Accessories', checked: false },
//     ],
//   },
//   {
//     id: 'size',
//     name: 'Size',
//     options: [
//       { value: '2l', label: '2L', checked: false },
//       { value: '6l', label: '6L', checked: false },
//       { value: '12l', label: '12L', checked: false },
//       { value: '18l', label: '18L', checked: false },
//       { value: '20l', label: '20L', checked: false },
//       { value: '40l', label: '40L', checked: true },
//     ],
//   },
// ]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function SidebarFilters() {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	const [data, setData] = useState([]);

	const { type } = useParams();
	// console.log(data)
	console.log('Type from URL:', type);
	useEffect(() => {
		axios
			.get(`http://localhost:3000/products`)
			.then((res) => setData(res.data));
	}, []);

	const [hoveredItem, setHoveredItem] = useState(null);
	console.log(data);

	return (
		<div className='bg-white'>
			<div>
				{/* Mobile filter dialog */}
				<Dialog
					open={mobileFiltersOpen}
					onClose={setMobileFiltersOpen}
					className='relative z-40 lg:hidden'>
					<DialogBackdrop
						transition
						className='fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0'
					/>

					<div className='fixed inset-0 z-40 flex'>
						<DialogPanel
							transition
							className='relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full'>
							<div className='flex items-center justify-between px-4'>
								<h2 className='text-lg font-medium text-gray-900'>Filters</h2>
								<button
									type='button'
									onClick={() => setMobileFiltersOpen(false)}
									className='-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'>
									<span className='sr-only'>Close menu</span>
									<XMarkIcon aria-hidden='true' className='size-6' />
								</button>
							</div>

							{/* Filters */}
							<form className='mt-4 border-t border-gray-200'>
								{/* <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul> */}

								{data
									.filter((item) => item.characteristics.type == type)
									.map((section) => (
										<Disclosure
											key={section.id}
											as='div'
											className='border-t border-gray-200 px-4 py-6'>
											<h3 className='-mx-2 -my-3 flow-root'>
												<DisclosureButton className='group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
													<span className='font-medium text-gray-900'>
														{section.name}
													</span>
													<span className='ml-6 flex items-center'>
														<PlusIcon
															aria-hidden='true'
															className='size-5 group-data-[open]:hidden'
														/>
														<MinusIcon
															aria-hidden='true'
															className='size-5 [.group:not([data-open])_&]:hidden'
														/>
													</span>
												</DisclosureButton>
											</h3>
											<DisclosurePanel className='pt-6'>
												{/* <div className='space-y-6'>
												{section.options.map((option, optionIdx) => (
													<div key={option.value} className='flex gap-3'>
														<div className='flex h-5 shrink-0 items-center'>
															<div className='group grid size-4 grid-cols-1'>
																<input
																	defaultValue={option.value}
																	id={`filter-mobile-${section.id}-${optionIdx}`}
																	name={`${section.id}[]`}
																	type='checkbox'
																	className='col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto'
																/>
																<svg
																	fill='none'
																	viewBox='0 0 14 14'
																	className='pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25'>
																	<path
																		d='M3 8L6 11L11 3.5'
																		strokeWidth={2}
																		strokeLinecap='round'
																		strokeLinejoin='round'
																		className='opacity-0 group-has-[:checked]:opacity-100'
																	/>
																	<path
																		d='M3 7H11'
																		strokeWidth={2}
																		strokeLinecap='round'
																		strokeLinejoin='round'
																		className='opacity-0 group-has-[:indeterminate]:opacity-100'
																	/>
																</svg>
															</div>
														</div>
														<label
															htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
															className='min-w-0 flex-1 text-gray-500'>
															{option.label}
														</label>
													</div>
												))}
											</div> */}
											</DisclosurePanel>
										</Disclosure>
									))}
							</form>
						</DialogPanel>
					</div>
				</Dialog>

				<main className=' px-4 sm:px-6 lg:px-8'>
					<div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10'>
						<h1 className='text-[20px] font-[600] tracking-tight text-gray-900'>
							{type}
						</h1>

						<div className='flex items-center'>
							<Menu as='div' className='relative inline-block text-left'>
								<div>
									<MenuButton className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
										Sıralama
										<ChevronDownIcon
											aria-hidden='true'
											className='-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500'
										/>
									</MenuButton>
								</div>

								<MenuItems
									transition
									className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
									<div className='py-1'>
										{sortOptions.map((option) => (
											<MenuItem key={option.name}>
												<a
													href={option.href}
													className={classNames(
														option.current
															? 'font-medium text-gray-900'
															: 'text-gray-500',
														'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none'
													)}>
													{option.name}
												</a>
											</MenuItem>
										))}
									</div>
								</MenuItems>
							</Menu>

							<button
								type='button'
								className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'>
								<span className='sr-only'>View grid</span>
								<Squares2X2Icon aria-hidden='true' className='size-5' />
							</button>
							<button
								type='button'
								onClick={() => setMobileFiltersOpen(true)}
								className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'>
								<span className='sr-only'>Filters</span>
								<FunnelIcon aria-hidden='true' className='size-5' />
							</button>
						</div>
					</div>

					<section aria-labelledby='products-heading' className='pb-24 pt-6'>
						<h2 id='products-heading' className='sr-only'>
							Products
						</h2>

						<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
							{/* Filters */}
							<form className='hidden lg:block'>
								{/* <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

								{data
									.filter((item) => item.characteristics.type == type)
									.map((section) => (
										<Disclosure
											key={section.id}
											as='div'
											className='border-b border-gray-200 py-6'>
											<h3 className='-my-3 flow-root'>
												<DisclosureButton className='group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
													<span className='font-medium text-gray-900'>
														{/* {section.brand} */}
														Brand
													</span>
													<span className='ml-6 flex items-center'>
														<PlusIcon
															aria-hidden='true'
															className='size-5 group-data-[open]:hidden'
														/>
														<MinusIcon
															aria-hidden='true'
															className='size-5 [.group:not([data-open])_&]:hidden'
														/>
													</span>
												</DisclosureButton>
											</h3>
											<DisclosurePanel className='pt-6'>
												<div className='space-y-4'>
													{data.filter((item) => item.characteristics.type == type).map((option, optionIdx) => (
														<div key={optionIdx} className='flex gap-3'>
															<div className='flex h-5 shrink-0 items-center'>
																<div className='group grid size-4 grid-cols-1'>
																	<input
																		// defaultValue={option.value}
																		// defaultChecked={option.checked}
																		id={`filter-${section.id}-${optionIdx}`}
																		name={`${section.id}[]`}
																		type='checkbox'
																		className='col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto'
																	/>
																	<svg
																		fill='none'
																		viewBox='0 0 14 14'
																		className='pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25'>
																		<path
																			d='M3 8L6 11L11 3.5'
																			strokeWidth={2}
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			className='opacity-0 group-has-[:checked]:opacity-100'
																		/>
																		<path
																			d='M3 7H11'
																			strokeWidth={2}
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			className='opacity-0 group-has-[:indeterminate]:opacity-100'
																		/>
																	</svg>
																</div>
															</div>
															<label
																htmlFor={`filter-${section.id}-${optionIdx}`}
																className='text-sm text-gray-600'>
																{option.brand}
															</label>
														</div>
													))}
												</div>
											</DisclosurePanel>
										</Disclosure>
									))}
							</form>

							{/* Product grid */}
							<div className='lg:col-span-3'>
								<div className='bg-white'>
									<div className='mx-auto max-w-2xl px-4 py-3 sm:px-6 lg:max-w-7xl lg:px-8'>
										<div className='bg-[#F3F3F3] p-4 grid grid-cols-1 gap-x-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-1'>
											{data
												.filter((item) => item.characteristics.type == type)
												.map((product, index) => (
													<Link
														to={`/productInfo/${product.id}`}
														onMouseEnter={() => setHoveredItem(index)}
														onMouseLeave={() => setHoveredItem(null)}
														// onMouseEnter={() => setScaleUp(true)}
														// onMouseLeave={() => setScaleUp(false)}
														className='flex flex-col w-[300px] h-[500px] bg-white rounded-lg px-4 group relative'
														key={product.id}>
														<img
															alt={product.name}
															src={product.imageUrl}
															className='aspect-square w-full rounded-md  object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80'
														/>
														<h3 className='text-[14px] font-[500] mb-7'>
															{product.name}
														</h3>
														<p className='text-[12px] bg-[#ff003c] mb-4 text-white font-[500] w-[26%] p-1 text-center rounded-md'>
															{product.price > product.oldPrice
																? -(product.price - product.oldPrice).toFixed(2)
																: (-(product.oldPrice - product.price)).toFixed(
																		2
																  ) + '₼'}
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
														{/* <div className='mt-4 flex justify-between'>
														<div>
															<h3 className='text-sm text-gray-700'>
																<a href={product.href}>
																	<span
																		aria-hidden='true'
																		className='absolute inset-0'
																	/>
																	{product.name}
																</a>
															</h3>
															<p className='mt-1 text-sm text-gray-500'>
																{product.color}
															</p>
														</div>
														<p className='text-sm font-medium text-gray-900'>
															{product.price}
														</p>
													</div> */}

														{hoveredItem == index && (
															<div
																onMouseEnter={() => setHoveredItem(index)}
																onMouseLeave={() => setHoveredItem(null)}
																// onMouseEnter={() => setScaleUp(true)}
																// onMouseLeave={() => setScaleUp(false)}
																className='flex items-center justify-center gap-3 bg-white pt-8 pb-6'>
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
																<button className='flex gap-4 text-white bg-[#ff003c] p-3 justify-center items-center text-center rounded-xl font-[550] text-[12px]'>
																	<SlBasket
																		size={20}
																		style={{ cursor: 'pointer', fil: 'white' }}
																	/>{' '}
																	Səbətə at
																</button>
															</div>
														)}
													</Link>
												))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

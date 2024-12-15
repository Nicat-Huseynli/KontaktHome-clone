import React from 'react';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import SidebarFilters from '../sidebar-filtres/sidebarFilters';

function Smartphones() {
	return (
		<div className='bg-[#F3F3F3] p-4'>
			{/* <header className='container bg-white flex items-center justify-between px-8'>
				<h2 className='font-[600] text-[20px] py-5'>Smartfonlar</h2>

				<Menu as='div' className='relative inline-block text-left'>
					<div>
						<MenuButton className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
							Sıralama
							<ChevronDownIcon
								aria-hidden='true'
								className='-mr-1 size-5 text-gray-400'
							/>
						</MenuButton>
					</div>

					<MenuItems
						transition
						className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
						<div className='py-1'>
							<MenuItem>
								<a
									href='#'
									className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none'>
									Məhsul adı
								</a>
							</MenuItem>
							<MenuItem>
								<a
									href='#'
									className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none'>
									Ucuzdan bahaya
								</a>
							</MenuItem>
							<MenuItem>
								<a
									href='#'
									className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none'>
									Bahadan ucuza
								</a>
							</MenuItem>
							<MenuItem>
								<a
									href='#'
									className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none'>
									Öncə yeniliklər
								</a>
							</MenuItem>
						</div>
					</MenuItems>
				</Menu>
			</header> */}
            <SidebarFilters/>
		</div>
	);
}

export default Smartphones;

import React from 'react';
import { MdClose } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoMdHeartEmpty } from 'react-icons/io';
import { SlBasket } from 'react-icons/sl';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';

function AccountSetting() {
	return (
		<div className='h-[100vh] inset-0'>
			<div className='flex items-center justify-between px-2 py-4'>
				<h3>Hesab və ayarlar</h3>
				<MdClose />
			</div>
			<div className='bg-[#F3f3f3] h-[100vh]'>
				<div className='w-[93%] m-auto pt-3'>
					<button className='text-green-600 bg-white text-[14px] w-[100%] border-2 border-green-600 py-4 px-12 rounded-xl'>
						Aylıq Ödəniş
					</button>

					<div className='flex items-center justify-between px-2'>
						<RiAccountCircleLine className='md:hidden sm:block' size={25} />
						<div className='ms-[-55px]'>
							<h2>Hesaba giriş və Qeydiyyat</h2>
							<p>Şəxsi hesaba keçmək</p>
						</div>
						<FaArrowRightLong />
					</div>

					<div className='felx flex-col'>
						<div className='flex items-center gap-3 px-2'>
							<SlBasket size={23} style={{ cursor: 'pointer' }} />
							<p>Səbət</p>
						</div>
						<div className='flex items-center gap-3 px-2'>
							<IoMdHeartEmpty size={25} style={{ cursor: 'pointer' }} />
							<p>Seçilmişlər</p>
						</div>
						<div className='flex items-center gap-3 px-2'>
							<LiaBalanceScaleSolid size={25} style={{ cursor: 'pointer' }} />
							<p>Müqayisə</p>
						</div>
					</div>

					<div>
						<div className='flex items-center justify-between px-2'>
							<h4>Trade-in</h4>
							<FaArrowRightLong />
						</div>
						<div className='flex items-center justify-between px-2'>
							<h4>Çatdırılma və ödəmə</h4>
							<FaArrowRightLong />
						</div>
						<div className='flex items-center justify-between px-2'>
							<h4>Mağazalar</h4>
							<FaArrowRightLong />
						</div>
						<div className='flex items-center justify-between px-2'>
							<h4>Geri qaytarma siyasəti</h4>
							<FaArrowRightLong />
						</div>
					</div>

					<div className='px-2'>
						<div>
							<h4>
								Əlaqə: <span>*6060</span>
							</h4>
						</div>
						<div>
							<ul className='flex items-center flex-row lg:gap-6 max-sm:gap-3 sm:gap-3 '>
								<a href='https://www.facebook.com/Kontakthome/' target='blank'>
									<FaFacebook size={25} />
								</a>
								<a
									href='https://www.instagram.com/kontakt_home/?hl=en%2F'
									target='blank'>
									<AiFillInstagram size={30} />
								</a>
								<a
									href='https://www.youtube.com/channel/UCf8uNO6TqBobRSWzBl9HPAA'
									target='blank'>
									<FaYoutube size={30} />
								</a>
								<a href='https://t.me/kontakt_az' target='blank'>
									<FaTelegram size={25} />
								</a>
								<a
									href='https://api.whatsapp.com/send/?phone=994102286060&text&type=phone_number&app_absent=0'
									target='blank'>
									<RiWhatsappFill size={25} />
								</a>
								<a href='https://www.tiktok.com/@kontakt_home' target='blank'>
									<FaTiktok size={25} />
								</a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AccountSetting;

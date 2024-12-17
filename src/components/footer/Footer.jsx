import React from 'react';
import '../footer/footer.css';
import { Link } from 'react-router-dom';
import { RiVisaLine } from 'react-icons/ri';
import { RiMastercardFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';
import { PiCopyright } from 'react-icons/pi';
import lifeChat from '../../assets/images/lifechat-konsult.svg';
import { useTranslation } from 'react-i18next';

function Footer() {
	const { t, i18n } = useTranslation();

	return (
		<div>
			<footer className='bg-white py-12 relative'>
				<div className='flex justify-around md:flex-row max-sm:flex-col sm:flex-col max-sm:px-5 sm:px-5 '>
					<div className='flex items-center justify-between md:flex-col max-sm:flex-row sm:flex-row'>
						<h3 className='md:block max-sm:hidden sm:hidden'>
							{t('contactFirst')}
						</h3>
						<ul className='flex justify-center md:flex-col max-sm:flex-row sm:flex-row'>
							<Link
								to={'tel:*6060'}
								className='text-[#17a539] font-[700] text-[14px]'>
								*6060
							</Link>
							<Link to={'/stores'}>{t('map')}</Link>
						</ul>
						<div className='flex lg:gap-6 max-sm:gap-3 sm:gap-3'>
							<RiVisaLine size={35} /> <RiMastercardFill size={32} />
						</div>
					</div>
					<div>
						<h3 className='max-sm:my-4 sm:my-4 md:mt-0 md:mb-7'>Kontakt</h3>
						<ul className='text-[#777] grid md:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 gap-2'>
							<Link to={'/about-company'}>{t('aboutCompany')}</Link>
							<Link>{t('career')}</Link>
							<Link>{t('qarabagProgram')}</Link>
							<Link>{t('contactVideo')}</Link>
						</ul>
					</div>
					<div>
						<h3 className='max-sm:my-4 sm:my-4 md:mt-0 md:mb-7'>{t('info')}</h3>
						<ul className='text-[#777] grid md:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 gap-2'>
							<Link>{t('privacyPolicy')}</Link>
							<Link>{t('pricingPolicy')}</Link>
							<Link>{t('complaintManagementPolicy')}</Link>
							<Link>{t('termsOfUse')}</Link>
							<Link to='/guarantee-best-price'>{t('bestPriceGuarantee')}</Link>
						</ul>
					</div>
					<div>
						<h3 className='max-sm:my-4 sm:my-4 md:mt-0 md:mb-7'>
							{t('forCustomers')}
						</h3>
						<ul className='text-[#777] grid md:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 gap-2'>
							<Link to='/trade-in'>{t('tradeIn')}</Link>
							<Link to='/delivery-payment'>{t('deliveryAndPayment')}</Link>
							<Link>{t('installmentPaymentTerms')}</Link>
							<Link>{t('returnPolicy')}</Link>
							<Link>{t('ultraGoldGuarantee')}</Link>
							<Link>{t('monthlyPaymentsProcessing')}</Link>
						</ul>
					</div>
					<div>
						<h3 className='max-sm:my-4 sm:my-4 md:mt-0 md:mb-7'>
							{t('stayUs')}
						</h3>
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
			</footer>

			<div className='bg-[#F3F3F3] flex justify-center items-center py-4 gap-1 text-[14px] text-[500]'>
				<PiCopyright size={12} /> Kontakt Home 2024
			</div>

			<div className='fixed bottom-12 right-12 rounded-full z-[9999]'>
				<img src={lifeChat} alt='' />
			</div>
		</div>
	);
}

export default Footer;

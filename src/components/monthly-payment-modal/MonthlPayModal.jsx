import React, { useState, useRef, useEffect } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import epulLogo from '../../assets/images/payments-method/epul_logo.png';
import hesabAzLogo from '../../assets/images/payments-method/hesab_az_logo_new_-1.png';
import milliOnLogo from '../../assets/images/payments-method/MilliOn_logo.png';
import portmanatLogo from '../../assets/images/payments-method/Portmanataz_logo.png';
import '../monthly-payment-modal/monthlyPayModal.css';

function MonthlPayModal({showPaymentModal}) {
	const [paymentModalOpen, setPaymentModalOpen] = useState(true);
    const closePaymentModalRef = useRef(null)



    function handleClosePaymentModal(e){
        if(closePaymentModalRef.current && !closePaymentModalRef.current.contains(e.target)){
            setPaymentModalOpen(true)
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClosePaymentModal)
        return () => {
            window.removeEventListener('mousedown', handleClosePaymentModal)
            
        }
    },[])


	return (
		<Dialog open={paymentModalOpen} onClose={setPaymentModalOpen} className='relative z-10'>
			<DialogBackdrop
				transition
				className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
			/>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					<DialogPanel
						transition
						className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'>
						<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-start'>
								<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
									<DialogTitle as='h3' className='font-semibold text-gray-900'>
										<div className='w-[100%] flex items-center justify-between'>
											<p>Aylıq Ödəniş</p>
                                            <span ref={closePaymentModalRef}>
                                                <IoMdClose onClick={showPaymentModal}
                                                    className='cursor-pointer fill-[#323232]'
                                                    size={24}
                                                />
                                            </span>
										</div>
									</DialogTitle>
									<div className='mt-2 payment-modal'>
										<a
											target='blank'
											href='https://www.million.az/services/ecommerce/KontaktHome'>
											<img src={milliOnLogo} alt='million' />
										</a>
										<a
											target='blank'
											href='https://portmanat.az/project/kontaktHome'>
											<img src={portmanatLogo} alt='portmanat' />
										</a>
										<a
											target='blank'
											href='https://www.e-pul.az/epay/az/category/online_store/kontakthome_r'>
											<img src={epulLogo} alt='epul' />
										</a>
										<a
											target='blank'
											href='https://hesab.az/unregistered/#/direct-pay/store/kontakthome/parameters?portalPay=kontakt&lang=az'>
											<img src={hesabAzLogo} alt='hesabaz' />
										</a>
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}

export default MonthlPayModal;

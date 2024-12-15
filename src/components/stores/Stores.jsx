import React from 'react';
import '../stores/stores.css';

function Stores() {
	return (
		<div className=' bg-[#F3F3F3]'>
			<div className=' pt-4'>
				<header className='m-auto bg-white py-6 px-12 mx-6'>
					<h2 className='text-[20px] font-[600]'>Mağazalarımız</h2>
				</header>

				<div className='w-[97%] m-auto bg-white p-11 mt-8 rounded-xl'>
					<iframe
						className='m-auto w-[100%]'
						src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d232553.02420224543!2d49.785603510312804!3d40.440580912041746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKontakt%20Home!5e0!3m2!1saz!2saz!4v1732564681849!5m2!1saz!2saz'
						height='600'
						style={{ border: 0 }}
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'></iframe>
				</div>

				<main className='stores'>
					<div className='card'>
						<h3>Kontakt "Gənclik Mall"</h3>
						<p>
							Nərimanov r-nu, F. X. Xoyski pr., Gənclik Mall AVM, -1-ci mərtəbə
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 22:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt SMART "28 may metrosu"</h3>
						<p>Nəsimi r-nu, Fizuli küç., 47-55</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt "Vurğun Residence"</h3>
						<p>
							Nəsimi r-nu, S. Vurğun küç., 110 (Bakı Dövlət Sirkisinin yanı)
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt "Dəniz Mall"</h3>
						<p>
							Səbail r., Neftçilər pr., 26 A. (Dəniz Mall-un 4-cü mərtəbəsi)
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 22:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt SMART "Sahil metrosu"</h3>
						<p>
							Səbail r-nu, Ü. Hacıbəyov küç. və Bülbül prospektin kəsişməsi, 207
							saylı məhəllə
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt "Binə"</h3>
						<p>Xəzər r-nu, Binə qəsəbəsi, Əli İsa­z­adə küç.</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt "Masazır"</h3>
						<p>
							Abşeron r., Masazır k., Əliağa vahid küç. ev 145 (Tamstore-un
							yaxınlığı)
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt "Ukrayna dairəsi"</h3>
						<p>Xətai r-u, M. Hadi küç., ev. 2372</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div className='card'>
						<h3>Kontakt "Bakıxanov stansiyası"</h3>
						<p>
							Sabunçu r-nu, Bakıxanov qəs., Yavər Əliyev küç. (Bakıxanov
							stansiyasının yanı)
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt "3-cü mkr dairəsi"</h3>
						<p>Nəsimi r-nu, A. Mustafayev küç., 8</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt "Xalqlar Dostluğu metrosu"</h3>
						<p>Nizami r-nu, Q. Qarayev küç., 125B</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt "Bakıxanov"</h3>
						<p>
							Sabunçu r-nu, Bakıxanov qəs., D. Bünyadzadə və Gənclik küçələrinin
							kəsişməsi
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt "Azadlıq metrosu"</h3>
						<p>Binəqədi r-nu, Binəqədi şosesi, ev 200E, 3123-cü məhəllə</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt "İnşaatçılar metrosu"</h3>
						<p>Yasamal r-nu, A. M. Şərifzadə küç., ev 174, blok 4</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt "Mərdəkan"</h3>
						<p>
							Xəzər r-nu, Mərdəkan qəs., Yesenin küç. 22 (köhnə Makaron
							fabrikinə yaxınlığı)
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt "Nərimanov metrosu"</h3>
						<p>
							Nərimanov r-nu, F. Yusifov küç., 87-89 (Metropark AVM-lə üzbəüz)
						</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>

					<div class='card'>
						<h3>Kontakt SMART "Neftçilər metrosu"</h3>
						<p>Nizami r-u, Q. Qarayev pr., 61</p>
						<div className='flex'>
							<p className='hours'>İş saatları:</p>
							<p> 10:00-dan 21:00-dək</p>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Stores;

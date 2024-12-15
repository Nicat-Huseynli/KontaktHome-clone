import React from 'react';
import '../delivery and payment/deliveryPayment.css';

function DeliveryPayment() {
	return (
		<div className='delivery-payment bg-[#F3F3F3]'>
			<div className='container p-3 px-12'>
				<header className='bg-white py-6 px-4'>
					<h2 className='text-[20px] font-[600]'>Çatdırılma və ödəmə</h2>
				</header>

				<div className='bg-white py-6 px-12 mt-3 rounded-sm mb-12'>
					<p>
						Qeyd olunan ünvana çatdırılma saat 10:00 - 18:00 arasında yerinə
						yetirilir.
					</p>
					<p>
						Çatdırılma, razılaşdırılmış vaxtda göstərilən ünvanda olmağınızı
						məcbur edir. Kuryer yola düşməzdən təxminən bir və ya iki saat əvvəl
						sizinlə əlaqə saxlayacaq.
					</p>
					<p>
						Online qaydada məhsul əldə etmək istəyən müştərinin müraciəti
						rəsmiləşdirildikdən və sifariş təsdiqləndikdən sonra, məhsulun
						çatdırılma vaxtının dəqiqləşdirilməsi üçün müştəri ilə əlaqə
						saxlanılacaq. Əgər müştəri, çatdırılma üçün təklif edilən gündə
						məhsulu təhvil ala bilməyəcəksə müştərinin əldə etmək istədiyi
						məhsul sifarişin təsdiqləndiyi gündən 7 (yeddi) gün ərzində onun
						adına saxlanılacaqdır. Bu müddət bitdikdən sonra müştərinin sifarişi
						ləğv ediləcəkdir. 
					</p> <br />
					<p>
						*Qeyd olunan qayda məhsul üçün ödəniş edilməyən sifarişlərə və bütün
						çatdırılma növlərinə şamil edilir.
					</p>

				<div className='mt-5'>
					<h3 className='font-[600] text-[18px] mb-3'>Sifarişin təhvil verilməsi</h3>
					<p>
						Qeyd edilən ünvana çatdırılma dəhlizlərdə və keçidlərdə heç bir
						maneə olmamaq şərti ilə qeyd etdiyiniz yerlərə yerinə yetirilir.
						Keçidlərin, qapıların, dəhlizlərin, pilləkənlərin eni, hündürlüyü və
						uzunluğu qablaşdırmada olan məhsullardan ən azı 5 santimetr böyük
						olmalıdır.
					</p> <br />
					<p>
						Əgər qeyd etdiyiniz yerdəki şərtlər məhsulların çatdırılmasına mane
						edirsə və ya onları zədələyə bilərsə, məhsullar qeyd edilən ünvana
						ən yaxın olan yerə çatdırılacaqdır. Kuryer ərazini maneələrdən
						təmizləməz, obyektlərin yerini dəyişdirməklə məşğul olmaz.
					</p><br />
				</div>

				<div className='mt-2'>
					<h3 className='font-[600] text-[18px] mb-3'>Planlaşdırılmış çatdırılmanın qiyməti və müddəti</h3>
					<h4 className='font-[600] text-[16px] mb-1'>Çatdırılma müddəti:</h4>
					<p>
						Planlaşdırılmış çatdırılmanın minimal müddəti. Sifariş kiçik
						ölçülüdürsə və iş günü saat 14:30-a qədər verilibsə, məhsullar Bakı
						şəhəri daxilində sifariş günü çatdırıla bilər. Aşağıdakı bölgələr
						istisna olmaqla, planlaşdırılmış çatdırılmanın müddəti 3 iş günüdür.
					</p>

					<h4 className='font-[600] text-[16px] mb-1'>Planlaşdırılmış çatdırılmanın qiyməti:</h4>
					<p>
						Bir sifarişin məbləği 50 AZN-ə qədər olanda 3 AZN təşkil edir.
						Aşağıda göstərilən rayonlar istisna olmaqla, 50 AZN-dən yuxarı olan
						sifarişlər üçün planlaşdırılmış çatdırılma ödənişsizdir.
					</p>

					<h4 className='font-[600] text-[16px] mb-1 text-red-600 mt-3'>Planlaşdırılmış çatdırılmadan istisnalar:</h4>
					<p>a) Sabirabad, Saatlı, İmişli yaşayış məntəqələri üçün:</p>
					<ul>
						<li>
							Rəqəmsal və kiçik məişət texnikasının Azərpoçt vasitəsilə
							çatdırılması pulsuzdur.
						</li>
						<li>
							Böyük məişət texnikasının (BMT) və mebelin kuryerlə çatdırılması
							39.99 AZN təşkil edir.
						</li>
						<li>
							Kombinləşdirilmiş (kiçik məişət texnikası və böyük məişət
							texnikası) məhsulların çatdırılma qiyməti 39.99 AZN təşkil edir.
						</li>
					</ul>

					<h4 className='font-[600] text-[16px] mb-1'>Çatdırılma müddəti:</h4>
					<p>
						Məhsullar Bakı şəhərindəki anbarlarda və ya Bakı, Sumqayıt, Xırdalan
						şəhərlərindəki mağazalarda olduqda çatdırılma müddəti 5 iş günü
						təşkil edir. Əgər məhsul başqa anbar və mağazalardadırsa, çatdırılma
						müddəti 14 gün təşkil edir.
					</p>
				</div>
				</div>

			</div>
		</div>
	);
}

export default DeliveryPayment;

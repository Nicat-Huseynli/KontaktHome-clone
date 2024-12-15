import React from 'react';

function GuaranteeBestPrice() {
	return (
		<div className='delivery-payment bg-[#F3F3F3]'>
			<div className='w-[100%] mt-auto p-3 px-12'>
				<header className='bg-white py-6 px-4'>
					<h2 className='text-[20px] font-[600]'>Ən yaxşı qiymətə zəmanət!</h2>
				</header>

				<div className='bg-white py-6 px-12 mt-3 rounded-sm mb-12'>
					<p>
						İstər smartfon, istər televizor, məişət texnikası, mebel və digər
						məhsullar – fərq etməz, ən yaxşı qiymət bizdədir! Biz qiymətə 100%
						yox, 120% zəmanət veririk!
					</p>
					<p className='font-[600] text-[16px] my-2'>
						“ƏN YAXŞI QİYMƏTƏ ZƏMANƏT” – UNİKAL KAMPANİYASI.
					</p>
					<p>
						Bəli, istənilən məhsulu digər rəsmi şəbəkələrdə daha ucuz tap,
						bizdən qiymət fərqinin 120%-nə endirim eldə et! Əgər
						mağazalarımızdan alış-veriş etməyi planlayırsansa və digər rəsmi
						şəbəkələrin birində – pərakəndə və ya onlayn mağazada həmin məhsulu
						daha ucuz qiymətə tapmısansa, aradakı fərqin 120%-i qədər endirim
						əldə edəcəksən.
					</p>{' '}
					<br />
					<p>
						*Qeyd olunan qayda məhsul üçün ödəniş edilməyən sifarişlərə və bütün
						çatdırılma növlərinə şamil edilir.
					</p>
					<div className='mt-2'>
						<h3 className='font-[600] text-[18px] mb-3'>
							Planlaşdırılmış çatdırılmanın qiyməti və müddəti
						</h3>
						<h4 className='font-[600] text-[16px] mb-1'>Çatdırılma müddəti:</h4>
						<p>
							Planlaşdırılmış çatdırılmanın minimal müddəti. Sifariş kiçik
							ölçülüdürsə və iş günü saat 14:30-a qədər verilibsə, məhsullar
							Bakı şəhəri daxilində sifariş günü çatdırıla bilər. Aşağıdakı
							bölgələr istisna olmaqla, planlaşdırılmış çatdırılmanın müddəti 3
							iş günüdür.
						</p>

						<h4 className='font-[600] text-[16px] mb-1'>
							Planlaşdırılmış çatdırılmanın qiyməti:
						</h4>
						<p>
							Bir sifarişin məbləği 50 AZN-ə qədər olanda 3 AZN təşkil edir.
							Aşağıda göstərilən rayonlar istisna olmaqla, 50 AZN-dən yuxarı
							olan sifarişlər üçün planlaşdırılmış çatdırılma ödənişsizdir.
						</p>

						<p>
							Aşağıdakı şərtlər yerinə yetirildiyi təqdirdə məhsulları digər
							rəsmi şəbəkələrin təklif etdiyi qiymətə əldə olunması mümkündür:
						</p>
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
							Məhsullar Bakı şəhərindəki anbarlarda və ya Bakı, Sumqayıt,
							Xırdalan şəhərlərindəki mağazalarda olduqda çatdırılma müddəti 5
							iş günü təşkil edir. Əgər məhsul başqa anbar və mağazalardadırsa,
							çatdırılma müddəti 14 gün təşkil edir.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GuaranteeBestPrice;

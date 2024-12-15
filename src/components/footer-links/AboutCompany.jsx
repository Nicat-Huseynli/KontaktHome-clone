import React from 'react';
import '../footer-links/aboutCompany.css';
import { Link } from 'react-router-dom';

function AboutCompany() {
	return (
		<div className='about-company bg-[#F3F3F3]'>
			<div className='p-3 px-12'>
				<header className='bg-white py-6 px-4'>
					<h2 className='text-[20px] font-[600]'>Şirkət haqqında</h2>
				</header>

				<main className='bg-white py-6 px-12 mt-3 rounded-sm mb-12'>
					<h2 className='text-[#e03a3a] font-[600] text-[20px]'>Biz kimik?</h2>
					<p>
						Hər bir böyük biznes hekayəsi kimi bizim hekayəmiz də müştəridən,
						yəni səndən başlayır. Sənin istək və ehtiyacların bizim üçün çox
						vacibdir. Əsas məqsədimiz ən yaxşı xidmət göstərməklə səni
						sevindirmək və büdcənə, istəyinə uyğun, düzgün məhsul seçimi etməkdə
						sənə yardımçı olmaqdır. “Kontakt – Sevindirir” ifadəsini də məhz
						bunun üçün özümüzə şüar olaraq seçmişik.
					</p>
					<p>
						Rəqəmsal və məişət texnikası, mebel və tekstil satışı üzrə ölkənin
						ən böyük mağazalar şəbəkəsindən biri kimi səni sevindirmək üçün
						nələr edirik?
					</p>
					<br />
					<strong>Sevilən brendləri sənə daha yaxın gətiririk:</strong>
					<p>
						Biz Samsung, LG, Bosch, Tefal, Huawei, Sony, Panasonic, Delonghi
						Group, Electrolux, Thomas, Beurer, Bang & Olufsen, Karcher, Beko, H
						Gala, Cassore, Schafer, TAÇ, Simge mobilya kimi 40-dan çox
						beynəlxalq brendin rəsmi distribütoru; Oppo, Toshiba, Intel,
						Black&Decker, Hoffmann, Blackview, Kieslect, Etias, Viper, Dark
						Project, Blizzard, SBS, Energy Sistem, Defunc və Urbanista kimi
						beynəlxalq brendlərin Azərbaycanda eksklüziv distribütoru; Apple
						brendinin isə rəsmi satış mərkəziyik.
					</p>
					<p>
						Brend portfeliomuz durmadan böyüyür, odur ki, sevdiyin dünya
						brendlərinin məhsullarını rahatlıqla “Kontakt” mağazalarından əldə
						edə bilərsən.
					</p>
					<br />
					<strong>Axtardığın hər şeyi bir məkana toplamışıq:</strong>
					<p>
						İş, dərs, ev, əyləncə və istirahət üçün arzuladığın məhsulların 30
						000-dən çeşidini eyni məkanda – “Kontakt” mağazalarımızda tapa
						bilərsən. Ünvanlarla <Link to={'/stores'}>buradan</Link> tanış ol.
					</p>
					<br />

					<strong>Sərfəli təkliflər ilə üzünü güldürürük:</strong>
					<p>
						İstər nağd, istərsə də hissəli alış şərtlərini uyğun etməklə,
						istədiyin məhsulları daha rahat əldə etməyə şərait yaradırıq. “Axşam
						bazarı”, “Şeş Qoşa”, “Ən yaxşı qiymətə zəmanət” kimi kampaniyalar
						isə artıq hamının ən sevimli kampaniyalarına çevrilib.
					</p>
					<br />
					<strong>Sənin məmnunluğun üçün əlavə xidmətlər təklif edirik:</strong>
					<p>
						Məhsullarımıza 3 illədək rəsmi zəmanət təqdim edirik. Bütün zəmanət
						müddətində məhsulla bağlı hər hansı çətinliyin yaranarsa, partnyor
						servis mərkəzləri ilə çətinliyini qısa müddətdə aradan qaldırırıq.
						Bundan başqa, rahatlığını düşünərək məhsulun təmirdə olduğu müddətdə
						səni əvəzləyici məhsul ilə təmin edirik. Əgər məhsulun təmiri
						partnyor servis mərkəzlərində 14 gün ərzində yekunlaşmazsa, biz o
						məhsulu sənin üçün tamamilə yenisi ilə əvəz edəcəyik. Bəli, bu qədər
						iddialıyıq.
					</p>
					<br />
					<strong>Sosial öhdəliyimizi yerinə yetiririk:</strong>
					<p>
						Həyata keçirdiyimiz və dəstək olduğumuz sosial məsuliyyət layihələri
						ilə cəmiyyətdə yeni müsbət dəyərlər yaratmağa çalışırıq.
					</p>
					<br />
					<strong>Həmişə əlçatandır:</strong>
					<p>
						Sənə bir zəng qədər yaxınıq. *6060 Çağrı Mərkəzinə zəng edərək
						məhsul və xidmətlərimizlə bağlı bütün suallarını ünvanlaya bilərsən.
						Bizi həmçinin sosial şəbəkələrdə də asanlıqla tapa bilərsən.
					</p>

					<h2>Tariximiz</h2>
					<p>
						Kiçik mağazadan ölkənin ən böyük ritely şəbəkələrindən birinə
						çevrildik. İlk gündən bu yana inkişaf tempimiz sürətlə artdı.
						Məqsədimiz həmişə artan məhsul və xidmətlərimizlə sənə daha çox
						sevinc yaşatmaqdır.
					</p>

					<ul>
						<li>
							2006-cı ildə mobil telefon, aksesuar və mobil nömrələrin satışını
							həyata keçirən ilk kiçik mağaza ilə fəaliyyətə başladıq. Eyni ildə
							daha 3 mağazamızı istifadəyə verdik. İlk mağazalarımızın adı
							“Kontakt Mobile” idi.
						</li>
						<li>
							2010-cu ildə məhsul kateqoriyaları siyahısına kompüter və kamera
							kateqoriyasını, 2011-ci ildə isə məişət texnikasını əlavə etdik və
							şəbəkəmizin adını “Kontakt Electronics” adına dəyişdik.
						</li>
						<li>
							2013-cü ildə mebel kateqoriyasını da əlavə etdik. Nəticədə "Ev"
							konsepsiyası tamamlandı və şəbəkəmiz "Kontakt Home" adlandırıldı.
						</li>
						<li>
							2020-ci ildə rebrending prosesi ərzəsində şəbəkənin adı “Kontakt
							Home”dan “Kontakt”a dəyişdirildi. “Home” və “Smart” hissəcikləri
							yalnız mağaza konsepti olaraq saxlanıldı.
						</li>
						<li>
							2021-ci ildən ölkə sərhədlərini aşaraq Gürcüstanda fəaliyyət
							göstərməyə başladıq.
						</li>
					</ul>

					<p>
						Hazırda 40-dan çox beynəlxalq brendin rəsmi distribüteri olaraq
						Azərbaycan üzrə ümumilikdə 38 mağaza, Gürcüstanda 3, eləcə də{' '}
						<a href='https://kontakt.az'>kontakt.az</a> və{' '}
						<a href='https://kontakt.ge'>kontakt.ge</a> onlayn mağazası ilə
						xidmət etməyə davam edirik.
					</p>
				</main>
			</div>
		</div>
	);
}

export default AboutCompany;

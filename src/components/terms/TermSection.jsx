import React from 'react'
import { useLocation } from 'react-router-dom';
import PageTitle from '../PageTitle'
import termLogo_1 from '../../image/article/img-1.png'
import termLogo_2 from '../../image/article/img-2.jpg'

function TermSection() {
    const location = useLocation();
    return (
        <section className='terms'>
            {
                location.pathname === '/terms/delivery' ? (
                    <div className="container">
                        <PageTitle title='Çatdırılma' />
                        <div className='row'>
                            <div className="col-12 col-lg-6">
                                <div className="content">
                                    <p><strong>Çatdırılma qiymətləri:</strong></p>
                                    <p>Çatdırılma, 50 azn və üzəri sifarişlərdə ödənişsizdir.<br/>50 azn-ə qədər olan sifarişlərdə çatdırılma 5 azn nəzərdə tutulmuşdur</p>
                                    <p><strong>Çatdırılma müddəti:</strong></p>
                                    <p>Həftənin 5 günü iş saatları (09.00 - 18.00) ərzində çatdırılma mövcuddur. Çatdırılma, sifariş verdiyiniz günün ertəsi günü təmin ediləcəkdir. Şənbə günü verdiyiniz sifarişlər növbəti həftənin ilk iş günü ərzində çatdırılacaqdır.</p>
                                    <p><strong>Sifarişlə gətirilən məhsulların çatdırılma şərtləri</strong></p>
                                    <p>Sifarişlə gətirilən məhsulların çatdırılma müddəti və şərtlərini dəqiqləşdirmək üçün müştəri xidmətləri ilə əlaqə saxlamağınız xahiş olunur.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="terms-logo">
                                    <img src={termLogo_1} alt="terms" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <PageTitle title='Geri qaytarılma və dəyişdirilmə' />
                        <div className='row'>
                            <div className="col-12 col-lg-6">
                                <div className="content">
                                    <p>
                                        <strong>
                                            Lucky Office Support-dan alınan malların dəyişdirilməsi və ya geri qaytarılması qaydaları aşağıdakı göstərilmiş:
                                        </strong>
                                    </p>
                                    <ul>
                                        <li>Geri qaytarılması qadağan olunan mallar istisna olmaqla bütün mallar Azərbaycan Respublikasının İstehlakçıların hüquqlarının müdafiəsi haqqında qanunun 15-ci maddəsində qeyd edilən şərtlərlə 14 gün ərzində geri qaytarıla bilər.</li>
                                        <li>Mal təhvil alınan zaman mütləq şəkildə fiziki xüsusiyyətləri, funksionallıqları yoxlanmalıdır, əgər hər hansı irad varsa yerində çatdırılmanı edən əməkdaşımıza bildirilməlidir,</li>
                                        <li>Malın qutusu (əgər qutuda olan maldırsa) açılıbsa,</li>
                                        <li>Mal istifadə edilmişdirsə,</li>
                                        <li>Malın əmtəə görünüşü, istehlak xüsusiyyətləri və fiziki göstəricilərdə defarmasiya olubsa,</li>
                                        <li>Alış və çatıdırılma zamanı təqdim olunan sənəd (elektron və ya adi sənəd) saxlanıbsa,</li>
                                        <li>AR-nın NK-nin müvafiq qərarında siyahı halında dəyişidirilməsi/geri qaytarılması edilməyən mallardan deyilsə,</li>
                                        <li>Geri qaytarılma və dəyişdirilmə ancaq istehsal xətasına görə olan qüsurdursa və ya bu qüsur təhvil təslim zamanı ortaya çıxmışdırsa bu zaman geri qaytarma/dəyişdirmə icra edilir.</li>
                                        <li>Mal qaytarılan/dəyişdirilən zaman qablaşdırması, alış sənədləri və aksesuarları (akseasuarları olan maldırsa) ilə birlikdə verilməlidir.s</li>
                                    </ul>
                                    <p>
                                        <strong>
                                            Aşağıdakı malların geri qaytarılması həyata keçirilmir:
                                        </strong>
                                    </p>
                                    <ul>
                                        <li>Dəri məmulatları</li>
                                        <li>Məktəb, hədiyyəlik, hobbi, ev əşyası və digər fərdi istifadə malları</li>
                                        <li>Bütün növ Gigiyena məhsulları</li>
                                        <li>Sifariş əsasında şəxsə özəl olaraq hazırlanmış məhsullar</li>
                                        <li>Hissələrdən ibarət olaraq anbarda saxlanılan və müştərinin istəyi ilə montaj edilərək müştərinin ofisinə çatdırlan mallar (dəmir dolablar, mebellər və s.)</li>
                                        <li>Seyf və digər bu tipdə kassa və mühafizə məqsədli mallar.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="terms-logo">
                                    <img src={termLogo_2} alt="terms" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default TermSection

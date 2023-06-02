import React from 'react'
import PageTitle from '../PageTitle'
import aboutLogo from '../../image/logo/about-logo.jpeg'

function AboutSection() {
  return (
    <section className="about">
        <div className="container">
            <PageTitle title='Haqqımızda'/>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="content">
                  <p>Şirkətimiz, ofisinizin gündəlik təchizatı üçün zəruri olan <strong>dəftərxana ləvazimatlarının, su, çay, kofe kimi daimi istifadə edilən qida məhsullarının, gigiyena və təmizlik vasitələrinin, daşınan və daşınmaz hər növ inventarın (ofis mebel dəstləri, kompyuter və onun yan avadanlıqları)</strong> Sizə sürətli və maneəsiz çatdırılması xidmətini həyata keçirir.</p>
                  <p>Xidmətlərimizdən istifadə etməklə Siz;</p>
                  <ul>
                    <li>vaxtınıza qənaət etmiş olursunuz,</li>
                    <li>sifariş etmədən öncə qiymətlərlə tanış ola, qiymət müqaisəsini rahatlıqla edə bilirsiniz,</li>
                    <li>sifarişlərinizi həm nəğd, həm də köçürmə yolu ilə həyata keçirə bilirsiniz,</li>
                    <li>əməkdaşlarınızın ancaq işlərinə vaxt sərf etməsinə zəmin yaradırsınız,</li>
                    <li>əlavə xərclərdən (taksi, park yeri, park cərimələri və s.) azad olursunuz.</li>
                  </ul>
                  <p>Bizimlə əməkdaşlıq etdiyiniz təqdirdə, bütün xidmətlərin yüksək sürət və həssasiyyətlə həyata keçiriləcəyinə təminat veririk.</p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="about-logo">
                  <img src={aboutLogo} alt="logo" />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection

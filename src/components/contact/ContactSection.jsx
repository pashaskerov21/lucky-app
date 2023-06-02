import React from 'react'
import PageTitle from '../PageTitle'

function ContactSection() {
    return (
        <section className="contact">
            <div className="container">
                <PageTitle title='Əlaqə' />
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <span>(994) 99 832 07 77</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>info@los.az</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="contact-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Ziya Bünyadov pr, 1965. Çinar Park Biznes Mərkəzi</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <div className="map">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.416174197902!2d49.866269715394665!3d40.37746797936963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzM4LjkiTiA0OcKwNTInMDYuNSJF!5e0!3m2!1sen!2s!4v1619439490481!5m2!1sen!2s"></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <form action="#" className="form-general">
                            <h3 className="title">Müraciət Formu</h3>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="fullname" placeholder="ad soyad" />
                                <label htmlFor="fullname">Ad, Soyad *</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="title" placeholder="baslıq" />
                                <label htmlFor="title">Başlıq *</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="email" placeholder="email" />
                                <label htmlFor="email">Email *</label>
                            </div>
                            <div className="form-floating">
                                <textarea className='form-control' placeholder='mesaj' id='message'></textarea>
                                    <label htmlFor="message">Email *</label>
                            </div>
                            <button type='submit' className='submit-button green'>Göndər</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

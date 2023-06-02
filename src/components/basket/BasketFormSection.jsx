import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function BasketFormSection() {
    const basketTotal = useSelector(state => state.basketTotal);
    const deliveryValue = 5;
    const total = basketTotal.total + deliveryValue;
    return (
        <section className='basket-form'>
            <div className="container">
                {
                    basketTotal.total > 30 ? (
                        <form action="#" className="form-general">
                            <h2 className="title">Məlumatlar</h2>
                            <div className="row">
                                <div className="col-12 col-xl-6">
                                    <div className="inner">
                                        <div className="form-item">
                                            <label htmlFor="company">Şirkət adı*</label>
                                            <input type="text" className="form-control" id="company" placeholder="Şirkət adı*" />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="fullname">Ad, Soyad*</label>
                                            <input type="text" className="form-control" id="fullname" placeholder="Ad, Soyad*" />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="location">Ünvan*</label>
                                            <input type="text" className="form-control" id="location" placeholder="Ünvan*" />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="city">Şəhər*</label>
                                            <input type="text" className="form-control" id="city" placeholder="Şəhər*" />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="phone">Telefon*</label>
                                            <input type="number" className="form-control" id="phone" placeholder="Telefon*" />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="email">Email*</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email*" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6">
                                    <div className="form-right">
                                        <div className="order-info">
                                            <div className='inner-row'>
                                                <h4 className='info-title'>Sifariş</h4>
                                            </div>
                                            <div className='inner-row'>
                                                <span className='label'>Cəmi</span>
                                                <span className="value">{basketTotal.total.toFixed(2)} Azn</span>
                                            </div>
                                            <div className='inner-row'>
                                                <span className='label'>Çatdırılma</span>
                                                <span className="value">{deliveryValue.toFixed(2)} Azn</span>
                                            </div>
                                            <div className='inner-row'>
                                                <span className='label'>Ümumi</span>
                                                <span className="value">{total.toFixed(2)} Azn</span>
                                            </div>
                                        </div>
                                        <div className='payment-radiobuttons'>
                                            <label htmlFor="radio-1">
                                                Nağd <input className='form-check-input' name='payment' type="radio" id='radio-1' />
                                            </label>
                                            <label htmlFor="radio-2">
                                                Online ödəniş <input className='form-check-input' name='payment' type="radio" id='radio-2' />
                                            </label>
                                            <label htmlFor="radio-3">
                                                Köçürmə yolu <input className='form-check-input' name='payment' type="radio" id='radio-3' />
                                            </label>
                                        </div>
                                        <button type='submit' className="submit-button orange">Sifarişi təsdiqlə</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <>
                            <h3 className="section-title">Sifarişi təsdiqləmək mümkün deyil</h3>
                            <Link className='basket-link' to='/basket'><span>Səbətə get</span><i className='fa-solid fa-arrow-right'></i></Link>
                        </>
                    )
                }
            </div>
        </section>
    )
}

export default BasketFormSection

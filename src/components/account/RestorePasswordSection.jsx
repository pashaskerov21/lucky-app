import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo/logo-header.svg'


function RestorePasswordSection() {
    return (
        <section className='account'>
            <div className="row">
                <div className='col-12 col-lg-3 col-xxl-4 d-none d-lg-flex'>
                    <div className="account-link">
                        <img src={logo} alt="logo" />
                        <Link to='/register'>Daxil ol</Link>
                    </div>
                </div>
                <div className="col-12 col-lg-9 col-xxl-8 account-col-right">
                    <form action='#' className="form-general">
                        <h2 className="section-title">Şifrə yeniləmə</h2>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="email" />
                            <label htmlFor="email">E-poçt ünvanı *</label>
                        </div>
                        <button className="submit-button orange">Göndər</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RestorePasswordSection

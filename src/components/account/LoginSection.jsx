import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo/logo-header.svg'

function LoginSection() {
  const handleLoginSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <section className='account'>
      <div className="row">
        <div className='col-12 col-lg-3 col-xxl-4 d-none d-lg-flex'>
          <div className="account-link">
            <img src={logo} alt="logo" />
            <Link to='/register'>Qeydiyyat</Link>
          </div>
        </div>
        <div className="col-12 col-lg-9 col-xxl-8 account-col-right">
          <form onSubmit={handleLoginSubmit} className="form-general">
            <h2 className="section-title">Daxil Ol</h2>
            <div className="form-floating">
              <input type="email" className="form-control" id="email" placeholder="email" />
              <label htmlFor="email">E-poçt ünvanı *</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" placeholder="sifre" />
              <label htmlFor="password">Şifrə *</label>
            </div>
            <div className='links'>
              <div className='form-check'>
                <input type="checkbox" id='remind' className='form-check-input' />
                <label className='form-check-label' htmlFor="remind">Məni xatırla</label>
              </div>
              <Link to='/restore-password'>Şifrəmi unutdum</Link>
            </div>
            <button className="submit-button orange">Daxil ol</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginSection

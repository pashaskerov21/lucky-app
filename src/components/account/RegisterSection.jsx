import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo/logo-header.svg'


function RegisterSection() {
  const handleRegisterSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <section className='account'>
      <div className="row">
        <div className='col-12 col-lg-3 col-xxl-4 d-none d-lg-flex'>
          <div className="account-link">
            <img src={logo} alt="logo" />
            <Link to='/login'>Daxil ol</Link>
          </div>
        </div>
        <div className="col-12 col-lg-9 col-xxl-8 account-col-right">
          <form onSubmit={handleRegisterSubmit} className="form-general register">
            <h2 className="section-title">Qeydiyyat</h2>
            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="inner">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="company" placeholder="şirkət" />
                    <label htmlFor="company">Şirkət adı *</label>
                  </div>
                  <div className="form-floating">
                    <input type="text" className="form-control" id="location" placeholder="ünvan" />
                    <label htmlFor="location">Ünvan *</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="password" placeholder="sifre" />
                    <label htmlFor="password">Şifrə *</label>
                  </div>
                  <div className="form-floating">
                    <input type="password-2" className="form-control" id="password-2" placeholder="sifre" />
                    <label htmlFor="password-2">Şifrə təsdiqlə *</label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="inner">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="friend-person" placeholder="elaqeli şexs" />
                    <label htmlFor="friend-person">Əlaqəli şəxs *</label>
                  </div>
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="email" />
                    <label htmlFor="email">E-poçt ünvanı *</label>
                  </div>
                  <div className="form-floating">
                    <input type="number" className="form-control" id="number" placeholder="telefon" />
                    <label htmlFor="number">Telefon *</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="submit-button orange">Qeydiyyat</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegisterSection

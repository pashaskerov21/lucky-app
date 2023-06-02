import React from 'react'
import footerLogo from '../../image/logo/logo-footer.svg'
import { Link } from 'react-router-dom'
import {productCategories} from '../../data/ProductData'

function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-3">
              <div className="inner">
                <Link className='logo'>
                  <img src={footerLogo} alt="logo" />
                </Link>
                <div className="sosial-icons">
                  <Link><i className='fa-brands fa-facebook-f'></i></Link>
                  <Link><i className='fa-brands fa-instagram'></i></Link>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 col-xl-3'>
              <div className="footer-links">
                <h4 className="title">Kategoriyalar</h4>
                {
                  productCategories.map(category => (
                    <Link key={category.id} to={`/products/${encodeURIComponent(category.name)}`}>{category.name}</Link>
                  ))
                }
              </div>
            </div>
            <div className='col-12 col-md-4 col-xl-3'>
              <div className="footer-links">
                <h4 className="title">Menyular</h4>
                <Link to='/about'>Haqqımızda</Link>
                <Link to='/terms/delivery'>Çatdırılma</Link>
                <Link to='/terms/return-exchanges'>Geri qaytarılma və dəyişdirilmə</Link>
                <Link to='/contact'>Əlaqə</Link>
              </div>
            </div>
            <div className='col-12 col-md-4 col-xl-3'>
              <div className="footer-links">
                <h4 className="title">Əlaqə</h4>
                <Link>Tel: (994) 99 832 07 77</Link>
                <Link>Email: info@los.az</Link>
                <Link>Ünvan: Ziya Bünyadov pr, 1965. Çinar Park Biznes Mərkəzi</Link>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom">
                <div>
                  &copy; Bütün huquqlar qorunur
                </div>
                <div>
                  Powered by  <a target='_blank' rel="noreferrer" href="https://alipashaskerov.netlify.app">Pasha</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer

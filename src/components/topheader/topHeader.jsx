import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg"

const topHeader = () => {
  return (
    <div className='topHeader'>
      <div className='container topHeader__container'>
        <div className='topHeader__row'>
          <div className='logo'>
            <Link to="/"><img src={Logo} /></Link>
          </div>
          {/* <a className="toggle" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <span></span><span></span><span></span>
            </a>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header justify-content-end">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
              <ul className='nav-items'>
                  <li className='nav-links'>
                      <Link to="/" className='nav-item'>Home</Link>
                  </li>
                  <li className='nav-links'>
                      <Link to="/quickdesign" className='nav-item'>Quick Design</Link>
                  </li>
              </ul>
  </div>
</div> */}
        </div>
      </div>
    </div>
  )
}

export default topHeader

import React from 'react';
import img1 from '../assets/img/logogithub.png';
function Footer() {
  return (
    <footer id="footer" className="padded">
      <div className="container">

          <h6 className="text-center"> 2021 - Todos los derechos reservados </h6>
          <div class="col text-center">
                PedroManuelJM <a href="https://github.com/PedroManuelJM" target="_blank"  class="" role=""><img src={img1}/></a>
          </div>           
      </div>
    </footer>
  );
}
export default Footer;
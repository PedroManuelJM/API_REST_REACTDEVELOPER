import React, { Component } from 'react';
import img1 from '../assets/img/imagen1.PNG';
import img2 from '../assets/img/imagen2.PNG';
import img3 from '../assets/img/imagen3.PNG';
import img4 from '../assets/img/imagen4.PNG';
export default class Consulta extends Component {

static dibujarEnvios(datosTablaProductos) {
        return (
            <></>
     

        )
    }

    render() {
  
        return (
            <section id="envios" className="padded">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br></br>
                            <h4>Consulta de la BD - API REST</h4>
                        </div>
                    </div>
                    <div className="row">
                        <br></br>
                        <div className="col-md-12">
                            <h4 className="text-left">Script - conexión </h4>
                            <img src={img1} className="img-responsive"></img>
                            <br></br> <br></br>
                            <h4 className="text-left">Script - Productos </h4>
                            <br></br>
                            <img src={img2} className="img-responsive"></img>
                            <br></br><br></br>
                            <img src={img3} className="img-responsive"></img>
                            <br></br><br></br>
                            <img src={img4} className="img-responsive"></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
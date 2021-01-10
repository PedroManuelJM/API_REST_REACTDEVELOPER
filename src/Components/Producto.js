import React, { Component } from 'react';
import { ApiWebUrl } from '../utils';

export default class Producto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaProductos: []
        }
    }

    componentDidMount() {
        const rutaServicio = ApiWebUrl + "productos.php";

        fetch(rutaServicio)
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaProductos: result
                    })
                }
            )
    }

    static dibujarEnvios(datosTablaProductos) {
        return (
            <>
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-3 g-4 border-primary ">
                        {datosTablaProductos.map(itemproducto =>
                            <div className="col image-container">
                                
                                <div className="card">

                                    <img src={ApiWebUrl + 'productos/' + itemproducto.imagenproducto} className="card-img-top img-thumbnail rounded" alt="..." />

                                    <div className={
                                        itemproducto.enoferta === "0" ?
                                            "producto-sin-oferta"
                                            : "producto-con-oferta"
                                    }>Oferta</div>
                                    <div className="card-body">
 
                                        <h5 className="card-title">{itemproducto.nombreproducto} {itemproducto.caracteristica} </h5>
                                        <p className="card-text"></p>

                                        <p>Precio <span className="badge badge-pill badge-success"> S/. {parseFloat(itemproducto.precio).toFixed(2)}</span> </p>

                                    </div>

                                </div>
                                <br></br>

                            </div>
                        )}
                    </div>


                </div>

            </>

        )
    }

    render() {
        let contenidoProductos = Producto.dibujarEnvios(this.state.listaProductos);
        return (
            <section id="envios" className="padded">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4>Catálogo Productos</h4>
                        </div>
                    </div>
                    <div className="row">
                        <br></br>
                        <div className="col-md-12">
                            {contenidoProductos}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
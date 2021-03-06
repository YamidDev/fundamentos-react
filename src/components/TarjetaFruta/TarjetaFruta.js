import React from "react";
import styles from './TarjetaFruta.module.css';

class TarjetaFruta extends React.Component {
    state = {
        cantidad: 0
    }
    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1
    })

    eliminar = () => this.setState({
        cantidad: this.state.cantidad - 1
    })

    limpiar = () => this.setState({
        cantidad: this.state.cantidad = 0
    })
    render() {
        const hasItems = this.state.cantidad > 0
        const clases = `${styles.card} ${hasItems ? styles['card-active']: ''}`
        return (
            <div className={'col-md-4 col-xs-12 col-sm-12'}>
                <div className={`${clases}`}>
                    <div className={'card-body'}>
                        <h3 className={'card-title'}>{this.props.name}</h3>
                        <div>Cantidad: {this.state.cantidad}</div>
                        <button type={'button'} className={'btn btn-primary'} onClick={this.agregar}
                                style={{marginRight: '5px'}}>
                            <b><i className={'material-icons'}>add_shopping_cart</i></b></button>
                        <button type={'button'} className={'btn btn-danger'} onClick={this.eliminar}
                                style={{marginRight: '5px'}}>
                            <b><i className={'material-icons'}>remove_shopping_cart</i></b>
                        </button>
                        <button type={'button'} className={'btn btn-secondary'} onClick={this.limpiar}>
                            <b><i className={'material-icons'}>shopping_cart</i></b>
                        </button>
                        <hr/>
                        <p className={'card-text'}>Precio Unitario: $ {this.props.price}</p>
                        <hr/>
                        <p className={'card-text'}>Valor Total: <b>$ {Math.round(this.props.price * this.state.cantidad)}</b></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TarjetaFruta
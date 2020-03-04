import React from 'react';
import ReactDOM from 'react-dom';

class TarjetaFruta extends React.Component {
    constructor() {
        super();
        this.state = {
            cantidad: 0
        }
        const METHODS = [
            'agregar', 'eliminar', 'limpiar'
        ]

        METHODS.forEach((method)=>{
            this[method] = this[method].bind(this)
        })
    }
    agregar () {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }

    eliminar() {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }

    limpiar(){
        this.setState({
            cantidad: this.state.cantidad = 0
        })
    }
    render() {
        return (
            <div className={'col-md-4'}>
                <h3>{this.props.name}</h3>
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
                <p>Precio Unitario: ${this.props.price}</p>
            </div>
        )
    }
}


const App = () => (
    <div className={'container my-5 text-center'}>
        <div className="row">
            <div className="col-md-12">
                <h1 className={'text-center'}>Agrega y remueve productos</h1>
                <hr/>
            </div>
        </div>
        <div className={'row'}>
            <TarjetaFruta name={'Sandia'} price={2.00}/>
            <TarjetaFruta name={'Kiwi'} price={5.4}/>
            <TarjetaFruta name={'Maracuya'} price={6.5}/>
        </div>
    </div>
)


ReactDOM.render(<App/>, document.getElementById('root'));
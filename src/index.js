import React from 'react';
import ReactDOM from 'react-dom';

/*const user1 = {
    name: 'Yamid Cueto',
    age: 31,
    country: 'Colombia'
}

function getInfo(user){
    return `Hola soy ${user1.name} y tengo ${user1.age} años y el doble de mi edad ${user1.age*2}`
}*/

const TarjetaFruta = (props) => (
    <div className={'container'}>
        <h3>{props.name}</h3>
        <hr/>
        <p>Precio ${props.price}</p>
    </div>
)

const App = () => (
    <div>
        <TarjetaFruta name={'Sandia'} price={2.00}/>
        <TarjetaFruta name={'Kiwi'} price={5.4}/>
        <TarjetaFruta name={'Maracuya'} price={6.5}/>
    </div>
)


ReactDOM.render(<App/>, document.getElementById('root'));
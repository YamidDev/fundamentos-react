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
    <div>
        <h3>{props.name}</h3>
        <hr/>
        <p>Descripción...</p>
    </div>
)

const App = () => (
    <div>
        <TarjetaFruta name='Sandia'/>
        <TarjetaFruta name='Kiwi'/>
        <TarjetaFruta name='Maracuya'/>
    </div>
)


ReactDOM.render(<App/>, document.getElementById('root'));
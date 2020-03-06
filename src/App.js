import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";

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

export default App
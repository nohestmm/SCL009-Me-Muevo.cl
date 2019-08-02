import React from 'react';
import './components.css'

const Navbar = () => {

    return (
        <>
            <div className="sidebar col-sm-5 col-md-4 col-lg-3">
                <div className="logo"><img src="http://www.memuevo.cl/wp-content/themes/newmemuevo/img/logo.png" alt="" /></div>
                <div className="search-wrapper">
                    <input
                        type="search"
                    
                        placeholder="🔎Buscar" />

                </div>
                <div>
                    <ul>
                        <li>Artritis reumatoide</li>
                        <li>Ley Ricarte Soto</li>
                        <li>Ges</li>
                        <li>Noticias</li>
                        <li>Registro de Paciente</li>
                        <li>Quienes Somos</li>
                    </ul>
                </div>
            </div>

        </>

    )


}
export default Navbar;
import React from 'react';
import './components.css'

const TemplateRegister = () => {

        return (
                <div className="container">
                        <div className="row register">
                    
                        <h2> Regístrate, tu apoyo es importante </h2>
                        <p>Súmate a nuestra red de pacientes y recibe boletines informativos en tu correo electrónico </p>

                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">

                                <label className="control-label">Nombre(s):</label>
                                <input type="text" className="form-control"/>
                                <label className="control-label">Apellido(s):</label>
                                <input type="text" className="form-control"/>
                                {/* <label className="control-label">Nacionalidad:</label>
                                <input type="radio" name="Chilena" value="Chilena"/> Chilena<br></br>
                                <input type="radio" name="Extranjera" value="Extranjera"/> Extranjera<br></br> */}
                                <label className="control-label">Nacionalidad:</label>
                               <select className="form-control">
                                        <option>--Selecciona una opción--</option>
                                       <option>Chilena</option>
                                       <option>Extranjera</option>
                               </select>
                                <label className="control-label">R.U.T:</label>
                                <input type="text" className="form-control" placeholder="Ej. 12345678-9" required/>
                                <label className="control-label">Fecha de nacimiento:</label>
                                <input type="date" className="form-control" />
                                <label className="control-label">Sexo:</label>
                                <select className="form-control">
                                        <option>--Selecciona una opción--</option>
                                       <option>Femenino</option>
                                       <option>Masculino</option>
                                       <option>Otro</option>
                               </select>
                                <label className="control-label">Afiliado:</label>
                                <select className="form-control">
                                        <option>--Selecciona una opción--</option>
                                       <option>FONASA</option>
                                       <option>ISAPRE</option>
                               </select>
                                <label className="control-label">Correo electrónico:</label>
                                <input type="mail" className="form-control"/>
                                <label className="control-label">Teléfono</label>
                                <input type="number" className="form-control" placeholder="Ej. 9-12345678" required/>
                                <br></br>
                                <button type="submit" className="btn btn-primary">Registrar</button>

                        </div>
                        </div>
                </div>
        )

}

export default TemplateRegister;
import React from 'react';
import infografiaGes from '../image/infografiaGes.jpg';


const TemplateGes = () => {

        return (
                <>
                <div>
                        <h1>GES</h1>
                        <p>La sigla GES significa "Garantías Explícitas en Salud" y le permite a usted y su familia el acceso, la calidad, la oportunidad y protección financiera para un conjunto de prestaciones médicas que permiten enfrentar las enfermedades y condiciones definidas en la ley 19.966.</p>
                </div>
                <div>
                        <img src={infografiaGes} className="d-inline-block align-top" alt="infografia Ges"></img>
                </div>
                </>
        )

}

export default TemplateGes;

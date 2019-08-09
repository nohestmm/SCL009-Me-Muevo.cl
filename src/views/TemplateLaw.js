import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import infografiaRicarteSoto from '../image/infografiaRicarteSoto.jpg'
import '../App.css'
const TemplateLaw = () => {

        return (
                <section >
                        <Container className="backTemp">
                                <Row>
                                        <Col className="marginInitial">
                                                <h4>
                                                        Ley Ricarte Soto
                                                </h4>
                                                <p>
                                                        La Ley Ricarte Soto un sistema de protección financiera para diagnósticos y tratamientos de alto costo, que posee una Cobertura Universal. Otorga protección financiera a todos los usuarios de los sistemas previsionales de salud: FONASA, CAPREDENA, DIPRECA e ISAPRES, sin importar su situación socioeconómica.
                                                </p>
                                        </Col>
                                </Row>
​
                                <Row>
                                        <Col xs={12} md={8}  >
                                                <div className="sectionricarteSoto marginInitial"><img className="ricarteSotoIngfografia" src={infografiaRicarteSoto} alt="" /></div>
                                        </Col>
​
                                        <Col xs={12} md={4} className="marginInitial bgDiv pt-3">
                                                <h5>Prestaciones garantizadas:</h5>
                                                <p>
                                                        1. Tratamiento: etanercept o abatacept o adalimumab o golimumab o tocilizumab o tofacitinib o rituximab.
                                                </p>
​
                                                <p>
                                                        1.1. Para los casos nuevos, el tratamiento se garantiza para personas con artritis reumatoide activa refractaria a tratamiento
                                                        habitual, que cumplan con los criterios de inclusión establecidos en este protocolo.
                                                </p>
​
                                                <p>
                                                        1.2. Para la continuidad de tratamientos en personas ya usuarias de medicamentos garantizados, se considerará la transición a los
                                                        medicamentos cubiertos por el Fondo en las condiciones que se establecen en este protocolo.
                                                        Garantía de Oportunidad:
                                                </p>
​
                                                <p>
                                                        1. Si cumple con los criterios establecidos en el protocolo de esta condición de salud, hará uso del beneficio específico de inicio o
                                                        continuidad de tratamiento con etanercept o abatacept o adalimumab o golimumab o tocilizumab o tofacitinib o rituximab en un
                                                        plazo no mayor de 60 días, desde la validación de su indicación por parte del Comité de Expertos Clínicos del Prestador Aprobado.
                                                </p>
​
                                                <p>
                                                        2. Continuidad en la atención y control, en conformidad a lo establecido en este protocolo.
                                                        Seguimiento:
                                                        El seguimiento se realizará conforme lo establecido en este protocolo.
                                                </p>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}
export default TemplateLaw;




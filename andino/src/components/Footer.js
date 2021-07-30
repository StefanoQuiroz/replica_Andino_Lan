import React from 'react';
import {Container, Row} from 'reactstrap';
import '../sass/styles.scss';
const Footer = () => {
    return (
        <Row className="containerFooter">
            <Row className="footerRow">
                <p className="p1" >CENTRO DE DISTRIBUCION AUTORIZADO DE PRODUCTOS COCA COLA</p>
                <p className="p2" >Av. Industrial No 295 Ur. Huancaro - Santiago - Cusco - Cusco </p>
            </Row>
        </Row>
    );
}

export default Footer;
import React from "react";
import { Col, Row } from "react-bootstrap";
import errorPage from "../Images/404_error.svg"

const NotFound = () => {
    return (
        <Row>
            <Col xs={12}>
                <div className="text-center">
                    <img className="img-fluid" src={errorPage} style={{maxWidth:"500px"}} alt="" />
                </div>
            </Col>
        </Row>
    );
};

export default NotFound;
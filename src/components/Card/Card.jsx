import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

import './Card.css'

const CustomCard = (props) => {
    const { id, title, image, price, rating } = props.course;
    console.log(props.handleButtonClick)
    
    return (
        <>
            <Col>
                <Card className="h-100" style={{border:"1px solid orchid"}}>

                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        <h6>Rating: {rating}</h6>
                        <h6>Price: {price}</h6>

                        <p className="text-center">
                            <button
                            onClick = {()=>props.handleButtonClick(id)}
                            >Join Now</button>
                        </p>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
            </Col>
        </>
    );
};

export default CustomCard;

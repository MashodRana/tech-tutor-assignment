import React from "react";
import { Card, Col } from "react-bootstrap";


const CustomCard = (props) => {
    const { title, image, price, rating } = props.course;
    return (
        <>
            <Col>
                <Card className="h-100">

                    <Card.Img variant="top" src="https://cdn-gcp.marutitech.com/wp-media/2016/10/a6c3baa2-8-problems-that-can-be-easily-solved-by-machine-learning-1.jpg" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Price: {price}
                        </Card.Text>
                        <Card.Text>
                            Rating: {rating}
                        </Card.Text>

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

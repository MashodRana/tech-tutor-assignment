import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import bannerImg from '../Images/bannerImg.svg'


const Home = () => {
    return (
        <div>
            <section>
                <Row>
                    <Col md={5}>
                        <div>
                            <img src={bannerImg} alt="" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="p-5">
                            <h1 >
                                <span className="fs-1 text-danger">Tech Tutor</span>
                                <br />
                                <small>your friendly online tutor</small>
                            </h1>

                            <p>
                                You can learn from here and make a bright future.
                            </p>
                        </div>
                    </Col>

                </Row>
            </section>

            <section>
                <h1>Our Popular Courses</h1>
                <div>
                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Home;
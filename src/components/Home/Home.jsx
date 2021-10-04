import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../Card/Card";
import './Home.css'


import bannerImg from '../Images/bannerImg.svg'


const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const url = "./fake_data.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <>
            <section className="intro-section py-5">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div style={{ width: '75%' }}>
                                <img src={bannerImg} alt="" />
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="p-5">
                                <h1 >
                                    <span className="fs-1 brand">Tech Tutor</span>
                                    <br />
                                    <small>your friendly online tutor</small>
                                </h1>

                                <p>
                                    You can learn from here and make a bright future.
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="popular-courses">
                <Container className="my-5">
                    <h1>Our Popular Courses</h1>
                    <div>
                        <Row xs={1} md={2} lg={3} className="g-2">
                            {
                                courses.slice(0, 6).map(course => <CustomCard
                                    key={course.id}
                                    course={course}
                                >

                                </CustomCard>
                                )
                            }
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
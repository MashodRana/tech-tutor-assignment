import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../Card/Card";
import './Home.css'


import bannerImg from '../Images/bannerImg.svg'
import { useHistory } from "react-router";
import useCourses from "../../hooks/useCourses";


const Home = () => {
    const courses = useCourses();
    let  history = useHistory();

    

    const handleButtonClick = (id) => {
        history.push(`course/${id}`);
    }

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
                        {console.log('=============',courses.length)}
                            {
                                courses.slice(0, 6).map(course => <CustomCard
                                    key={course.id}
                                    course={course}
                                    handleButtonClick={handleButtonClick}
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
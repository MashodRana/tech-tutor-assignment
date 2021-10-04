import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useCourses from "../../hooks/useCourses";
import CustomCard from "../Card/Card";


const Courses = () => {
    const courses = useCourses();
    let  history = useHistory();

    const handleButtonClick = (id)=>{
        history.push(`course/${id}`);
    }

    return (
        <>
            <section>
            <Container className="my-5">
                <h1>Our Courses</h1>
                <div>
                    <Row xs={1} md={2} lg={3} className="g-2">
                        {
                            courses.map(course => <CustomCard
                                key={course.id}
                                course={course}
                                handleButtonClick = {handleButtonClick}
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

export default Courses;
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CustomCard from "../Card/Card";


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const url = "./fake_data.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

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
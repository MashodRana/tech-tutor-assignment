import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useCourses from "../../hooks/useCourses";

const CourseDetail = () => {
    // const courses = useCourses();
    const { courseId } = useParams();

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        // const url = "./fake_course_data.json";  
        const url = "https://mashodrana.github.io/json-data/fake_courses_data.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <>
            <section>
                <Container className="my-5 p-5">
                    <div>
                        <img src={courses.length && courses[courseId-1].image} alt="" />
                    </div>
                    <div>
                        <h1>Title: {courses.length && courses[courseId-1].title} </h1>
                        <p>Author: {courses.length && courses[courseId-1].author}</p>
                        <p>Rating: {courses.length && courses[courseId-1].rating} </p>
                        <p>Price: {courses.length && courses[courseId-1].price}</p>
                        <p>Description: <br />
                            {courses.length && courses[courseId-1].text}
                        </p>
                        
                    </div>
                </Container>
            </section>
        </>
    );
};

export default CourseDetail;
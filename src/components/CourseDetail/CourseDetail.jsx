import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useCourses from "../../hooks/useCourses";

const CourseDetail = ()=>{
    const courses = useCourses();
    const {courseId} = useParams();

    return (
        <>
        <section>
        <Container className="my-5 p-5">
            <div>
                <img src={courses[courseId].image} alt="" />
            </div>
            <div>
                <h1>Title: {courses[courseId].title} </h1>
                <p>Author: {courses[courseId].author}</p>
                <p>Rating: {courses[courseId].rating} </p>
                <p>Price: {courses[courseId].price}</p>
                <p>Description: <br />
                {courses[courseId].text}
                </p>
            </div>
        </Container>
        </section>
        </>
    );
};

export default CourseDetail;
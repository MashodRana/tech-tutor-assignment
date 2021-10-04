import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useCourses from "../../hooks/useCourses";

const CourseDetail = ()=>{
    const courses = useCourses();
    const {courseId} = useParams();

    return (
        <>
        <Container>
            {console.log('=============',courses.length)}
            {console.log('*****************',courseId)}
            {/* <div>
                <img src={courses[courseId].image} alt="" />
            </div>
            <div>
                <h1>Title: {courses[courseId].title} </h1>
            </div> */}
        </Container>
        </>
    );
};

export default CourseDetail;
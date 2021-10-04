import React, { useEffect, useState } from "react";

const useCourses = ()=>{
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        // const url = "./fake_course_data.json";  
        const url = "https://mashodrana.github.io/json-data/fake_courses_data.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return courses;
}

export default useCourses;
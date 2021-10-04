import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ArticleCard from "../Card/ArticleCard";
import './Articles.css'

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        const url = "https://mashodrana.github.io/json-data/fake_articles_data.json"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setArticles(data))
    },[])

    return (
        <>
            <section>
                <Container className="my-5">
                    <h1>Articles</h1>
                    <p>Read articles about what you like.</p>
                    {
                        articles.map(article=> <ArticleCard
                        key = {article.id}
                        article = {article}
                        ></ArticleCard> )
                    }
                </Container>
            </section>
        </>
    );
};

export default Articles;
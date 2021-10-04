import React from "react";

const ArticleCard = (props) => {
    const {author, title, text, image} = props.article;
    return (
        <>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://codersera.com/blog/wp-content/uploads/2021/09/java-.jpeg" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text"><small class="text-muted">{author}</small></p>
                            <p class="card-text">{text}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticleCard;
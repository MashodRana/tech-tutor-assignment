import React from "react";

const ArticleCard = (props) => {
    const { author, title, text, image } = props.article;
    return (
        <>
            <div className="card mb-3 " style={{border:"1px solid orchid"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"><small className="text-muted">{author}</small></p>
                            <p className="card-text text-truncate" >{text}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticleCard;
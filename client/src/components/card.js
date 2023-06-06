import React from "react";


function Card(props) {


    return (

        <section>
            {props.map(post => (
                <div className="card">
                    <div className="Title" key={post.id}>
                        <h1>{post.title}</h1>
                    </div>
                    <div className="img-container">
                        <img
                            alt={post.title}
                            src={post.image}
                            id={post.id}
                            onClick={() => props.handleClick(post.id)}
                        />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>Description:</strong> {post.description}
                            </li>
                            <li>
                                <strong>Price:</strong> {post.price}
                            </li>
                            <li>
                                <strong>Location:</strong> {post.location}
                            </li>
                        </ul>
                        <div >
                            <p>Post createdAt: {post.createdAt}</p>
                            <p>Post By: {post.username}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-success" onClick={() => props.handleSave(post.id)}>Save</button>
                    </div>
                </div>
            ))
            }
        </section>
    );
}



export default Card;

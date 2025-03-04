import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function PostsList() {
    const url = import.meta.env.VITE_BASE_API_URL;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => setPosts(res.data))
    }, []);

    return (
        <>
            <h1
                className="text-center my-4">
                <strong>Lista post</strong>
            </h1>

            {/* cards */}
            < div className="row row-cols-sm-1 row-cols-lg-2 mb-4 mx-4 g-5" >
                {
                    posts.map((post, index) => {
                        const { id, title, content, image } = post;

                        return (
                            <div key={id} className="col">
                                <div className="card h-100">
                                    <img src={image} className="card-img-top" alt={title} />

                                    <div className="card-body">
                                        <h5 className="card-title"><strong>{title}</strong></h5>
                                        <p className="card-text">{content}</p>
                                    </div>

                                    <div className="d-grid gap-2 col-4 mx-auto mb-4">
                                        <NavLink
                                            className="btn btn-secondary"
                                            type="button"
                                            to={`/posts-list/${index}`}>
                                            Scopri di più...
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
};
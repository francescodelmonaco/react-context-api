// import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

import { useGlobalContext } from "../contexts/GlobalContext";

export function SinglePost() {
    // const url = import.meta.env.VITE_BASE_API_URL;
    // const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get(`${url}/${id}`)
    //         .then((res) => setPost(res.data))
    // }, []);

    const { post, getSinglePost } = useGlobalContext();

    useEffect(() => {
        getSinglePost(id)
    }, []);

    const { index, title, content, image } = post;

    return (
        <>
            <div className="d-flex flex-row justify-content-between mt-4 mb-3 mx-5 gap-3">
                <button
                    type="button"
                    className="btn btn-outline-secondary col"
                    onClick={() => navigate(`/posts-list/${index - 1}`)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary col"
                    onClick={() => navigate(-1)}>
                    <i class="fa-solid fa-list-ul"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary col"
                    onClick={() => navigate(`/posts-list/${index + 1}`)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            <div key={index} className="card mx-5 mb-4">
                <div className="card-body">
                    <h5 className="card-title text-center text-uppercase fs-2"><strong>{title}</strong></h5>
                    <p className="card-text">{content}</p>
                </div>
                <img src={image} className="card-img-bottom" alt={title} />
            </div>
        </>
    )
};
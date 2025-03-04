import { createContext, useContext, useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BASE_API_URL;

// creo provider
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    // posts list
    const [posts, setPosts] = useState([]);

    // single post
    const [post, setPost] = useState({});

    // chiamate api per tutti i post
    const getPosts = () => {
        axios.get(url)
            .then((res) => setPosts(res.data))
    };

    // chiamata api per i singoli post
    const getSinglePost = (id) => {
        axios.get(`${url}/${id}`)
            .then((res) => setPost(res.data))
    };

    // destructuring
    const value = {
        posts,
        post,
        getPosts,
        getSinglePost
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
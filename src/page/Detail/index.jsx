import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {PostsContext} from "../../utils/context/PostsContext.jsx";

function Detail() {

    const navigate = useNavigate()

    const {posts} = useContext(PostsContext)
    const {id} = useParams()

    const post = posts.find((elem) => elem.id == id)

    const back = () => navigate('/')

    return (
        <>
            <button onClick={back}>Retour</button>
            <h1>{post.title}</h1>
            <h3>{post.description}</h3>
            <p>{post.content}</p>
        </>
    )
}

export default Detail
import {useState, useContext} from "react";
import {PostsContext} from "../../utils/context/PostsContext.jsx";
import {useNavigate} from "react-router-dom";

function Add() {

    const navigate = useNavigate()

    const {posts, addPost} = useContext(PostsContext)

    const [message, setMessage] = useState('')

    const [newPost, setNewPost] = useState({
        id: posts.length + 1 || 0,
        title: "",
        description: "",
        content: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setNewPost({
            ...newPost,
            [name]: value
        })
        setMessage('')

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const exist = posts.find((post) => post.title === newPost.title)
        if(exist) {
            setMessage('Cette article existe déjà')
            return
        }
        if (newPost.title.trim() == '') {
            setMessage('L\'article n\'a pas de titre')
            return
        }
        if (newPost.description.trim() == '') {
            setMessage('L\'article n\'a pas de déscription')
            return
        }
        if (newPost.content.trim() == '') {
            setMessage('L\'article n\'a pas de contenu')
            return
        }
        addPost(newPost)
        navigate('/', {
            state: {message: 'Article ajouté'}
        })
    }

    const back = () => navigate('/')

    return (
        <>
            {message && <span style={{color: 'red'}}>{message}</span>}
            <form onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    name={'title'}
                    placeholder={'Titre'}
                    value={newPost.title}
                    onChange={handleChange}
                />
                <textarea name={'description'} value={newPost.description} onChange={handleChange} />
                <textarea name={'content'} value={newPost.content} onChange={handleChange} />
                <button role={'submit'}>Valider</button>
            </form>
            <button onClick={back}>Retour</button>
        </>
    )
}

export default Add
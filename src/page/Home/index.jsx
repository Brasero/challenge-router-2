import {useContext} from "react";
import {PostsContext} from "../../utils/context/PostsContext.jsx";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

function Home() {

    const {state} = useLocation()

    const {posts} = useContext(PostsContext)

    return (
        <>
            {state?.message && <span style={{color: 'green'}}>{state.message}</span>}
            <nav>
                {
                    posts.length > 0 ?
                        (
                            posts.map((post, i) => {
                                return <Link key={i} to={`/detail/${post.id}`} style={{padding: '5px'}}>{post.title.toUpperCase()}</Link>
                            })
                        )
                        :
                        <span>Aucun article a afficher</span>
                }
            </nav>
            <Link to={'/add'}>Ajouter un article</Link>
        </>
    )
}

export default Home
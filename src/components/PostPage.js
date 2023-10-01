import { useStoreActions, useStoreState } from "easy-peasy";
import { useParams , Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function PostPage() {
  const posts=useStoreState((state)=>state.posts);
  const deletePost=useStoreActions((actions)=>actions.deletePost);
  const { id } = useParams();
  const navigate=useNavigate();
  const post = posts.find(post=> post.id.toString() === id);
  const handelDelete = (id)=>{
    deletePost(id);
    navigate('/');
  }
    return (
      <main className="PostPage">
          <article className="post">
            {post && 
              <>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
                <p className="postBody">{post.body}</p>
                <Link to={`/edit-post/${post.id}`}>
                  <button className="editButton">Edit Post</button>
                </Link>
                <button className="deleteButton" onClick={()=> handelDelete(post.id)}>Delete post</button>
              </>
            }
            {!post &&
              <>
                <h2>Post Not exist</h2>
                <p> Well , that's disappointing </p>
                <p>
                  <Link to="/">Visite our Home page</Link>
                </p>
              </>

            }
          </article>
      </main>
    )
  }
  
import { format } from "date-fns";
import {  useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
export default function EditPost() {
    const editedPostTitle=useStoreState((state)=>state.editedPostTitle);
    const editedPostBody=useStoreState((state)=>state.editedPostBody);
    const setEditedPostTitle=useStoreActions((actions)=>actions.setEditedPostTitle);
    const setEditedPostBody=useStoreActions((actions)=>actions.setEditedPostBody);
    const getPostById=useStoreState((state)=>state.getPostById);
    const editPost=useStoreActions((actions)=>actions.editPost);
    const { id } = useParams();
    const navigate = useNavigate();
    const post = getPostById(id);

    useEffect(()=>{
        if(post){
            setEditedPostBody(post.body);
            setEditedPostTitle(post.title);
        }
    } , [post , setEditedPostBody , setEditedPostTitle]);

    const handelEdit = (id)=>{
        const datetime = format(new Date() , 'MMMM dd, yyyy pp');
        const updatedPost =  { id , title: editedPostTitle , datetime , body: editedPostBody };
        editPost(updatedPost);
        navigate('/');
      }
  return (
    <main className="NewPost">
          {
            editedPostTitle && 
            <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e)=> e.preventDefault()} >
                    <label htmlFor="postTitle">Title:</label>
                    <input
                        id="postTitle"
                        type="text"
                        required
                        value={editedPostTitle}
                        onChange={(e)=>setEditedPostTitle(e.target.value)}
                    />
                    <label htmlFor="postTitle">Post:</label>
                    <textarea
                        id="postBody"
                        required
                        value={editedPostBody}
                        onChange={(e)=>setEditedPostBody(e.target.value)}
                    />
                    <button type="submit" onClick={()=> handelEdit(post.id)}>Submit</button>
                </form>
            </>
          }
          {
            !editedPostTitle && 
                <>
                    <h2>Post Not exist</h2>
                    <p> Well , that's disappointing </p>
                    <p>
                        <Link to="/">Visite our Home page</Link>
                    </p>
                </>
          }
    </main>
  )
}

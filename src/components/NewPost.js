import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
export default function NewPost() {
  const postTitle=useStoreState((state)=>state.postTitle); 
  const setPostTitle=useStoreActions((actions)=>actions.setPostTitle);
  const postBody=useStoreState((state)=>state.postBody); 
  const setPostBody=useStoreActions((actions)=>actions.setPostBody);
  const posts=useStoreState((state)=>state.posts);
  const savePost=useStoreActions((actions)=>actions.savePost);
  const navigate = useNavigate();
  
  const handelSubmit = (e)=>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id+1:1;
    const datetime = format(new Date() , 'MMMM dd, yyyy pp');
    const newPost =  { id , title: postTitle , datetime , body: postBody };
    savePost(newPost);
    navigate('/');
  }
    return (
      <main className="NewPost">
          <h2>NewPost</h2>
          <form className="newPostForm" onSubmit={handelSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={postTitle}
              onChange={(e)=>setPostTitle(e.target.value)}
            />
            <label htmlFor="postTitle">Post:</label>
            <textarea
              id="postBody"
              required
              value={postBody}
              onChange={(e)=>setPostBody(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
      </main>
    )
  }
  
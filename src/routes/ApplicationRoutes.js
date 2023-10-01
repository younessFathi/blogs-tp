import Home from "../components/Home";
import NewPost from "../components/NewPost";
import EditPost from "../components/EditPost";
import PostPage from "../components/PostPage";
import About from "../components/About";
import Missing from "../components/Missing";

export const appRouting = [
    {
      path: '/',
      component : <Home />
    },
    {
      path: 'new-post',
      component : <NewPost />
    },
    {
      path: 'edit-post/:id',
      component : <EditPost />
    },
    {
      path: 'post-page/:id',
      component : <PostPage />
    },
    {
      path: 'about',
      component : <About />
    },
    {
      path: '*',
      component : <Missing />
    }
  ]
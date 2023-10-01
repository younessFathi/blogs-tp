import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';
import About from './components/About';
import Missing from './components/Missing';
import { Route, Routes } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
function App() {
  const {data , fetchError , isLoading }=useAxiosFetch();
  const setPosts=useStoreActions((actions)=>actions.setPosts);
  useEffect(
    ()=>{
     setPosts(data);
    } , [data , setPosts]);
  return (
    <div className="App">
        <Header title="React js blog youness" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} fetchError={fetchError} />}/>
          <Route path="new-post" element={<NewPost />}/>
          <Route path="edit-post/:id" element={<EditPost />}/>
          <Route path="post-page/:id" element={<PostPage />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<Missing />}/>
        </Routes>
          <Footer />
    </div>
  );
}

export default App;

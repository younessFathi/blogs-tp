import Feed from "./Feed";
import { useStoreActions , useStoreState } from "easy-peasy";
import { useEffect } from "react";

export default function Home({fetchError , isLoading }) {
  const setSearchResults=useStoreActions((actions)=>actions.setSearchResults);
  const searchResults =useStoreState((state)=>state.searchResults); 
  const posts=useStoreState((state)=>state.posts); 
  const search=useStoreState((state)=>state.search);

    useEffect(
      ()=>{
        const newPosts = posts.filter(post=> post.body.toLocaleLowerCase().includes(search) || post.title.toLocaleLowerCase().includes(search));
        setSearchResults(newPosts.reverse());
      } , [posts , search , setSearchResults]);
    return (
      <main className="Home">
        {isLoading && !fetchError && (<p className="statusMsg">Loading posts...</p>)}
        {fetchError && (<p className="statusMsg" style={ {color: 'red'} }>{fetchError}</p>)}
        {!isLoading && !fetchError &&  (searchResults && searchResults.length ? <Feed posts={searchResults} />: <p>No posts to display.</p>)}
      </main>
    )
  }
  
import { useStoreState , useStoreActions} from "easy-peasy";
import { Link } from "react-router-dom";

export default function Nav() {
  const search=useStoreState((state)=>state.search); 
  const setSearch=useStoreActions((actions)=>actions.setSearch);
    return (
      <nav className="Nav">
          <form className="searchForm" onSubmit={(e)=> e.preventDefault()}>
            <label className="search"> Search Posts </label>
            <input 
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                />
          </form>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-post">Post</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
      </nav>
    )
  }
  
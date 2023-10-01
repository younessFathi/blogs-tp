import { useStoreState } from "easy-peasy"

export default function Footer() {
  const postCount=useStoreState((state)=>state.postCount);
    return (
      <footer>
          {postCount} Blog Post
      </footer>
    )
  }
  
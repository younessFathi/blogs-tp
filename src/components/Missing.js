import { Link } from "react-router-dom";

export default function Missing() {
    return (
      <main className="Missing">
          <h2>Post Not exist</h2>
          <p> Well , that's disappointing </p>
          <p>
            <Link to="/">Visite our Home page</Link>
          </p>
      </main>
    )
  }
  
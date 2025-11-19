import { NavLink } from 'react-router'

export default function NavBar() {
  return (
    <header className="mt-nav">
      <div className="mt-nav-outer">
        <nav className="mt-nav-pill" aria-label="Primary">
          <NavLink end to="/" className="mt-link">
            Home
          </NavLink>
          <NavLink to="/saved-songs" className="mt-link">
            Saved Songs
          </NavLink>
          <NavLink to="/aboutme" className="mt-link">
            About
          </NavLink>


          {/* Add more when ready:
          <NavLink to="/moods" className="mt-link">Moods</NavLink>
          <NavLink to="/library" className="mt-link">Library</NavLink>
          */}
        </nav>
      </div>
    </header>
  );
}


export default function Navbar() {


  return (
    <div className="navbar bg-[#0C566D] shadow-sm fixed w-full backdrop-blur-md z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle bg-[#992b39]"
          >
            <svg
              xmlns="../gl.png"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-white menu menu-sm dropdown-content bg-[#992b39] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/service">OUR SERVICE</a>
            </li>
            <li>
              <a href="/aboutus">ABOUT US</a>
            </li>
            <li>
              <a href="/team">OUR TEAMS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a
          className="btn btn-ghost text-xl text-white hover:bg-[#992b39] hover:border-[#992b39]"
          href="/"
        >
          GEOLAND SURVEY
        </a>
      </div>
      <div className="navbar-end text-white ">
        <button className="btn btn-ghost btn-circle hover:bg-[#992b39]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button>
        
      </div>
    </div>
  );
}

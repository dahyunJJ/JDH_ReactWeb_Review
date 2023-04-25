import { Link } from "react-router-dom";
import Watch from "./Watch";

function Header({ urlName , recentItems}) {
  let bar = urlName === "/" ? "" : "bar";

  document.querySelectorAll(".gnb a").forEach((item) => {
    item.classList.remove("on");
    if (item.getAttribute("href") === urlName) item.classList.add("on");
    else if (
      urlName.indexOf("/detail/") === 0 &&
      item.getAttribute("href") === "/Shop"
    )
      item.classList.add("on");
  });

  return (
    <header className={`Header mw ${bar}`}>
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
      </Link>
      <div>
        <nav className="gnb">
          <Link to="/Shop">Shop</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/OurStory">Our Story</Link>
        </nav>
        <nav className="icon">
          <Link to="/Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="/Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="/Search">
            <i className="fa-solid fa-user"></i>
          </Link>
        </nav>
      </div>
       <Watch recentItems={ recentItems} />
    </header>
  );
}

export default Header;

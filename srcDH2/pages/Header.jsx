import { Link } from "react-router-dom";
function Header({ urlname }) {
  let bar = urlname === "/" ? "" : "bar";

  document.querySelectorAll(".gnb a").forEach((item) => {
    item.classList.remove("on");
    if (item.getAttribute("href") === urlname) item.classList.add("on");
    else if (
      urlname.indexOf("/detail/") === 0 &&
      item.getAttribute("href") === "/Shop"
    )
      item.classList.add("on");
  });

  // document.querySelectorAll(".gnb a").forEach((item) => {
  //   item.classList.remove("on");
  //   if (item.getAttribute("href") === urlname) {
  //     item.classList.add("on");
  //   }
  // });

  // if (urlname.indexOf("/detail/") === 0) {
  //   document.querySelectorAll(".gnb a").forEach((item) => {
  //     item.classList.remove("on");
  //     if (item.getAttribute("href") === "/Shop") {
  //       item.classList.add("on");
  //     }
  //   });
  // }

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
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";

function Header({ subName }) {
  let bar = subName === "/" ? "" : "bar";
  // console.log(subName);
  let linkName = document.querySelectorAll(".gnb > a");

  linkName.forEach((item) => {
    item.classList.remove("on");
    if (item.getAttribute("href") === subName) {
      item.classList.add("on");
    } else if (
      subName.indexOf("/Detail/") === 0 &&
      item.getAttribute("href") === "/Shop"
    )
      item.classList.add("on");
  });

  return (
    <>
      <header className={`hd mw ${bar}`}>
        <h1>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
          </Link>
        </h1>
        <nav className="gnb">
          <Link to="/Shop">Shop</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Story">Our Story</Link>
        </nav>
        <div className="person">
          <Link to="/">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="/Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="/">
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;

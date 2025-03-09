import logo from "../../assets/logo.png";
export const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary px-5 position">
      <div className="container-fluid alineNav">
        
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="145"
            height="25"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="d-flex justify-content-start">
          <ul className="navbar-nav flex-row gap-5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How it Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

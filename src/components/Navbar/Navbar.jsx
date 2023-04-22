import React from 'react';
import Btn from '../Utilities/Btn';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
  <div className="container">
    <a className="navbar-brand fw-normal fst-italic text-light fs-1" href="#">tausif</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Work Process</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex gap-2" role="search">
        <Btn text="LOG IN" classes={"btn btn-outline-light p-2 px-4 fw-semibold"} />
        <Btn text="SIGN UP" classes={"btn btn-light p-2 px-4 fw-semibold"} />
      </form>
    </div>
  </div>
</nav>
    );
};

export default Navbar;
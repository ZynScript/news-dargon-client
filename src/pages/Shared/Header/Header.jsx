import logo from "/assets/logo.png";
import moment from "moment";
import {Button, Container, Nav} from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container className="py-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <h5 className="text-secondary mt-3">
          Journalism Without Fear or Favour
        </h5>
        <p className="fs-5">
          <b className="me-2">{moment().format("dddd,")}</b>
          {moment().format("MMMM Do YYYY")}
        </p>
      </div>
      <div className="d-flex gap-3 bg-secondary bg-opacity-25 p-3 rounded">
        <Button variant="danger">LATEST</Button>
        <Marquee className="fw-semibold fs-5 text-black">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;

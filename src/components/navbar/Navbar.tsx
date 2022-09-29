import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
  const [navs, setNavs] = useState(["Dogs", "Cats"]);
  const [step, setStep] = useState("step_0");
  useEffect(() => {
    Array.from(
      document.getElementsByClassName(step) as HTMLCollectionOf<HTMLElement>
    )[0].style.background = "#E0E0E0";
  }, []);
  const selectedStep = (nextStep: any) => {
    Array.from(
      document.getElementsByClassName(nextStep) as HTMLCollectionOf<HTMLElement>
    )[0].style.background = "#E0E0E0";
    Array.from(
      document.getElementsByClassName(step) as HTMLCollectionOf<HTMLElement>
    )[0].style.background = "white";
    setStep(nextStep);
  };
  return (
    <Nav
      className="flex"
      variant="tabs"
      defaultActiveKey="Dogs"
      onSelect={(selectedKey) => selectedStep(selectedKey)}
    >
      {navs.map((nav, i) => {
        return (
          <Nav.Item
            key={nav}
            className={`nav margin-right-30 step_${i.toString()}`}
          >
            <Nav.Link eventKey={`step_${i.toString()}`}>{nav}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

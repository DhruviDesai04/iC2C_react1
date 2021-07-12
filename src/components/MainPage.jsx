import React from "react";
import Search from "./Search";
import Filters from "./Filters";
import Cards from "./Cards";
import filtersdata from "../filtersdata";
import cardsdata from "../cardsdata";
// import dates from "../dates";
// import company from "../company";
// import field from "../field";
// import ratings from "../ratings";
// import price from "../price";
import { Col, Row, CardGroup } from "react-bootstrap";
import $ from "jquery";

function createData(datas) {
  return (
    <Filters
      key={datas.id}
      id={datas.id}
      name={datas.name}
      data1={datas.data1}
      data2={datas.data2}
      data3={datas.data3}
      data4={datas.data4}
      data5={datas.data5}
    />
  );
}

function cardsInfo(info) {
  return (
    <Cards
      key={info.id}
      name={info.name}
      img={info.img}
      company={info.company}
      logo={info.logo}
      education={info.education}
      description={info.description}
    />
  );
}

function MainPage() {
  const handleToggle = () => {
    $(".filtersContain ul").toggle();
    $(".filtersContain .buttonFilter span").toggleClass("rotate");
  };

  return (
    <div>
      <Search />
      <Row>
        <Col lg={3}>
          <div className="filters">
            <div className="filtersContain">
              <button
                className="buttonFilter button filtersHeading"
                onClick={handleToggle}
              >
                <h4>Filters</h4>
                <span className="fas fa-caret-down"></span>
              </button>
              <input type="checkbox" id="btn"></input>
              <ul className="menu">{filtersdata.map(createData)}</ul>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="cards">
            <CardGroup className="m-5">{cardsdata.map(cardsInfo)}</CardGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;

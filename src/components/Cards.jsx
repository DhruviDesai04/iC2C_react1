import React from "react";
import { Card } from "react-bootstrap";

function Cards(props) {
  return (
    <Card className="shadow-sm text-center border-0 m-4 rounded-3">
      <div className="container1">
        <h3>{props.name}</h3>
        <img
          className="card-img-top m-auto cardImg w-75 rounded-pill"
          src={props.img}
          alt="Card"
        ></img>
        <Card.Body className="p-1">
          <Card.Title>
            <h5>
              <span>
                <img className="microsoft" src={props.logo} alt=""></img>
              </span>
              {props.company}
            </h5>
          </Card.Title>
        </Card.Body>
      </div>
      <div className="container2 p-2">
        <h6>{props.education}</h6>
        <Card.Text>
          <div>
            <p>{props.description}</p>
          </div>
        </Card.Text>
      </div>
      <Card.Footer className="p-0 border-0 rounded-3 bg-none">
        <button class="readMore">Read More...</button>
      </Card.Footer>
    </Card>
  );
}

export default Cards;

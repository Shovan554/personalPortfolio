import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg shadow-lg border-0" style={{ backgroundColor: '#356887' }}>
      <Container>
        <div className="p-2">
          <Row>
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Hire me!</h2>
              <p className="lead text-white mt-3"></p>
              <p className="text-white mt-3">{bio}</p>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;

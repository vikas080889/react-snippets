import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchView from "../search/SearchView";

export const Welcome = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <SearchView url="/search1" title="Search Direct" />
          <SearchView url="/search2" title="Search Input" />
          <SearchView url="/search3" title="Search Submit" />
        </Row>
      </Container>
    </Fragment>
  );
};

import React from "react";
import styled from "styled-components";

import breakpoints from "../helpers/styles/breakpoints";

const EventsContainer = styled.div`
  display: block;
  position: relative;
  padding: 25px;
  @media ${breakpoints.mobileX} {
    width: calc(100% - 130px);
    margin: auto;
  }
`;
const EventsTitle = styled.h1`
  @media ${breakpoints.mobileX} {
    transform: rotate(90deg);
    transform-origin: left top 0;
    position: relative;
  }
`;
const EventsContent = styled.div`
  border-left: 15px solid #105327;
  padding: 20px;
  line-height: 2.6;
  font-size: 16px;
  margin-top: 30px;
  height: calc(100vh - 200px);
  @media ${breakpoints.mobileX} {
    height: calc(100vh - 200px);
    line-height: 2.6;
  }

  p {
    font-family: "Roboto Mono", monospace;
    text-transform: uppercase;
  }

  mark {
    display: inline-block;
    font-size: 26px;
    font-family: "Anonymous Pro";
    text-transform: capitalize;
    background-color: transparent;
    border: 2px solid #e4be04;
    padding: 0 10px;
    line-height: 2;
    @media ${breakpoints.mobileX} {
      font-size: 36px;
      padding: 20px 20px 5px 20px;
    }
  }
`;

const Events = () => {
  return (
    <EventsContainer>
      <EventsTitle id="events">Events</EventsTitle>
      <EventsContent>
        <p>
          Coming <mark>soon...</mark>
        </p>
      </EventsContent>
    </EventsContainer>
  );
};

export default Events;

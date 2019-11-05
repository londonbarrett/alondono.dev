import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  background: black;
  content-align: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const Summary = () => (
  <Container>
    <h1>Summary</h1>
    <ul>
      <li>Qualifications &amp; Skills</li>
      <li>Case Studies</li>
      <li>Contact</li>
      <li>Quick facts &amp; other</li>
      <li>Experience (Timeline)</li>
    </ul>
  </Container>
);

export default Summary;

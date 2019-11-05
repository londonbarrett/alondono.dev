import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  border-bottom: 1px solid white;
  font-size: 6vw;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 4vw;
  margin: 0;
`;

const Header = () => (
  <Container>
    <Title>Andrés Londoño</Title>
    <Subtitle>Software Engineer</Subtitle>
    <p>
      I am a Senior Software Engineer with more than ten years of
      experience in web application development, always open to new
      challenges, my priority is to deliver high quality standards
      and apply best practices in testable and maintainable code.
    </p>
  </Container>
);

export default Header;

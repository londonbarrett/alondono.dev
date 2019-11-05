import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.section`
  height: 100vh;
  padding: 10vh 10vw;
`;

const Intro = () => {
  const scrollHandler = event => console.log('fack');
  return (
    <Container onScroll={scrollHandler}>
      <Header />
    </Container>
  );
}

export default Intro;

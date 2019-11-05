import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Intro from './components/Intro';
import Summary from './components/Summary';
import Skills from './components/Skills';
import SideName from './components/SideName';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    background: #282c34;
    color: #FFF;
    font-family: Cairo;
    font-size: 2vw;
    height: 100vh;
  }
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  div#root {
    height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
`;

const Main = styled.main`
  width: 80vw;
`;

function App() {
  const scrollHandler = event => console.log(event.target.scrollHeight, event.target.scrollTop);
  return (
    <>
      <GlobalStyle />
      <Container onScroll={scrollHandler}>
        <SideName />
        <Main>
          <Intro />
          <Summary />
          <Skills />
        </Main>
      </Container>
    </>
  );
}

export default App;

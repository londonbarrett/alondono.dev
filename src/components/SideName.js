import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
    display: flex;
    position: relative;
    width: 20vw;
`;

const Content = styled.div`
    align-items: center;
    display: flex;
    height: 20vw;
    left: 0;
    position: absolute;
    top: 100%;
    transform: rotate(-90deg);
    transform-origin: top left;
    width: 100vh;
`;

const Name = styled.h1`
    font-size: 20px;
    width: 100vh;
`;

const SideName = () => (
    <Container>
        <Content>
            <Name>REACT - REDUX - TYPESCRIPT - NODEJS - GRAPHQL - POSTGRES - NOSQL - KUBERNETES - DOCKER - ANGULAR - VUEJS - </Name>
        </Content>
    </Container>
);

export default SideName;

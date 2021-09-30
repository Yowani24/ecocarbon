import React from 'react';
import styled from 'styled-components';

export default function successPage(props) {
    return (
        <Thankyou>
            <h1>Thank you for buying with us</h1>
        </Thankyou>
    );
}

const Thankyou = styled.div`
    color: deepskyblue;
`
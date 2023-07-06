import { useState, useEffect } from "react";
import styled from "styled-components";

import { gsap, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Loader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            setCounter((counter) =>
                counter < 100
                    ? counter + 1
                    : (clearInterval(count), setCounter(100))
            );
        }, 25);
    }, []);

    return (
        <Loading>
            <Follow className="follow"></Follow>
            <ProgressBar
                className="hide"
                id="progress-bar"
                style={{ width: counter + "%" }}
            ></ProgressBar>
            <Count id="count" className="hide">
                {counter}%
            </Count>
        </Loading>
    );
};

export default Loader;

const Loading = styled.div`
    height: 100%;
    width: 100%;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
`;
const Follow = styled.div`
    position: absolute;
    background-color: #f48049;
    height: 2px;
    width: 0;
    left: 0;
    z-index: 2;
`;

const ProgressBar = styled.div`
    position: absolute;
    left: 0;
    background-color: #fff;
    height: 2px;
    width: 0;
    transition: 0.4s ease-out;
`;

const Count = styled.p`
    position: absolute;
    font-size: 130px;
    color: #fff;
    transform: translateY(-15px);
    font-weight: 500;
`;

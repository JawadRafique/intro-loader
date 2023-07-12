import { useState, useEffect } from "react";
import styled from "styled-components";

import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Loader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const count = setInterval(() => {
            setCounter((counter) =>
                counter < 100
                    ? counter + 1
                    : (clearInterval(count),
                      setCounter(100),
                      afterIntroAnimation())
            );
        }, 25);
    }, []);

    const afterIntroAnimation = () => {
        const t1 = gsap.timeline({
            onComplete: () => {
                console.log("completed");
            },
        });

        t1.to(".follow", {
            width: "100%",
            duration: 1.2,
            delay: 0.7,
            ease: Expo.easeInOut,
        });

        t1.to(
            "#count",
            {
                // backgroundColor: "#121212",
                color: "#121212",
                duration: 0.1,
                ease: Expo.easeInOut,
            },
            "-=0.7"
        );
    };

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
    background-color: #121212;
    height: 2px;
    width: 0;
    right: 0;
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

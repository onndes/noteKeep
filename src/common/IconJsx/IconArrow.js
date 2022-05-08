import React from "react";

import { Svg, G, Path } from "react-native-svg";

function IconArrow({
    color = "red",
    width = 18,
    height = 20,
    direction = "left",
}) {
    let transform = "matrix(-1 0 0 1 24 0) translate(4 3) rotate(0)";
    if (direction === "bottom") {
        transform = "matrix(-1 0 0 1 24 0) translate(21 3) rotate(90)";
    } else if (direction === "right") {
        transform = "matrix(-1 0 0 1 24 0) translate(21 23) rotate(180)";
    } else if (direction === "top") {
        transform = "matrix(-1 0 0 1 24 0) translate(3 21) rotate(-90)";
    }
    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 18 20'
            fill='none'>
            <G
                fill='none'
                fillRule='evenodd'
                stroke='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
            >
                <G id='arrow' stroke={color} transform='translate(-219 -26)'>
                    <G transform='translate(216 24)'>
                        <G strokeWidth='2' transform={transform}>
                            <Path d='M0 9h16M16 9L7.938.938M16 9l-8.062 8.062'></Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    );
}

export default IconArrow;

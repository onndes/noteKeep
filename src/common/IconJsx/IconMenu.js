import React from "react";
import { SvgCss } from "react-native-svg";

const xml = `
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='96'
        height='96'
        x='0'
        y='0'
        version='1.1'
        viewBox='0 0 96 96'
        xmlSpace='preserve'
        fill="white"
        >
            <g>
                <path d='M12 28h72a4 4 0 000-8H12a4 4 0 000 8zm72 16H12a4 4 0 000 8h72a4 4 0 000-8zm0 24H12a4 4 0 000 8h72a4 4 0 000-8z'></path>
            </g>
    </svg>`;

function IconMenu({ fill = "red", width = 48, height = 48 }) {
    return <SvgCss xml={xml} fill={fill} width={width} height={height} />;
}

export default IconMenu;

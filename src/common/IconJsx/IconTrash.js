import React from "react";
import { Svg, Path } from "react-native-Svg";

function IconTrash({ fill = "red", width = 24, height = 24 }) {
    return (
        <Svg
            xmlns='http://www.w3.org/2000/Svg'
            version='1.1'
            viewBox='0 0 32 32'
            xmlSpace='preserve'
            fill={fill}
            width={width}
            height={height}>
            <Path
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
                d='M25 10H7v17a2 2 0 002 2h14a2 2 0 002-2V10z'></Path>
            <Path
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
                d='M20 7h-8V5a2 2 0 012-2h4a2 2 0 012 2v2z'></Path>
            <Path
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
                d='M28 10H4V8a1 1 0 011-1h22a1 1 0 011 1v2z'></Path>
            <Path
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
                d='M16 15L16 24'></Path>
            <Path
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
                d='M12 15L12 24'></Path>
            <Path
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
                d='M20 15L20 24'></Path>
        </Svg>
    );
}

export default IconTrash;

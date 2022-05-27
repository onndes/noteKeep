import React from "react";
import { Svg, Path, G, Switch } from "react-native-svg";

function IconArchive({ fill = "red", width = 24, height = 24 }) {
    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            fill={fill}
            width={width}
            height={height}
            x='0'
            y='0'
            enableBackground='new 0 0 478.125 478.125'
            version='1.1'
            viewBox='0 0 478.125 478.125'
            xmlSpace='preserve'>
            <Path d='M153 191.25L239.062 277.312 325.125 191.25 309.825 177.862 248.625 239.062 248.625 28.688 229.5 28.688 229.5 239.062 168.3 177.862z'></Path>
            <Path d='M382.5 124.312H267.75v19.125h103.275l84.149 133.875h-130.05v38.25c0 21.037-17.213 38.25-38.25 38.25H191.25c-21.038 0-38.25-17.213-38.25-38.25v-38.25H22.95l84.15-133.875h103.275v-19.125H95.625L0 277.312V449.436h478.125V277.313L382.5 124.312zm76.5 306H19.125V296.438h114.75v28.688c0 26.775 21.038 47.812 47.812 47.812h114.75c26.775 0 47.812-21.037 47.812-47.812v-28.688H459v133.874z'></Path>
        </Svg>
    );
}

export default IconArchive;

import React from "react";

const Logo = ({ w, h }) => {
    return (
        <div className="flex items-center">
            <div>
            <span className="text-red-600 font-semibold">24/7</span>
            </div>
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 612 792"
                style={{
                    enableBackground: "new 0 0 612 792",
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                }}
                xmlSpace="preserve"
                width={w ? w : "20"}
                height={h ? h : "20"}
                className="h-10 w-10 mr-2"
            >
                <style type="text/css">
                    {`.st0{fill:#2E3192;stroke:#000000;stroke-miterlimit:10;}
                    .st1{fill:none;stroke:#000000;stroke-width:17;stroke-miterlimit:10;}`}
                </style>
                <path
                    className="st0"
                    d="M295.83,262.61l-0.12,15.91l-0.23,30.03l-0.5,67.46l-0.35,47.51l-0.4,53.09l-0.3,40.56l-0.44,59.21l-45.86-0.01
                    l0.44-59.21l0.31-40.56l-66.92-0.02l0.39-53.09l66.92,0.02l0.35-47.51l0.51-67.47l0.08-11.74c-6.61,3.58-12.96,7.51-19.02,11.74
                    c-19.34,13.5-35.78,30.14-48.35,49.07c-3.93,5.91-7.48,12.04-10.62,18.38c-7.38,14.87-12.52,30.82-15.01,47.51
                    c-1.16,7.68-1.76,15.52-1.76,23.49c0,10.09,0.95,19.98,2.79,29.6c2.7,14.17,7.3,27.77,13.56,40.56c2.9,5.92,6.15,11.66,9.73,17.22
                    l-0.31,41.99l-36.54-0.01h-20.56l0.27-35.37l0.17-23.84l0.31-40.56l0.39-53.09l0.35-47.51l0.17-22.62
                    c7.63-16,17.13-31.04,28.24-44.84c8.83-11,18.68-21.22,29.42-30.52c6.28-5.46,12.87-10.6,19.73-15.41l47.3,0.01L295.83,262.61z"
                />
                <path
                    className="st0"
                    d="M520.39,305.46l-0.02,3.15l-0.5,67.46h-3.65c1.27,2.54,3.05-7.68,4.17-5.07l-0.88,52.58l-0.39,53.09
                    l-0.27,35.59v0.06c-0.73,1.66-1.51,3.3-2.3,4.92c-11.08,22.61-27.35,42.74-47.46,59.19h-2.64l0.45-59.21l0.3-40.56l0.39-53.09
                    l-76.25-0.02l-0.4,53.09l-0.3,40.56l-0.44,59.21l-53.7-0.01l0.44-59.21l0.3-40.57l0.39-53.09l0.36-47.51l0.5-67.46l0.28-37.38
                    l0.06-8.56l53.7,0.01l-0.11,15.95l-0.23,29.99l-0.5,67.47l76.25,0.01l0.44-59.1l0.07-8.36l0.34-45.94h5.04
                    C491.28,274.89,506.95,289.3,520.39,305.46z"
                />
                <ellipse
                    className="st1"
                    cx="321"
                    cy="428"
                    rx="261"
                    ry="252"
                />
            </svg>    
            <span className="text-blue-600 font-semibold">ONLINE</span>
        </div>
    );
};

export default Logo;

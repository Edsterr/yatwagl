import React from "react";
import aspectRatioStyles from "./aspect-ratio.css.js";


const FixedAspectRatio = ({ children }) => {

    // This wraps all the other components to keep them within the given aspect ratio
    // these are subject to refactoring
    // the ratio is hard-coded for now, will enable dynamic setting
    // when refactoring

    return (
        <div id="appWrapper" style={aspectRatioStyles.appWrapper}>
            <div id="appFullScreen" style={aspectRatioStyles.appFullScreen}>
                <div id="aspectRatioWrapper" style={aspectRatioStyles.aspectRatioWrapper}>
                    <div id="aspectRatioInner" style={aspectRatioStyles.aspectRatioInner}>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixedAspectRatio;

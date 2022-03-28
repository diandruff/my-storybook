import React, { useState } from "react";
import "../scss/divider.scss";
import PropTypes from "prop-types";
export interface DividerProps {
  contentAlignment: "start" | "center" | "end";
  lineStyle: "solid" | "dashed" | "dotted";
  lineWeight: "light" | "regular" | "heavy";
}

export const Divider = ({
  contentAlignment,
  lineStyle,
  lineWeight,
  ...props
}: DividerProps) => {
  const [lineStyleValue, setLineStyleValue] = useState("");

  const getLineStyle = () => {
    let cls = "divider__line--grow";
    if (lineStyle === "solid") {
      cls += " divider__line--solid";
    } else if (lineStyle === "dashed") {
      cls += " divider__line--dashed";
    } else if (lineStyle === "dotted") {
      cls += " divider__line--dotted";
    }

    return cls;
  };

  const getWeight = () => {
    if (lineWeight === "light") {
      return 1;
    } else if (lineWeight === "regular") {
      return 3;
    } else if (lineWeight === "heavy") {
      return 5;
    }
  };

  return (
    <body>
      <div>
        {contentAlignment === "start" && (
          <div className="row">
            <div className="container divider">
              <div className="divider__label ">Start</div>
              <hr className={getLineStyle()} size={getWeight()}></hr>
            </div>
          </div>
        )}
        {contentAlignment === "center" && (
          <div className="row">
            <div className="container divider">
              <hr className={getLineStyle()} size={getWeight()}></hr>
              <div className="divider__label">Center</div>
              <hr className={getLineStyle()} size={getWeight()}></hr>
            </div>
          </div>
        )}
        {contentAlignment === "end" && (
          <div className="row">
            <div className="container divider">
              <hr className={getLineStyle()} size={getWeight()}></hr>
              <div className="divider__label">End</div>
            </div>
          </div>
        )}
      </div>
    </body>
  );
};

Divider.propTypes = {
  contentAlignment: PropTypes.oneOf(["start", "center", "end"]),
  lineStyle: PropTypes.oneOf(["solid", "dashed", "dotted"]),
  lineWeight: PropTypes.oneOf(["light", "regular", "heavy"]),
};

Divider.defaultProps = {
  contentAlignment: "center",
  lineStyle: "solid",
  lineWeight: "regular",
};

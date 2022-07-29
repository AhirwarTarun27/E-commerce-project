import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useMemo } from "react";
import "./ProductCard.css";

export const Star = (rating: any, count: number, color: any) => {
  const getColor = (index: any) => {
    if (rating.rating >= index) {
      return rating.color.filled;
    } else {
      return rating.color.unfilled;
    }
  };
  const starRating = useMemo(() => {
    return Array(rating.count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((_, index) => (
        <FontAwesomeIcon
          key={index}
          style={{ color: getColor(index) }}
          icon={faStar as IconProp}
        />
      ));
  }, [count, rating]);
  return <div className="starRating">{starRating}</div>;
};

Star.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Star.defaultProps = {
  count: 5,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};

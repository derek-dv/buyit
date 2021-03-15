import React, { Fragment } from "react";
import "../styles/Rating.css";
import { Star, StarBorderOutlined, StarHalf } from "@material-ui/icons";

const Rating = ({ rating }) => {
  return (
    <div className="Rating">
      {rating === "5.0" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "4.5" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <StarHalf fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "4.0" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "3.5" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <StarHalf fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "3.0" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "2.5" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <StarHalf fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "2.0" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "1.5" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <Star fontSize="small" className="Rating__gold" />
          <StarHalf fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "1.0" ? (
        <Fragment>
          <Star fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "0.5" ? (
        <Fragment>
          <StarHalf fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : rating === "0" ? (
        <Fragment>
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
          <StarBorderOutlined fontSize="small" className="Rating__gold" />
        </Fragment>
      ) : (
        <Star fontSize="small" className="Rating__gold" />
      )}
    </div>
  );
};

export default Rating;

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types'

export default function FullWidthImage(props) {
    const {
      height = 400,
      img,
      imgPosition = "top left",
    } = props

    return (
        <React.Fragment>
            <div className="margin-top-0" style={{ display: "grid"}}>
                {img?.url ? (
                   <img
                       src={img}
                       objectFit={"cover"}
                       objectPosition={imgPosition}
                       style={{
                       gridArea: "1/1",
                       // You can set a maximum height for the image, if you wish.
                       height: height,
                       width: "100%",
                       }}
                       // You can optionally force an aspect ratio for the generated image
                       aspectratio={3 / 1}
                       // This is a presentational image, so the alt should be an empty string
                       alt=""
                       formats={["auto", "webp", "avif"]}
                   />
                   ) : (
                   <GatsbyImage
                       image={getImage(img)}
                       objectFit={"cover"}
                       objectPosition={imgPosition}
                       style={{
                       gridArea: "1/1",
                       // You can set a maximum height for the image, if you wish.
                       height: height,
                       }}
                       layout="fullWidth"
                       // You can optionally force an aspect ratio for the generated image
                       aspectratio={3 / 1}
                       // This is a presentational image, so the alt should be an empty string
                       alt=""
                       formats={["auto", "webp", "avif"]}
                   />
                )}
            </div>
        </React.Fragment>
    )
}

FullWidthImage.propTypes = {
    img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    height: PropTypes.number,
};
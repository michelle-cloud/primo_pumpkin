/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Silent Night Music Video",
    description:
      "Rachael Coltrona is joined by Joondalup Symphony Orchestra for a live filming at Crank recording studio. ",
    url: "https://youtu.be/-nbhsqyslpI?si=X_HQy_Pmvi7nWdxn",
  },
  {
    title: "Snowflake Charity Ball",
    description:
      "All funds raised by kindhearted.com.au went to Perth Children's Hospital Foundation Wal-yan Respiratory Research Centre.",
    url: "https://youtu.be/RMAoo7aG_TI?si=z4qVGYBR-BTi2Le9",
  },
  {
    title: "Wedding reception short teaser",
    description:
      "Small playful highlight of the dance floor at a wedding reception.",
    url: "https://www.facebook.com/1040865767/videos/740992227468922/",
  },
  {
    title: "Wedding video highlights",
    description:
      "7-minute edit of a wedding ceremony and reception.",
    url: "https://youtu.be/qPKjzOpsYX8?si=Lz8GTjKHFmBXiVtS",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  // Inline styles
  const styles = {
    section: {
      padding: "2rem",
      backgroundColor: "#f8f9fa",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "2rem",
    },
    textContainer: {
      flex: "1",
      maxWidth: "50%",
    },
    videoContainer: {
      flex: "1",
      maxWidth: "50%",
      display: "flex",
      justifyContent: "center",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "2rem",
    },
    mid: {
      fontSize: "1rem",
      marginBottom: "1.5rem",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      fontSize: "1rem",
    },
    linkSpan: {
      marginLeft: "0.5rem",
    },
    video: {
      width: "100%",
      height: "auto",
    },
    "@media (max-width: 768px)": {
      heading: {
        fontSize: "1.5rem",
      },
      mid: {
        fontSize: "0.875rem",
      },
      link: {
        fontSize: "0.875rem",
      },
    },
    "@media (max-width: 480px)": {
      heading: {
        fontSize: "1.25rem",
      },
      mid: {
        fontSize: "0.75rem",
      },
      link: {
        fontSize: "0.75rem",
      },
    },
  };

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.textContainer}>
            <div className="top">
              <h1 style={styles.heading}>ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p style={styles.mid}>
              We are dedicated to creating memorable dining experiences with our
              passion for great taste and quality. From the freshest ingredients
              to the perfect balance of flavors, we believe that every meal
              should be a delight. Whether you're dining in or taking out, our
              focus is on delivering exceptional dishes that leave you craving
              for more. Join us for a meal and taste the difference!
            </p>
            {/* <Link to="/" style={styles.link}>
              Explore Menu{" "}
              <span style={styles.linkSpan}>
                <HiOutlineArrowRight />
              </span>
            </Link> */}
          </div>
          <div style={styles.videoContainer}>
            <video src="/Sopan.mp4" autoPlay loop muted style={styles.video} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

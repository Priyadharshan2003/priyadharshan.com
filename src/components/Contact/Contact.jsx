
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:priyadharshanchandranath@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="mailto:priyadharshanchandranath@gmail.com">priyadharshanchandranath@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/priyadharshan-chandranath/">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>
          <a href="https://www.linkedin.com/in/priyadharshan-chandranath/">linkedin.com/in/priyadharshan-chandranath/</a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Priyadharshan2003">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
          <a href="https://github.com/Priyadharshan2003">github.com/Priyadharshan2003</a>
        </li>
      </ul>
    </footer>
  );
};


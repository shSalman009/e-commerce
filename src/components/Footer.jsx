import { useEffect, useState } from "react";
import {
    AiFillFacebook,
    AiFillLinkedin,
    AiFillTwitterSquare,
} from "react-icons/ai";
import { FaGithubSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    // const { categories } = useCategory();

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 400px)").matches
    );

    useEffect(() => {
        window
            .matchMedia("(max-width: 400px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.items}>
                        <div className={styles.socialLinks}>
                            <h4>E-Commerce</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores reprehenderit rem
                                numquam ea explicabo adipisci quae facere, nihil
                                saepe eos!
                            </p>
                            <h5>Follow Us</h5>
                            <div className={styles.links}>
                                <div>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100077283967573"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <AiFillFacebook />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://twitter.com/SalmanA40538364"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <AiFillTwitterSquare />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.linkedin.com/in/salman-ahmed-77682823b/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <AiFillLinkedin />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/shSalman009"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithubSquare />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contacts}>
                            <h4>Connect With Us</h4>
                            <div>
                                <div className={styles.location}>
                                    <ImLocation size={40} />
                                    <div>
                                        <span>Meet with Us</span>
                                        <p>
                                            2593 Timbercrest Road, Chisana,
                                            Alaska Badalas United State
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.phone}>
                                    <FaPhoneSquareAlt size={40} />
                                    <div>
                                        <span>
                                            Have any question? Call Us 24/7
                                        </span>
                                        <a href="tel:+0123456789">
                                            +0123456789
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.email}>
                                    <SiMinutemailer size={40} />
                                    <div>
                                        <span>or send an email</span>
                                        <a href="mailto: shahsalmanahmed009@gmail.com">
                                            {matches
                                                ? "Send Mail"
                                                : "shahsalmanahmed009@gmail.com"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>
                        Copyright © 2022 Shah Salman Ahmed All Rights Reserved.
                        Designed by
                    </p>
                    <a
                        target="_blank"
                        href="https://dazzling-hotteok-2af0ea.netlify.app/"
                        rel="noreferrer"
                    >
                        Sh_Salman
                    </a>
                </div>
            </div>
        </div>
    );
}

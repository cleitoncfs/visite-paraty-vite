import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./BackToTopButton.css";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`back-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <FiArrowUp className="icon" />
            <span className="tooltip">Topo</span>
        </button>
    );
};

export default BackToTopButton;

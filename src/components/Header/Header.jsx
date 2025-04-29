import { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "/img/logo.png"; // Importação direta da imagem

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    // Movemos a verificação de mobile para dentro de um useEffect
    // para evitar problemas com SSR e hidratação
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        // Verificação inicial
        handleResize();

        // Listener para redimensionamento
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        if (isMobile && isMenuOpen) {
            setIsMenuOpen(false);
            setTimeout(() => {
                scrollToSection(targetId);
            }, 350);
        } else {
            scrollToSection(targetId);
        }
    };

    const scrollToSection = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight =
                document.querySelector(".header")?.offsetHeight || 80;
            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });

            window.history.replaceState(null, null, `#${targetId}`);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`header ${isScrolled ? "scrolled" : ""}`}
            ref={navRef}
        >
            <div className="limita-secao header-container">
                <img
                    src={logo} // Usando a imagem importada
                    alt="Logo Paraty"
                    className="logo"
                />

                {/* Menu Desktop */}
                <div className="desktop-nav">
                    <a
                        href="#sobre"
                        onClick={(e) => handleNavClick(e, "sobre")}
                    >
                        Sobre
                    </a>
                    <a
                        href="#pontos"
                        onClick={(e) => handleNavClick(e, "pontos")}
                    >
                        Pontos turísticos
                    </a>
                    <a
                        href="#galeria"
                        onClick={(e) => handleNavClick(e, "galeria")}
                    >
                        Galeria
                    </a>
                </div>

                {/* Menu Mobile */}
                <nav className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
                    <a
                        href="#sobre"
                        onClick={(e) => handleNavClick(e, "sobre")}
                    >
                        Sobre
                    </a>
                    <a
                        href="#pontos"
                        onClick={(e) => handleNavClick(e, "pontos")}
                    >
                        Pontos turísticos
                    </a>
                    <a
                        href="#galeria"
                        onClick={(e) => handleNavClick(e, "galeria")}
                    >
                        Galeria
                    </a>
                </nav>

                <button
                    className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;

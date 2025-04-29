import { FaExternalLinkAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="limita-secao footer-content">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Prefeitura de Paraty - Todos os
                    direitos reservados
                </p>
                <p className="footer-credits">
                    Desenvolvido por{" "}
                    <a
                        href="https://portfolio-cleiton.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                    >
                        <span>Cleiton Santos</span>
                        <FaExternalLinkAlt className="link-icon" />
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

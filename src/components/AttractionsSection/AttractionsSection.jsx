import { useRef } from "react";
import "./AttractionsSection.css";

const AttractionsSection = () => {
    const parallaxRef = useRef(null);

    return (
        <section id="pontos">
            <div className="limita-secao secao-destaque">
                <h3>Pontos Turísticos Imperdíveis</h3>

                <div className="parallax" ref={parallaxRef}>
                    <img
                        src="/img/Casa-da-Cultura.jpg" // Removido process.env.PUBLIC_URL
                        alt="Casa da Cultura"
                        loading="lazy" // Adicionado lazy loading
                    />
                </div>

                <p>
                    Aqui estão alguns dos locais mais incríveis para visitar em
                    Paraty:
                </p>

                <ul className="lista-atracoes">
                    {" "}
                    {/* Adicionada classe específica */}
                    <li>Câmara Municipal</li>
                    <li>Caminho do Ouro</li>
                    <li>Capela da Generosa</li>
                    <li>Casa da Cultura</li>
                    <li>Chafariz da Pedreira</li>
                </ul>
            </div>
        </section>
    );
};

export default AttractionsSection;

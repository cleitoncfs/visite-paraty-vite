import "./HeroSection.css";
import backgroundImage from "/img/bg-estacao.jpg"; // Importação direta da imagem de fundo

const HeroSection = () => {
    return (
        <section
            className="secao-capa"
            style={{
                backgroundImage: `url(${backgroundImage})`, // Usando a imagem importada
            }}
        >
            <div>
                <h1>Paraty</h1>
                <h2>Venha visitar</h2>
            </div>
        </section>
    );
};

export default HeroSection;

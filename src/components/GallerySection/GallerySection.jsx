import { useState } from "react";
import "./GallerySection.css";

// Importação das imagens usando o sistema de assets do Vite
import caminhoDoOuro from "/img/Caminho-do-Ouro.jpg";
import ilhaDoCedro from "/img/Ilha-do-Cedro.jpg";
import lagoaAzul from "/img/Lagoa-Azul.jpg";
import cachoeira from "/img/Cachoeira.jpg";
import cais from "/img/Cais.jpg";
import pocoIngleses from "/img/Poco-Ingleses.jpg";

const GallerySection = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    // Agora usando as imagens importadas
    const images = [
        { src: caminhoDoOuro, alt: "Caminho do Ouro" },
        { src: ilhaDoCedro, alt: "Ilha do Cedro" },
        { src: lagoaAzul, alt: "Lagoa Azul" },
        { src: cachoeira, alt: "Cachoeira" },
        { src: cais, alt: "Cais" },
        { src: pocoIngleses, alt: "Poços Ingleses" },
    ];

    const openLightbox = (src) => {
        setCurrentImage(src);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <section id="galeria">
            <div className="limita-secao">
                <h3>Galeria de Fotos</h3>
                <p>
                    Confira algumas belíssimas imagens da cidade na galeria
                    abaixo:
                </p>

                <div className="galeria">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => openLightbox(image.src)}
                        >
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>

            {lightboxOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <span
                        className="close"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                    >
                        &times;
                    </span>
                    <img
                        className="lightbox-content"
                        src={currentImage}
                        alt="Lightbox"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default GallerySection;

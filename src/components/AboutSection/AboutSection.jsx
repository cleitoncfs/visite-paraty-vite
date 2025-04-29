import { useRef } from "react";
import "./AboutSection.css";

const AboutSection = () => {
    const parallaxRef = useRef(null);

    return (
        <section id="sobre">
            <div className="limita-secao secao-destaque">
                <h3>Sobre a Cidade</h3>

                <div className="parallax" ref={parallaxRef}>
                    <img src="/img/Praca-Matriz.jpg" alt="Praça Matriz" />
                </div>

                <p>
                    Paraty é uma verdadeira viagem no tempo. Com suas ruas de
                    pedra e casarões coloniais, a cidade preserva a rica
                    história do Brasil. Ao passear por Paraty, você está imerso
                    em um passado encantador, desde os ciclos do ouro e do café
                    até sua renascença como um polo turístico vibrante.
                </p>

                <p>
                    Imagine as terras de Paraty há séculos atrás, habitadas
                    pelos índios Guaianás. Esses primeiros habitantes moldaram a
                    região, que mais tarde se transformaria na vibrante cidade
                    que conhecemos hoje. Em 1646, o povoado se transferiu para
                    um local maior e plano, dando origem ao atual Centro
                    Histórico.
                </p>

                <p>
                    No meio do século XX, Paraty começou a se reinventar com o
                    Ciclo do Turismo. Esse novo impulso se tornou a principal
                    fonte de renda e transformou a cidade em um ponto turístico
                    vital. Desde a reabertura da estrada Paraty-Cunha em 1954 e
                    a BR-101 na década de 1970, Paraty foi redescoberta e hoje é
                    um dos principais destinos turísticos do Brasil.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;

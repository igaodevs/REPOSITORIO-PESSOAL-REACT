import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-text">
            Olá a todos, eu sou <span className="purple-text">Igor C. Oliveira</span> 
            from <span className="purple-text">São Paulo, Brasil</span>.<br />
            Sou aluno da UAM e estou cursando o segundo semestre em Engenharia da Computação.<br />
            Além disso, atualmente trabalho como desenvolvedor de software freelancer na EZshop.<br />
            Além da programação, tenho algumas outras atividades que adoro fazer!
          </p>

          <ul className="about-list">
            <li className="about-activity">
              <ImPointRight /> Jogando jogos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever blogs de tecnologia
            </li>
            <li className="about-activity">
              <ImPointRight /> Viagens
            </li>
          </ul>

          <p className="about-quote">
            "Eu gosto do impossível porque lá a concorrência é menor."
          </p>

          <footer className="blockquote-footer">Igor C. Oliveira</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;

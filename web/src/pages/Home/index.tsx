import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom'; //Link substitui o href e faz a pagina nao precisar ser totalmente recarregada

import './styles.css';

import logo from '../../assets/logo.svg';
import background from '../../assets/home-background.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>

                <div className="container">
                    <main>

                        <h1>Seu markplace de coleta de resíduos.</h1>
                        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

                        <Link to="/create-point">
                            <span>
                                <FiLogIn />
                            </span>
                            <strong>Cadastre um ponto de coleta</strong>
                        </Link>
                    </main>
                    <div className="image">
                        <img src={background} alt="Ecoleta" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
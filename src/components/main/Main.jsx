import React from "react";
import './main.css'
import CardLogin from "../cardLogin/CardLogin";
import CardRegister from "../cardRegister/CardRegister";


function Main() {
    return (
        <main className="main">
            <section className="mainSection1">
                <h1>Logado</h1>
                {/* <div className="mainText">
                    <img src={chairRoadMap} alt="" />
                    <p>
                        Crie e organize seus roteiros para vídeos em um só lugar. <br />
                        No Road Maps, você pode se inscrever e adicionar novos roteiros, mantendo-os privados e acessíveis apenas para você.
                    </p>
                </div>
                <CardRegister />
                <CardLogin /> */}
            </section>
        </main>
    )
}

export default Main
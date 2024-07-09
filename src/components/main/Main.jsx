import React from "react";
import './main.css'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Main() {

    const { signout } = useAuth()
    const navigate = useNavigate()

    return (
        <main className="main">
            <section className="mainSection1">
                <h1>Logado</h1>
                <button text= "Sair" onClick={() => [signout(), navigate("/")]}>
                    sair
                </button>
            </section>
        </main>
    )
}

export default Main
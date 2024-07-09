import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './cardLogin.css'
import useAuth from "../../hooks/useAuth";

function CardLogin() {

    const { signin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos!")
            return
        }
        const res = signin(email, senha)
        if (res) {
            setError(res)
            return
        }
        navigate("/home")
    }


    return (
        <>
            <div className="container">
                <div className="containerLogin">
                    <h4>
                        Login
                    </h4>
                </div>
                <div className="containerLoginSection1">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Digite sua Senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <label>{error}</label>

                    <a href="#">Esqueceu a senha?</a>

                </div>
                <div className="containerLoginSection2">
                    <button className="button1" onClick={handleLogin}>Entrar</button>
                    {/* <button className="button2">Criar nova conta</button> */}
                    <p>
                        Não possui conta?
                        <Link to="/signup"> Registre-se</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardLogin
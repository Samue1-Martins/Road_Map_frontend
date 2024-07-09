import React, { useState } from "react";
import './cardRegister.css'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function CardRegister() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaConf, setSenhaConf] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const { signup } = useAuth()

    const handleSignup = () => {
        if (!email || !senha || !senhaConf) {
            setError("Preencha todos os campos!")
            return
        } else if (senha !== senhaConf) {
            setError("As senhas não são iguais!")
            return
        }
        const res = signup(email, senha)
        if (res) {
            setError(res)
            return
        }
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
    }

    return (
        <>
            <div className="containerRegister">
                <div className="register">
                    <h4>
                        Novo cadastro
                    </h4>
                </div>
                <div className="containerRegisterSection1">
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite o seu nome"
                        value={name}
                        onChange={(e) => [setName(e.target.value), setError("")]}
                    />
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
                    <input
                        type="password"
                        name="password"
                        placeholder="Repita sua Senha"
                        value={senhaConf}
                        onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
                    />
                    <label>{error}</label>
                </div>
                <div className="containerRegisterSection2">
                    <button className="button1" onClick={handleSignup}>Criar conta</button>
                    <p>
                        já possui conta?
                        <Link to="/"> Entre</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardRegister
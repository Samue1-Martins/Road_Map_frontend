import React from "react";
import './cardRegister.css'

function CardRegister() {
    return (
        <>
            <div className="containerRegister">
                <div className="register">
                    <h4>
                        Novo cadastro
                    </h4>
                </div>
                <div className="containerRegisterSection1">
                    <input type="text" name="name" placeholder="Nome" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" id="" placeholder="Senha" />
                </div>
                <div className="containerRegisterSection2">
                    <button className="button1">Criar conta</button>
                    <a href="#">Já possui conta? Clique aqui</a>
                </div>
            </div>
        </>
    )
}

export default CardRegister
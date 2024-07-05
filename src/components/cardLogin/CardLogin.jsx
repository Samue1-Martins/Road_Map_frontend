import React from "react";
import './cardLogin.css'

function CardLogin() {
    return (
        <>
            <div className="container">
                <div className="containerLogin">
                    <h4>
                        Login
                    </h4>
                </div>
                <div className="containerLoginSection1">
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" id="" placeholder="Senha"/>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="containerLoginSection2">
                    <button className="button1">Entrar</button>
                    {/* <button className="button2">Criar nova conta</button> */}
                    <a href="#">Não possui conta? <b>Registre-se</b></a>
                </div>
            </div>
        </>
    )
}

export default CardLogin
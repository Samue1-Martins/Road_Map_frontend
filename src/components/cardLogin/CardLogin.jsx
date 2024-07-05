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
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" id="" placeholder="Senha" />
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="containerLoginSection2">
                    <button className="button1" onClick={onclick}>Entrar</button>
                    {/* <button className="button2">Criar nova conta</button> */}
                    <p>
                        Não possui conta? <a href="#"><b> Registre-se</b></a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardLogin
import React from "react";
import './signIn.css'
import chairRoadMap from '../../assets/images/cadeiraRoadMap.png'
import CardLogin from "../../components/cardLogin/CardLogin";


function SignIn() {
    return (
        <div className="singIn">
            <div className="singInText">
                <img src={chairRoadMap} alt="" />
                <p>
                    Crie e organize seus roteiros para vídeos em um só lugar. <br />
                    No Road Maps, você pode se inscrever e adicionar novos roteiros, mantendo-os privados e acessíveis apenas para você.
                </p>
            </div>
            <CardLogin />
        </div>
    )
}

export default SignIn
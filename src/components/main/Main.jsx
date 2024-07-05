import React from "react";
import './main.css'
import CardLogin from "../cardLogin/CardLogin";
import CardRegister from "../cardRegister/CardRegister";


function Main() {
    return (
        <main className="main">
            <section className="mainSection1"> 
            <CardLogin />
            <CardRegister />
            </section>
            <section className="mainSection2">

            </section>
        </main>
    )
}

export default Main
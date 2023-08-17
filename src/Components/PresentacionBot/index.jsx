
const PresentacionBot = () => {

    return(
        <div className="Cabecera" >
            
            <section className=" h-full min-w-min ">
                <img className="logo" src="https://secubotbucket.s3.us-east-2.amazonaws.com/SecuBot.png" alt="SecuBot"/>
                <h4 className="text-center border-blue-950 font-bold">Nombre: SecuBot</h4>
                <h4 className="text-center border-blue-950 font-bold">Correo electrónico: botmi1@webex.bot</h4>
                <h4 className="text-center border-blue-950 font-xs ">👩‍💻 Desarrollado por Michelle Luna.</h4>
            </section>

            <section className=" h-full min-w-min max-w-md flex justify-center flex-col mt-2">
                <h2 className=" text-2xl sm:text-xl font-bold text-center">!HOLA, SOY SECUBOT 🤖!</h2>
                <p className="descripcionbot">Soy un bot de Webex diseñado para ayudar a cualquier persona que quiera saber sobre el portafolio de seguridad de Cisco.</p>
                <p className="descripcionbot">Búscame en webex con mi correo: botmi1@webex.bot</p>
                <button className="botonWebex" href="webexteams://im?contactEmail=botmi1@webex.bot"> Habla conmigo</button>
            </section>
        </div>
    );
}

export {PresentacionBot}
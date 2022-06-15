import React from "react";
//React-Intermediate-Checkbox 01_Sharing-A-Boolean-State (forked)

function GoodConduct () {
    return (
        <div className="presentation-text">
        <h1>Notre souhait</h1>
        <p id="prestextdesktop">
        En tant que futur membre de DEAR,
        tu peux exprimer tes pensées librement
        et échanger avec des personnes dans le
        respect et la bienveillance.
        Peu importe qui tu es et d’ou tu viens, ce
        qui compte c’est ce que tu dis ! 

        Pour s’assurer que chaque membre DEAR, 
        vive une expérience au TOP , nous avons
        partagé des règles de bonne confiance et 
        de savoir-être ! 

        Nous t’encourageons à les lire et à les 
        accepter pour poursuive ton inscription !
        </p>

        <input type="checkbox" checked={true} name="controlled"></input>
        </div>

    )
}


export default GoodConduct;
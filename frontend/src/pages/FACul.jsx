import React from "react";
import logo from "../assets/dear-logo-white.png";
import ButtonReturn from "../components/home/ButtonReturn";
import "./styles/FACul.css";

function FACul() {
  return (
    <div className="div-facul-dear">
      <div className="arrowreturn-facul">
        <ButtonReturn style={{ cursor: "pointer" }} />
      </div>
      <div className="div-logo-facul">
        <img className="logo-facul" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="titlefacul">
        <h1>F.A.CUL</h1>
      </div>
      <div className="titleexplicationsdear">
        <h2>En quoi consiste la plateforme DEAR?</h2>
      </div>
      <div className="explicationsdear">
        <p>
          🚀 Répondre à un enjeu sociétal grâce à une solution qui a du sens,
          pour toutes et tous.
        </p>
        <p>🚀 Bannir l’analphabétisme sexuel et la désinformation !</p>
        <p>
          🚀 Libérer la parole sur la sexualité trop souvent laissée sous
          silence faute de tabou et de gêne !
        </p>
        <p>
          🚀 Partager ensemble dans la bienveillance et apprendre d’autrui et de
          leurs propres vécus.
        </p>
        <p>
          Alors, DEAR c’est la petite application qui fait du bien au quotidien.
          La p’tite application qui nous permet de (se) découvrir – de
          s’éveiller – d’apprendre et de (se) rassurer. C’est DEAR quoi !
        </p>
      </div>
      <div className="titleconceptdear">
        <h2>Sur quels types d’études le concept s’est basé ?</h2>
      </div>
      <div className="conceptdear">
        <p>
          Suite à de nombreuses recherches et interviews avec des
          professionnelles (sexothérapeute, animatrice au planning familial, CEO
          d’une marque de Sextoy...) nous avons constaté et soulevé un vrai
          besoin à ce sujet ! De plus, en novembre 2020 nous avons réalisé un
          sondage qui a été diffusé sur de nombreux réseaux sociaux. Ce dernier
          a récolté plus de 2500 réponses en seulement 3 jours ! Voici les
          informations clés que nous avons retenues :
        </p>
      </div>
      <div className="numbersdear">
        <p>
          2501 : c’est le nombre de réponses que nous avons obtenues à notre
          questionnaire (novembre 2020) en seulement 3 jours.
        </p>
        <p>
          1867 : c’est le nombre de personnes sur 2501 qui trouvent que la
          sexualité est encore tabou en société.
        </p>
        <p>
          2125 : c’est le nombre de personnes sur 2501 qui aimeraient pouvoir
          parler plus librement de leur sexualité !
        </p>
        <p>
          Le manque de connaissance de la sexualité, du corps humain et du
          plaisir est un fait. Lors de tous les échanges que nous avons pu
          avoir, cette problématique fut soulevée.
        </p>
      </div>
      <div className="titlecontentdear">
        <h2>Quels contenus retrouver sur DEAR ?</h2>
      </div>
      <div className="contentdear">
        <p>
          Des articles, des posts, des témoignages, des débats, le tout classés
          par catégories. Sur tous les sujets qui t’intéressent : la sexualité,
          l’amour, les relations et bien plus ! Dans quelques temps on espère
          t’offrir des contenus encore plus interactifs et divers : vidéos,
          live, podcast ! Pour tout savoir suis- nous sur Instagram et LinkedIn.
        </p>
        <p>
          Sur l’ensemble de la plateforme tu retrouveras du contenu lise en
          ligne par les membres de la communauté : des posts anonymes /
          également des posts réalisés par des professionnel.le.s du secteur qui
          ne seront pas anonymisés. L’objectif ? Vous permettre d’avoir des
          contenus de qualité proposés par des experts. De plus, avoir le
          nom/prénom/fonction des pros vous permettra de les contacter aisément
          en cas de besoin.
        </p>
      </div>
      <div className="titlefreedear">
        <h2>DEAR est-il gratuit ?</h2>
      </div>
      <div className="freedear">
        <p>
          Oui DEAR est une plateforme digitale 100% gratuite. En contrepartie
          vous acceptez avoir quelques publicités natives dans votre feed
          d’actualités !
        </p>
      </div>
      <div className="titleanonymousdear">
        <h2>Puis-je publier anonymement ?</h2>
      </div>
      <div className="anonymousdear">
        <p>
          Oui, tout à fait ! C’est d’ailleurs le principe de l’application DEAR
          ! Nous sommes conscient.e.s que la prise de parole est plus simple
          lorsque qu’il n’y pas la notion de l’identité derrière. C’est
          pourquoi, l’ensemble des publications des utilisateur.trice.s sera
          entièrement anonyme !
        </p>
      </div>
      <div className="titlelimitepublicationdear">
        <h2>Suis-je limité en matière de publications ?</h2>
      </div>
      <div className="limitepublicationdear">
        <p>
          NON ! Au contraire, plus tu es actif.ve mieux c’est ! Bientôt on
          développera un système de gamification, plus tu partages, commentes,
          interagis plus tu feras partie des personnalités phares de
          l’application.
        </p>
      </div>
      <div className="titlerulesdear">
        <h2>Y-a-t-il des règles à suivre ?</h2>
      </div>
      <div className="rulesdear">
        <p>
          Oui ! Vous ne pouvez pas venir sur la plateforme et écrire tout et
          n’importe quoi. Vos publications seront modérées par la communauté,
          contrôlées par un algorithme. Des mots, expressions... sont
          strictement interdits afin de respecter l’atmosphère de la plateforme
          !
        </p>
      </div>
      <div className="titlebreakrulesdear">
        <h2>Que se passe-t-il si une règle est enfreinte ?</h2>
      </div>
      <div className="breakrulesdear">
        <p>
          Si votre post est signalé par 5 membres et plus de la communauté, car
          il ne respecte pas la charte éthique de DEAR, votre publication est
          automatiquement retirée du feed d’actualité. Vous recevez un message
          d’avertissement de la part de l’équipe qui veille au bon
          fonctionnement de la plateforme. Si vous enfreignez la même règle,
          votre compte sera définitivement supprimé.
        </p>
      </div>
      <div className="titleprodear">
        <h2>
          Puis-je parler aux professionnel.le.s disponibles sur la plateforme ?
        </h2>
      </div>
      <div className="prodear">
        <p>
          Il n’y aura pas de système de tchat privé dans lequel vous pourrez
          discuter avec un.e professionnel.le disponible sur la plateforme. En
          revanche, les professionnel.le.s qui seront sur la plateforme ne
          seront pas anonymes, l’objectif étant de leur apporter de la
          visibilité. Ainsi, vous pourrez facilement les contacter en dehors de
          l’application.
        </p>
      </div>
    </div>
  );
}

export default FACul;

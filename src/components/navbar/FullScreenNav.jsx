import React from "react";

const FullScreenNav = () => {
  return (
    <div id="fullscreen" className="text-white h-screen py-30 w-full absolute bg-black">

      <div className="">

        <div className="link border-t border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">PROJECTS</h1>
          {/* <div>
            <h2>POUR TOUT VOIR</h2>
            <img src="" alt="" />
            <h2>POUR TOUT VOIR </h2>
            <img src="" alt="" />
          </div> */}
        </div>

        <div className="link border-t border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">AGENCE</h1>
          {/* <div>
            <h2>POUR TOUT SAVOIR</h2>
            <img src="" alt="" />
            <h2>POUR TOUT VOIR</h2>
            <img src="" alt="" />
          </div> */}
        </div>

        <div className="link border-t border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">CONTACT</h1>
          {/* <div>
            <h2>POUR ENVOYER UN FAX</h2>
            <img src="" alt="" />
            <h2>POUR ENVOYER UN FAX</h2>
            <img src="" alt="" />
          </div> */}
        </div>

        <div className="link border-t border-b border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">BLOGUE</h1>
          {/* <div>
            <h2>LIRE LES ARTICLES</h2>
            <img src="" alt="" />
            <h2>LIRE LES ARTICLES</h2>
            <img src="" alt="" />
          </div> */}
        </div>

      </div>

    </div>
  );
};

export default FullScreenNav;

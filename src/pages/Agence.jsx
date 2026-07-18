import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 15%',
        end: 'top -170%',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem)=>{
          let imageIndex;
          if (elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else{
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className="parent relative">
      <div className="relative py-1">
        <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-[8vw] left-[29vw]">
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6"
            alt=""
          />
        </div>

        <div className="relative font-[inter500]">
          <div className="mt-[51vh]">
            <h1 className="text-[20vw] font-semibold text-center uppercase leading-[18vw]">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-5">
            <p className="text-6xl font-semibold">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; Notre curiosité nourrit notre créativité. On reste humbles
              et on dit non aux gros egos, même le vôtre. Une marque est
              vivante. Elle a des valeurs, une personnalité, une histoire. Si on
              oublie ça, on peut faire de bons chiffres à court terme, mais on
              la tue à long terme. C’est pour ça qu’on s’engage à donner de la
              perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;

import React from "react";

const FullScreenNav = ({ setMenuOpen }) => {
  return (
    <div
      id="fullscreen"
      className="fixed inset-0 z-[100] text-white h-screen w-full overflow-hidden bg-black p-2.5"
      style={{
        opacity: 1,
      }}
    >
      <div className="flex w-full justify-between items-start">
        <div className="p-1 w-35">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div
          onClick={() => setMenuOpen(false)}
          className="h-28 w-28 relative cursor-pointer"
        >
          <div className="h-38 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          <div className="h-38 w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
        </div>
      </div>

      <div className="py-5">
        <div className="link relative border-t border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
            PROJECTS
          </h1>

          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center overflow-auto">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT VOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT VOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt=""
              />
            </div>

            <div className="moveX flex items-center overflow-hidden">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT VOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT VOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link relative border-t border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
            AGENCE
          </h1>

          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center overflow-hidden">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT SAVOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT SAVOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"
                alt=""
              />
            </div>

            <div className="moveX flex items-center overflow-hidden">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT SAVOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR TOUT SAVOIR&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link relative border-t border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
            CONTACT
          </h1>

          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center overflow-hidden">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR ENVOYER UN FAX&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR ENVOYER UN FAX&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt=""
              />
            </div>

            <div className="moveX flex items-center overflow-hidden">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR ENVOYER UN FAX&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;POUR ENVOYER UN FAX&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link relative border-y border-white">
          <h1 className="font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
            BLOGUE
          </h1>

          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center overflow-hidden">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;LIRE LES ARTICLES&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;LIRE LES ARTICLES&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
            </div>

            <div className="moveX flex items-center overflow-hidden">
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;LIRE LES ARTICLES&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[inter500] text-[8vw] font-semibold leading-[0.8] py-3 text-center">
                &nbsp;LIRE LES ARTICLES&nbsp;
              </h2>
              <img
                className="h-22 w-65 shrink-0 object-cover rounded-full"
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;

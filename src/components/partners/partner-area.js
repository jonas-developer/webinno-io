import React from "react"
import ImageComponent from '../ImageComponent';

const PartnerArea = ({CMSData}) => {
  return (
    <section id="partners" className="about-area section-pt-70 section-pb-80">
      <div className="container">
      <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title" style={{ paddingBottom: "20px" }}>
                Partners
                <br />
              </h2>

            
            </div>
          </div>
        </div>

        <div className="about__row-reverse">
          
        {CMSData.allPartnerSections.map((section) => (

        <div className="row align-items-center" key={section.id}>

              <div className="col-lg-6">
                    <div
                      className="about__img"
                      data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
                    >
                      
                      <ImageComponent img={section.image.url} alt="FORGE" cssClass="rounded-img" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="about__content"
                      data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
                    >
                      <div className="section__title text-start">
                        <span className="sub-title tg-text-gradient">
                        {section.toptext}
                        </span>
                        <h2 className="title" style={{fontSize: "46px"}}>{section.header}</h2>
                      </div>
                      <p style={{marginBottom: "20px"}}>
                      {section.content}
                      </p>
                      
                    </div>
                  </div>

              </div>

      ))}


       

         

        </div>
      </div>
    </section>
  )
}

export default PartnerArea

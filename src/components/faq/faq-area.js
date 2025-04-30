import React from "react"
import SingleFaq from "./single-faq"

const baseStorageURL = "https://webinno.s3.eu-north-1.amazonaws.com/"


// faq items
const faq_items = [
  {
    id: "One",
    title: "What is WEBINNO?",
    show: true,
    desc: "Webinno provide innovative web services of different kinds on demand.",
    desc_2: "",
    parent: "accordionFaq",
    img: "",
    video: ""
  },
]

const FaqArea = ({ CMSData, spacing, style_2 = false }) => {
  return (
    <section
      id="faq"
      className={`faq-area ${style_2 ? "faq-style-two" : ""} ${
        spacing ? spacing : "section-py-80"
      }`}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">FAQ</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="faq__wrapper"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <div className="accordion" id="accordionFaq">
                {CMSData.allFaqs.map((item) => (
                  <SingleFaq key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea

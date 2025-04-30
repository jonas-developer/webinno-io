import React from "react"

// single item /* col-lg-3  col-md-4 col-sm-6*/
function SingleFactItem({ count, meta }) {
  return (
    <div className="col-lg-6">
      <div className="fact__item text-center" style={{padding: "20px 60px 0px 60px"}}>
        <h2 style={{fontSize: "36px"}}>{count}</h2>
        <span className="meta">{meta}</span>
      </div>
    </div>
  )
}

const TokenomicsArea = () => {
  return (
    <section
      id="tokenomics"
      className="fact-area fact-style-three section-pt-60 section-pb-30"
    >
      <div className="container">
        <div className="fact__items-wrap position-relative">
          <center></center>
          <div
            className="row justify-content-center"
            data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);"
          >
            <div className="section__title text-center title-mb-65">
              <h2 className="title">
                $WEBI <span className="tg-text-gradient">Tokenomics</span>
              </h2>
            </div>

            <SingleFactItem count="Liquidity Pool" meta="27.1%" />

            <SingleFactItem count="Marketing" meta="10% Marketing" />

            <SingleFactItem
              count="Treasury"
              meta="1% each for 10 seed round liquidity providers."
            />

            <SingleFactItem count="Total Supply" meta="1 Billion $WEBI" />

            <SingleFactItem count="Taxes" meta="No taxes" />

            <SingleFactItem
              count="Burned LP"
              meta="LP & 50% of marketing wallet $WEBI burned."
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default TokenomicsArea

import React, { useEffect, useState } from "react";
import { Seo } from "../components/seo"
import Layout from "../layout/layout"

// import Brands from "../components/brands/brands";
import SectionDivider from "../components/section-divider"
import SectionDividerETH from "../components/section-divider-eth"

import GradientPosition from "../components/gradient-position"

import WelcomeSection from "../components/welcome/welcome-section"
import MemesArea from "../components/memes/memes-area-1"
import VideosArea from "../components/videos/videos-area"
import VideosArea2 from "../components/videos/videos-area2"

import Roadmap from "../components/roadmap/roadmap-area"

import TokenomicsArea from "../components/tokenomics/tokenomics-area"

import AboutArea from "../components/about/about-area"
import PartnerArea from "../components/partners/partner-area"

import FaqArea from "../components/faq/faq-area";

import NewsArea from "../components/news/news-area";

import { GraphQLClient, gql } from "graphql-request";



const HomePage = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = "https://graphql.datocms.com/";
      const apiToken = "6d1e808119a3a12a9ce98de47aada6"; 

      const client = new GraphQLClient(endpoint, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      // GraphQL query to fetch all records (update query to match your schema if needed)
      const query = gql`
          query {
            
              welcomeSection {
                header1
                header2
                slogan
              }

              allNewsSections {
                date
                header
                content
                image {
                  id
                  url
                }
              } 

              aboutSection {
                toptext
                header
                content
                image {
                  id
                  url
                }
              }  

              aboutSection2 {
                toptext
                header
                content
                image {
                  id
                  url
                }
              } 

              aboutSection3 {
                toptext
                header
                content
                image {
                  id
                  url
                }
              } 

            socialsSection {
              toptext
              header
              content
              image {
                id
                url
              }
            }

             teamSection {
              toptext
              header
              content
              image {
                id
                url
              }
            }           

            allPartnerSections {
              toptext
              header
              content
              image {
                id
                url
              }
            }

            allArtAndMemes {
              header
              info
              image {
                id
                url
              }
            }

            allVideos {
              title
              url
              info
              image {
                id
                url
              }
            }  
            
              allVideoclips {
                title
                url
                info
                image {
                  id
                  url
                }
            }   

            allFaqs {
                id
                title
                desc
                video
                image {
                  id
                  url
                }

            }  
                
              footer {
                description
            }  
        
          }
      `;

      try {
        const result = await client.request(query);
        // console.log("DATAN: ", result);
        setData(result);
      } catch (err) {
        console.error("Error fetching data from DatoCMS:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);


  return (

    <Layout CMSData={data}>

      <GradientPosition />

      <WelcomeSection/>
 
    </Layout>

  )
}
export default HomePage

export const Head = () => <Seo />

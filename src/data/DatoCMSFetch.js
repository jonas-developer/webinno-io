// import React, { useEffect, useState } from "react";
// import { GraphQLClient, gql } from "graphql-request";
// import RenderMarkdown from "./RenderMarkdown";

// const DatoCMSFetch = ({section, field, type="text"}) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const endpoint = "https://graphql.datocms.com/";
//       const apiToken = "6d1e808119a3a12a9ce98de47aada6"; 

//       const client = new GraphQLClient(endpoint, {
//         headers: {
//           Authorization: `Bearer ${apiToken}`,
//         },
//       });

//       // GraphQL query to fetch all records (update query to match your schema if needed)
//       const query = gql`
//           query {
            

//                     {
//               welcomeSection {
//                 header1
//                 header2
//                 slogan
//               }
//               aboutSection {
//                 toptext
//                 header
//                 content
//               }  
//             socialsSection {
//               toptext
//               header
//               content
//               image {
//                 id
//                 url
//               }
//             }
//           }


//           }
//       `;

//       try {
//         const result = await client.request(query);
//         setData(result);
//       } catch (err) {
//         console.error("Error fetching data from DatoCMS:", err);
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);
  
//   console.log("Type value: ", type);

//   return (
//     <div>
//       {error && <p>Error: {error}</p>}
//       {data ? (
//       type !== "html" ? (
//         JSON.stringify(data[section][field], null, 2).replace(/"/g, "").trim()
//       ) : (
//         <RenderMarkdown content={JSON.stringify(data[section][field], null, 2).replace(/"/g, "").trim().replace(/\n/g, "  \n")} />
//       )
//     ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default DatoCMSFetch;

// import Link from 'next/link';
// import React from 'react'
// import MovieCard from '../components/MovieCard';
// import styels from "@/app/styles/common.module.css"

// const page = async () => {

//     const url = process.env.RAPID_KEY;

//     const options = {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-key': '97547bdfdcmshdf8da4caf6b8cc8p18bcb4jsn68ec3ad30cb6',
//           'x-rapidapi-host': 'netflix54.p.rapidapi.com'
//         }
//       };

//       const res = await fetch(url, options);
//       const data = await res.json();
//       const main_data = data.titles;
//       console.log(data);
//   return (
//     <>
//     <section className={styels.movieSection}>
//       <div className={styels.container}>
//         <h1>Series & Movie</h1>
//         {
//             main_data.map((curElem) => {
//               return <MovieCard key={curElem.id} {...curElem} />
//             })
//         }
//       </div>
//     </section>
//     </>
//   )
// }

// export default page

import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css";

const MoviePage = async () => {
  const url = process.env.RAPID_KEY;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '97547bdfdcmshdf8da4caf6b8cc8p18bcb4jsn68ec3ad30cb6',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  let main_data = [];

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    main_data = data.titles || [2];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
console.log(main_data);
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          {
            main_data.length > 0 ? (
              main_data.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />
              })
            )
            : (
              <p>No data available</p>
            )
          }
        </div>
      </section>
    </>
  );
};

export default MoviePage;

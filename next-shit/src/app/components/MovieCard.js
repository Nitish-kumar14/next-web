import React from 'react';
import styles from "@/app/styles/common.module.css";
import Link from 'next/link';
import Image from 'next/image';

const MovieCard = (curElem) => {
  const jawSummary = curElem.jawSummary || {};

  const { id, type, title, synopsis, backgroundImage } = jawSummary;

  return (
    <>
      <div className={styles.card}>
        {backgroundImage && (
          <div className={styles.card_image}>
            <Image
              src={backgroundImage.url}
              alt={title}
              width={260}
              height={200}
            />
          </div>
        )}
        <div className={styles.card_content}>
          <h3 className={styles.card_title}>{title || 'No Title'}</h3>
          <p className={styles.card_synopsis}>{synopsis || 'No Synopsis'}</p>

          {id && (
            <Link href={`/movie/${id}`}>
              Read More
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieCard;

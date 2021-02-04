import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Button from "react-bootstrap/Button";
import React from "react";

import Link from 'next/link';

export default function Home() {
  return (

    <div className={styles.container}>
      <div>
        {/*musuem anme*/}
        <h1>LOWE</h1>
        <img src={"https://github.com/igeller/assets/blob/main/Assets/Mobile/Logos/Africa-Mobile-Logo-Lowe.png?raw=true"} />
        {/*//Project Name*/}
        <h2>RE-PRESENTING ART</h2>
        {/*info about project*/}
        <p>A Holographic Installation for the Lowe Art of Africa Gallery Collections</p>
        {/*//button to link to gallery*/}
        <Link href={'mask_gallery/'}>
          <Button variant={'primary'}>ENTER GALLERY</Button>
        </Link>


        {/*<Gallery images={IMAGES} enableImageSelection={false} onClickThumbnail={show3dobs}/>*/}
        {/*<model-viewer src={"https://representingart.imfast.io/punu/scene.gltf"} loading="eager" poster="https://representingart.imfast.io/kulango-people-ceremonial-dance-mask/textures/KulangaMaskMesh.png" ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" camera-controls/>*/}

      </div>
      {/*<Gallery></Gallery>*/}


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

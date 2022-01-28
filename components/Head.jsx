import Head from 'next/head';
import React from 'react';

export default function HtmlHead({ title }) {
  return (
    <Head>
      <title>{title || 'SEAINVADERS - Against Ocean Pollution'}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta
        content='google0628dec134cf705b.html'
        name='google-site-verification'
      />

      <meta
        content='Sea Invaders is a charity organization bound in Norway. We&#x27;ve set ambisious goals for ourself on the quest to spread awareness of pollution in the ocean. We are using the power of art to reach out to children and parents alike.'
        name='description'
      />
      <meta
        content='SEAINVADERS - Against Ocean Pollution'
        property='og:title'
      />
      <meta
        content='Sea Invaders is a charity organization bound in Norway. We&#x27;ve set ambisious goals for ourself on the quest to spread awareness of pollution in the ocean. We are using the power of art to reach out to children and parents alike.'
        property='og:description'
      />
      <meta
        content='https://uploads-ssl.webflow.com/594ae9903ca9026bddba3f3b/5a70a256acaa6c00013154db_SEAINVADERSLOGO-opaque.png'
        property='og:image'
      />
      <meta
        content='SEAINVADERS - Against Ocean Pollution'
        property='twitter:title'
      />
      <meta
        content='Sea Invaders is a charity organization bound in Norway. We&#x27;ve set ambisious goals for ourself on the quest to spread awareness of pollution in the ocean. We are using the power of art to reach out to children and parents alike.'
        property='twitter:description'
      />
      <meta
        content='https://uploads-ssl.webflow.com/594ae9903ca9026bddba3f3b/5a70a256acaa6c00013154db_SEAINVADERSLOGO-opaque.png'
        property='twitter:image'
      />
      <meta property='og:type' content='website' />
      <meta content='summary_large_image' name='twitter:card' />

      <link rel='canonical' href='https://seainvaders.com' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://uploads-ssl.webflow.com/594ae9903ca9026bddba3f3b/5a70a256acaa6c00013154db_SEAINVADERSLOGO-opaque.png'
      />
      <meta property='og:title' content='Sea Invaders' />
      <meta
        property='og:url'
        content="Sea Invaders is a charity organization bound in Norway. We've set ambisious goals for ourself on the quest to spread awareness of pollution in the ocean. We are using the power of art to reach out to children and parents alike."
      />

      <meta
        property='og:image'
        content='https://uploads-ssl.webflow.com/594ae9903ca9026bddba3f3b/5a70a256acaa6c00013154db_SEAINVADERSLOGO-opaque.png'
      />

      {/* <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}&callback=initMap&libraries=&v=weekly`}
        async
      /> */}
    </Head>
  );
}

import React, { Suspense } from 'react'
import HideIfApp from './HideIfApp'

// Global App Router not-found. Next.js also uses this entry to render 404s
// that originate from pages-router getServerSideProps({ notFound: true }).
export default function NotFound() {
  return (
    <Suspense fallback={<main>Loading...</main>}>
      <HideIfApp>
        <header>Site header (hidden inside the native app)</header>
      </HideIfApp>
      <main>
        <h1>404 - page not found</h1>
      </main>
      <HideIfApp>
        <footer>Site footer</footer>
      </HideIfApp>
    </Suspense>
  )
}

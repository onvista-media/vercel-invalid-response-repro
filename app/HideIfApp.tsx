import React, { ReactNode, Suspense } from 'react'
import { headers } from 'next/headers'

// Reads a request header inside the not-found tree. With cacheComponents this
// turns /_not-found into a partially prerendered shell whose remainder is
// streamed at request time. Same pattern as the production app's header/footer.
async function HideIfApp({ children }: { children: ReactNode }) {
  const headersList = await headers()
  if (headersList.get('x-client-app') === 'true') {
    return null
  }
  return <>{children}</>
}

export default function HideIfAppWrapper({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HideIfApp>{children}</HideIfApp>
    </Suspense>
  )
}

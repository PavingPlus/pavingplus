import React from 'react'
import { Helmet } from 'react-helmet'

export default function NotFound() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oops Page Not Found.......</title>
      </Helmet>
      <div>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h1>Oops!</h1>
              <h2>404 - The Page can't be found</h2>
            </div>
            <a className="link" href="/">Go TO Homepage</a>
          </div>
        </div>
      </div>
    </>
  )
}


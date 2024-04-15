import { renderToString } from 'react-dom/server';
import * as React from 'react';

const ServerApp = React.createElement(require('../../build/server.bundle.js').default);

// content need to be pre-load before send it to client
export const renderTemplate = () => {
  const html = renderToString(ServerApp);
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Example of Isomorphic application</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
`
}

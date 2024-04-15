import React, { useEffect } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export default class ServerApp extends React.Component {
  render() {
    console.log('rendered on server!');
    return (
      <StaticRouter location={"/"}>
        <App/>
      </StaticRouter>
    );
  }
}

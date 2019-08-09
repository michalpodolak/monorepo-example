import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <>
    <div>react-app-2</div>
  </>
);

const container = document.getElementById('react-root');
render(<App />, container);

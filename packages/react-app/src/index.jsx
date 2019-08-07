import React from 'react';
import { render } from 'react-dom';
import coreFramework from '@monorepo-example/core-framework';

const { Heading } = coreFramework.components;

const App = () => (
  <>
    <Heading />
    <div>react-app</div>
  </>
);

const container = document.getElementById('react-root');
render(<App />, container);

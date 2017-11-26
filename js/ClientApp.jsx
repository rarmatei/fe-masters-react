import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function Hello(props) {
  return ce('div', null, ce('h1', null, props.title));
};

const MyFirstComponent = function Hello2() {
  return ce(
    'div',
    null,
    ce(MyTitle, {
      title: 'House of Cards'
    }),
    ce(MyTitle, {
      title: 'Orange is the New Black'
    }),
    ce(MyTitle, {
      title: 'Stranger Things'
    })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));

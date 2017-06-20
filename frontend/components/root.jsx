import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, IndexRoute, hashHistory } from 'react-router-dom';
import Main from './main.jsx';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default Root;



// <Provider store={ store }>
//   <HashRouter history={ hashHistory }>
//     <div>
//       <Route path='/' component={ Main }></Route>
//     </div>
//   </HashRouter>
// </Provider>

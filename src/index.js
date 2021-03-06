import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostIndex from './components/posts-index';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// class Hello extends React.Component{
//     render(){
//         return <div>Hello</div>
//     }
// }
//
// class Goodbye extends React.Component{
//     render(){
//         return <div>Goodbye</div>
//     }
// }


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/posts/new" component={PostsNew} />
                  <Route path="/posts/:id" component={PostsShow} />
                  <Route path="/" component={PostIndex} />
                  {/*<Route path="/hello" component={Hello} />*/}
                  {/*<Route path="/goodbye" component={Goodbye} />*/}
              </Switch>
          </div>
      </BrowserRouter>
    {/*<App />*/}
  </Provider>
  , document.querySelector('.container'));

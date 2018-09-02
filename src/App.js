import React, { Component } from 'react';
import Header from './common/header';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/'  render={() => <div>首页</div>}></Route>
              <Route path='/detail'  render={() => <div>Detail page</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

import * as React from 'react';
import { Route, Switch } from 'react-router';
import LoadableFeeds from './page/feeds/loadable';
import LoadableHome  from './page/home/loadable';

class App extends React.Component {


  // https://reacttraining.com/react-router/web/example/url-params
  // https://github.com/ReactTraining/react-router
  // https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
  //
  // Boostrap typescript
  // https://github.com/react-bootstrap/react-bootstrap-typescript/tree/master/src
  //
  // React Libraries
  // https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42
  //
  // React bootstrap 
  // https://react-bootstrap.github.io/layout/grid/
  


  public render() {
    return (
      <Switch>
        <div>
          <Route exact={true} path="/" component={LoadableHome} />
          <Route path="/home" component={LoadableHome} />
          <Route path="/feeds/:userid" component={LoadableFeeds} />
        </div>
      </Switch>
    );
  }
}

export default App;

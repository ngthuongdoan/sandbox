import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import routes from './routes';

const componentRegistry = {
  AllQuotes,
  NewQuote,
  QuoteDetail,
};

function App() {
  const routeComponents = routes.map(
    ({ path, component, redirect, exact }, key) => {
      console.log('./pages/' + component);
      let DynamicComponent = redirect ? (
        <Redirect to={redirect}></Redirect>
      ) : (
        require('./pages/' + component).default
      );
      return (
        <Route exact={exact} path={path} key={key}>
          <DynamicComponent></DynamicComponent>
        </Route>
      );
    }
  );

  return (
    <Layout>
      <Switch>
        {/* <Route path="/" exact>
        <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
        <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
        <QuoteDetail />
        </Route>
        <Route path="/new-quote">
        <NewQuote />
      </Route> */}
        {routeComponents}
      </Switch>
    </Layout>
  );
}

export default App;

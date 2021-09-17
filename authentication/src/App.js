import React from 'react';
import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
const UserProfile = React.lazy(() =>
  import('./components/Profile/UserProfile')
);
const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

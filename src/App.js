import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import WelcomeToArtSci from './routes/home/WelcomeToArtSci'
//const WelcomeToArtSci = lazy(() => import('./routes/home/WelcomeToArtSci'))

const App = () => (
  // <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route
          component={WelcomeToArtSci}
          exact
          path='/welcome'
        />
        </Switch>
    </BrowserRouter>
  // </ErrorBoundary>
)

export default App;

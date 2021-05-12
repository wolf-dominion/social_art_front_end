import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, {Suspense, lazy} from 'react'
import LoadingOverlay from './application/loadingOverlay/LoadingOverlay'

const WelcomeToArtSci = lazy(() => import('./routes/home/WelcomeToArtSci'))

const App = () => (
  // <ErrorBoundary>
    <BrowserRouter>
      <Suspense
        fallback={
          <LoadingOverlay/>
        }
      >
        <Switch>
          <Route
            component={WelcomeToArtSci}
            exact
            path='/welcome'
          />
          </Switch>
        </Suspense>
    </BrowserRouter>
  // </ErrorBoundary>
)

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
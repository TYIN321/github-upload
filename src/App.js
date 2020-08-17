import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UploadPage from './components/csv_reader';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path = "/" component={UploadPage} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

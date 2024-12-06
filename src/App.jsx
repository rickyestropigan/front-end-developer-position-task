// Layout.js
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import  AppNavigator  from './navigation/AppNavigator';
import { DataService } from './provider/DataService';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <DataService>
               <AppNavigator/>
            </DataService>
      </BrowserRouter>
    </div>
  );
}

export default App;

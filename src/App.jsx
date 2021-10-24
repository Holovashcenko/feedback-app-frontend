import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Feedback from './routes/Feedback';

const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path='/api/tasks' component={Feedback}/>
            </Switch>
        </Router>
    </div>
};

export default App;
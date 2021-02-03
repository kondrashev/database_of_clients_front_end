import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TableClients from './components/TableClients';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import Menu from './components/Menu';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const StartApplication = () => {
    const App = () => (
        <Provider store={store}>
            <div>
                <Menu />
                <TableClients />
            </div>
        </Provider>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default StartApplication;
import React from 'react';
import ReactDOM from 'react-dom';
// import ListClients from './ListClients'
import ClientForm from './ClientForm';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import { Provider } from 'react-redux';
import Menu from './Menu';
import TableClients from './TableClients';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const AddClient = () => {
    const App = () => (
        <Provider store={store}>
            <div>
                <Menu />
                {/* <ListClients /> */}
                <TableClients />
                <ClientForm />
            </div>
        </Provider>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default AddClient;
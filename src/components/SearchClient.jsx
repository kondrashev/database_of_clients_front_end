import React from 'react';
import ReactDOM from 'react-dom';
import TableClients from './TableClients';
import Menu from './Menu';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const SearchClient = (props) => {
    const App = () => (
        <Provider store={store}>
            <div>
                <Menu />
                <TableClients
                    urlMarker='search'
                    urlOne={'https://cors-anywhere.herokuapp.com/'}
                    urlTwo={`https://test-react-start.herokuapp.com/search/clients?surName=${props.surName}`} />
            </div>
        </Provider>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default SearchClient;
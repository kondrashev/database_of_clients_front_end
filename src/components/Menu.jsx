import React from 'react';
import '../css/MainMenu.css';
import AddClient from './AddClient';
import DeleteClient from './DeleteClient';
import SearchClient from './SearchClient';
import StartApplication from '../App';
import { connect } from 'react-redux';
import { setSurNameText } from '../store/search_client_menu/actions';
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.onSurNameChange = this.onSurNameChange.bind(this);
    }
    onSurNameChange(event) {
        this.props.setSurNameText(event.target.value);
    }
    onSurNameKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.search(event);
        }
    };
    search = () => {
        SearchClient(this.props);
    };
    exit = () => {
        StartApplication();
    };
    render() {
        return (
            <ul className='ul-1'>
                <li>
                    <button
                        className='btn-1'
                        onClick={AddClient}>Add client</button>
                </li>
                <li>
                    <button
                        className='btn-1'
                        onClick={DeleteClient}>Delete client</button>
                </li>
                <li>
                    <input
                        className='inp-1'
                        type='text'
                        placeholder='Search by surname'
                        onChange={this.onSurNameChange}
                        onKeyPress={this.onSurNameKeyPress}></input>
                </li>
                <li>
                    <button
                        className='btn-1'
                        onClick={this.search}>Search</button>
                </li>
                <li>
                    <button
                        className='btn-1'
                        onClick={this.exit}>Home</button>
                </li>
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {
        surName: state.SearchClientReducer.surName
    };
}
const mapDispatchToProps = {
    setSurNameText
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
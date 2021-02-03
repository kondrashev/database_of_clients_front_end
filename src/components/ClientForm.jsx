import React from 'react';
import PutClient from './PutClient';
import '../css/ClientForm.css';
import { connect } from 'react-redux';
import {
    setFirstNameText,
    setSurNameText,
    setPhoneText
} from '../store/search_client_menu/client_form/actions';
import { loadListClients } from '../store/list_clients/actions';
import { clientsFetchData } from '../store/load_clients/actions';
class ClientForm extends React.Component {
    state = {
        urlOne: 'https://cors-anywhere.herokuapp.com/',
        urlTwo: 'https://test-react-start.herokuapp.com/load/clients'
    }
    constructor(props) {
        super(props);

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onSurNameChange = this.onSurNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }
    componentDidMount() {
        this.props.fetchData(this.state.urlOne + this.state.urlTwo);
    }
    onFirstNameChange(event) {
        this.props.setFirstName(event.target.value);
    }
    onSurNameChange(event) {
        this.props.setSurName(event.target.value);
    }
    onPhoneChange(event) {
        this.props.setPhone(event.target.value);
    }
    onPhoneKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.saveClient(event);
        }
    };
    saveClient = () => {
        this.props.listClients(this.props);
        PutClient(this.props);
    }
    close = () => {
        document.getElementsByClassName('clientForm')[0].remove();
    }
    render() {
        return (
            <div
                className='clientForm'>
                <button
                    className='btn-1'
                    onClick={this.close}></button>
                <h>Add new client!</h>
                <input
                    className='inp-1'
                    autoFocus type='text'
                    placeholder='First name'
                    onChange={this.onFirstNameChange}
                />
                <input
                    className='inp-2'
                    type='text'
                    placeholder='Surname'
                    onChange={this.onSurNameChange}
                />
                <input
                    className='inp-3'
                    type='text'
                    placeholder='Phone'
                    onChange={this.onPhoneChange}
                    onKeyPress={this.onPhoneKeyPress}
                />
                <button
                    className='btn-2'
                    onClick={this.saveClient}>Sent</button>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        firstName: state.ClientFormReducer.firstName,
        surName: state.ClientFormReducer.surName,
        phone: state.ClientFormReducer.phone,
        clients: state.ClientsReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        setFirstName: firstName => dispatch(setFirstNameText(firstName)),
        setSurName: surName => dispatch(setSurNameText(surName)),
        setPhone: phone => dispatch(setPhoneText(phone)),
        fetchData: url => dispatch(clientsFetchData(url)),
        listClients: (props) => dispatch(loadListClients(props))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);
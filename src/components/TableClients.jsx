import React from 'react';
import '../css/TableClients.css';
import { ChoiseClient } from './ChoiseClient';
import { connect } from 'react-redux';
import { clientsFetchData } from '../store/load_clients/actions';
class TableClients extends React.Component {
    state = {
        urlOne: 'https://cors-anywhere.herokuapp.com/',
        urlTwo: 'https://test-react-start.herokuapp.com/load/clients'
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.urlMarker === 'search') {
            this.props.fetchData(`${this.props.urlOne}${this.props.urlTwo}`);
        } else {
            this.props.fetchData(`${this.state.urlOne}${this.state.urlTwo}`);
        }
    }
    render() {
        const choise = () => {
            ChoiseClient();
        }
        const clients = this.props.clients.map(client =>
            <tr className='tr-1'>
                <td className='td-1'>
                    <input
                        type='checkbox'
                        className='ch-1'
                        value={client.id}
                        onChange={choise}
                    >
                    </input></td>
                <td>{client.firstName}</td>
                <td>{client.surName}</td>
                <td>{client.phone}</td>
            </tr>)
        return (
            <table className='tb-1' >
                <tr>
                    <th className='th-1'>Choise</th>
                    <th>First name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                </tr>
                {clients}
            </table>)
    }
}
const mapStateToProps = state => {
    return {
        clients: state.ClientsReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(clientsFetchData(url))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TableClients);
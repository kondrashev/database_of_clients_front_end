import React from 'react';
import '../css/TableClients.css';
import { ChoiseClient } from './ChoiseClient';
import { connect } from 'react-redux';
let loadClients = [];
class ListClients extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.listClients);
        const choise = () => {
            ChoiseClient();
        }
        if (this.props.listClients.length === 0) {
            loadClients = this.props.clients;
        } else {
            loadClients = this.props.listClients;
        }
        const clients = loadClients.map(client =>
            <tr className='tr-1'>
                <td className='td-1'>
                    <input
                        type='checkbox'
                        className='ch-1'
                        // value={client.key}
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
        clients: state.ClientsReducer,
        listClients: state.ListClientsReducer
    }
}
export default connect(mapStateToProps)(ListClients);
export const LOAD_LIST_CLIENTS = 'LOAD_LIST_CLIENTS';
let listClients = [];

export const loadListClients = (props) => {
    listClients = props.clients;
    listClients.push({
        firstName: props.firstName,
        surName: props.surName,
        phone: props.phone
    })
    return {
        type: LOAD_LIST_CLIENTS,
        listClients
    }
}
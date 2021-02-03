import AddClient from './AddClient';
let corsURL = 'https://cors-anywhere.herokuapp.com/';
const PutClient = (props) => {
    // AddClient();
    let client = {
        firstName: props.firstName,
        surName: props.surName,
        phone: props.phone
    }
    fetch(`${corsURL}https://test-react-start.herokuapp.com/add/client`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    })
        .then(response => {
            if (response.status == 200) {
                AddClient();
            } else {
                alert('Add client fail!!!');
            }
        })
}
export default PutClient;
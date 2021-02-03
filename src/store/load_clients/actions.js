export const CLIENTS_FETCH_DATA_SUCCESS = 'CLIENTS_FETCH_DATA_SUCCESS';

export const clientsFetchDataSuccess = (clients) => {
    return {
        type: CLIENTS_FETCH_DATA_SUCCESS,
        clients
    }
}
export const clientsFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    return alert('Fail!!!');
                }
            })
            .then(clients => dispatch(clientsFetchDataSuccess(clients)))
    }
}
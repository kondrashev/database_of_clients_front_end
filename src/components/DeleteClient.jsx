let $ = require('jquery');
let corsURL = 'https://cors-anywhere.herokuapp.com/';
const DeleteClient = () => {
    let listId = [];
    $('.ch-1:checked').each(function () {
        listId.push($(this).val());
    });
    $('.tr-1').each(function () {
        if ($(this).find('.ch-1').prop('checked')) {
            $(this).remove();
        }
    });
    fetch(`${corsURL}https://test-react-start.herokuapp.com/delete/client`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listId)
    })
        .then(response => {
            if (response.status == 200) {
                alert('Delete successfull!!!');
            } else {
                alert('Delete fail!!!');
            }
        })
}
export default DeleteClient;
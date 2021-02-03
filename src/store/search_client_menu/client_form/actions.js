export const CLIENT_FORM_FIRST_NAME = 'CLIENT_FORM_FIRST_NAME';
export const CLIENT_FORM_SURNAME = 'CLIENT_FORM_SURNAME';
export const CLIENT_FORM_PHONE = 'CLIENT_FORM_PHONE';

export const setFirstNameText = firstName => ({
    type: CLIENT_FORM_FIRST_NAME,
    payload: firstName
});

export const setSurNameText = surName => ({
    type: CLIENT_FORM_SURNAME,
    payload: surName
});

export const setPhoneText = phone => ({
    type: CLIENT_FORM_PHONE,
    payload: phone
});
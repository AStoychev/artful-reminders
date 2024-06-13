export const validateValues = (values) => {
    titleIsValid = values.title.trim().length > 0;
    dateIsValid = typeof values.date === 'string';
    deadlineIsValid = typeof values.deadline === 'string';
    descriptionIsValid = typeof values.description === 'string';

    const allTrue = titleIsValid && dateIsValid && deadlineIsValid && descriptionIsValid;
    return allTrue;
};
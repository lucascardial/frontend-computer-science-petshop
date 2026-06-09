/**
 * @param {HTMLFormElement} form
 */
export function resetFormErrors(form)
{
    form.querySelectorAll('.has-error').forEach((element) => {
        element.classList.remove('has-error');
    })
}

export function registerFormError(input, message)
{
    const inputGroup = input.closest('.form-group');

    inputGroup.querySelector('.input-error-message').textContent = message;
    inputGroup.classList.add('has-error');
}

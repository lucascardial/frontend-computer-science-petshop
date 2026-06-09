/**
 * @param {HTMLFormElement} form
 */
export function resetFormErrors(form)
{
    form.querySelectorAll('.has-error').forEach((element) => {
        element.classList.remove('has-error');
    })
}

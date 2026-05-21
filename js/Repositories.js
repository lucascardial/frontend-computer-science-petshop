(function() {
    const localStoragePrefix = 'users';

    /**
     * @param email
     * @returns {Models.User | null}
     */
    function buscarPorEmail(email) {
        const users =  DB.get(localStoragePrefix);

        if(users === null) {
            return null;
        }

        const user = users.find((user) => user.email === email);

        return user ? new Models.User(user) : null;
   }

   function salvarUsuario(usuario) {
        const emailEmUso = buscarPorEmail(usuario.email);
        if(emailEmUso !== null) {
            alert('Não é possível cadastrar o usuário. Motivo: E-mail em uso!');
            return;
        }

        return DB.store(localStoragePrefix, usuario);
   }

   window.Repositories = {
        User: {
            buscarPorEmail,
            salvarUsuario
        }
   }
})();
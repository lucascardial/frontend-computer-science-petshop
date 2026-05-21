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
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Este e-mail já está em uso!",
            });
            return;
        }

        return DB.store(localStoragePrefix, usuario);
   }

    /**
     *
     * @returns {Models.User[]}
     */
   function listarUsuarios() {
        return DB.get(localStoragePrefix);
   }

   function deletarUsuario(id) {
       const novaLista = listarUsuarios().filter((user) => user.id !== id) || []
       localStorage.removeItem(localStoragePrefix);
        console.log(novaLista);
       localStorage.setItem(localStoragePrefix, JSON.stringify(novaLista));
   }

   window.Repositories = {
        User: {
            buscarPorEmail,
            salvarUsuario,
            listarUsuarios,
            deletarUsuario,
        }
   }
})();
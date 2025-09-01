const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {

        this.userProfile.innerHTML = `
        <div class="info">
           <img src="${user.avatarUrl}"alt="Foto do perfil do usuario" />
                 <div class="data">
                    <h1>${user.name ?? 'nao possui nome cadastrado'}</h1>
                    <p>${user.bio ?? 'nao possui bio cadastrada'}</p>
                    <h2>Seguidores: ${user.followers}</h2>
                    <h2>Seguindo: ${user.following}</h2>
                    
                </div>
        </div>`


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">${repo.name} <br>
            🍴${repo.forks} ⭐${repo.stargazers_count} 👀${repo.watchers} 🖥${repo.language}</a></li>`)


        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositorios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        }

        let eventItens = ''
        if (user.events.length > 0) {

            this.userProfile.innerHTML +=
                `<div class="events section">
                <h2>Eventos</h2>
                <ul>${eventItens}</ul>
            </div>`

        }
        user.events.forEach((event) => {
            if (event.type === "PushEvent") {
                this.userProfile.innerHTML +=
                    `<li>${event.repo.name} ->
                     ${event.payload.commits[0].message} </li>`
            } else if (event.type === "CreateEvent") {
                this.userProfile.innerHTML +=
                    `<li>${event.repo.name} ->
                      Sem mensagem de commit</li>`

            }





        })








    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuario nao encontrado</h3>'
    },



}




export { screen }

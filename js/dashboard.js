window.onload = function(){
    const navLinks = [
        {
            groupName: 'Geral',
            links: [
                {
                    icon: 'icon-adjustments-horizontal',
                    name: 'Dashboard',
                    href: '../pages/dashboard.html',
                }
            ]
        },
        {
            groupName: 'Pets',
            links: [
                {
                    icon: 'icon-paw',
                    name: 'Pets',
                    href: '../pages/meus-pets.html',
                },
            ]
        },
        {
            groupName: 'Atividades',
            links: [
                {
                    icon: 'icon-adjustments-horizontal',
                    name: 'Serviços',
                    href: '../pages/meus-servicos.html',
                },
                {
                    icon: 'icon-store',
                    name: 'Pedidos',
                    href: '../pages/meus-pedidos.html',
                },
            ]
        }
    ]

    function redirectToLogin() {
        window.location.href = "./../pages/login.html";
    }

    function setUserSessionInfo() {
        document.querySelector('#user-detail').classList.remove('hidden');
        const user = Services.Auth.getAuthenticatedUser();

        const nameInitials = user.name.split(' ');

        document.querySelector('#user-detail-picture').textContent = `${nameInitials[0][0]}${nameInitials[1][0]}`;
        document.querySelector('#user-header-detail-email').textContent = user.email;
        document.querySelector('#user-header-detail-name').textContent = user.name;
    }

    function checkAuthStatus() {
        if(! Services.Auth.isAuthenticated()) {
            redirectToLogin();
        }
    }

    function getCurrentLink() {
        for(let navLink of navLinks) {
            for(let link of navLink.links) {
                let pathLink = link.href.replace('..', '')
                if(window.location.pathname.endsWith(pathLink)) {
                    return link
                }
            }
        }
    }

    function rendPageTitle() {
        const currentLink = getCurrentLink();
        document.querySelector('#page-title').textContent = currentLink.name;
    }

    function renderNavLinks() {
        const navElement = document.querySelector('nav');
        const currentLink = getCurrentLink()
        console.log(currentLink)

        for(let navLink of navLinks) {
            const divNavGroupElement = document.createElement('div');
            divNavGroupElement.classList.add('nav-group');

            const spanNavGroupTitleElement = document.createElement('span');
            spanNavGroupTitleElement.classList.add('nav-group-title');
            spanNavGroupTitleElement.textContent = navLink.groupName

            divNavGroupElement.appendChild(spanNavGroupTitleElement);

            for(let link of navLink.links) {
                const iconElement = document.createElement('div');
                iconElement.classList.add('nav-icon');
                iconElement.classList.add(link.icon);

                const anchorLinkElement = document.createElement('a');
                anchorLinkElement.classList.add('nav-group-item');
                anchorLinkElement.setAttribute('href', link.href);

                if(currentLink.href === link.href) {
                    anchorLinkElement.classList.add('current-link')
                }

                const spanLinkName = document.createElement('span');
                spanLinkName.textContent = link.name;
                anchorLinkElement.appendChild(iconElement);
                anchorLinkElement.appendChild(spanLinkName);

                divNavGroupElement.appendChild(anchorLinkElement);
            }

            navElement.appendChild(divNavGroupElement);
        }
    }

    checkAuthStatus();
    setUserSessionInfo();
    renderNavLinks();
    rendPageTitle();

    window.addEventListener("userLoggedOut", redirectToLogin);
}
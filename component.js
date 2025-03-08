const navbar = document.getElementById('navbar');

function createNavbar() {
    const naviIntro = document.createElement('h1');
    naviIntro.classList.add('navi_intro');
    naviIntro.innerHTML = '<i class="fab fa-fort-awesome"></i> Kim\'s Profile';

    const naviBar = document.createElement('div');
    naviBar.classList.add('navi_bar');

    const ul = document.createElement('ul');
    const home = createNavItem('HOME', 'index.html', true);
    const about = createNavItem('ABOUT', 'about.html');
    const game = createNavItem('GAME', 'game.html');
    const contact = createNavItem('CONTACT', 'contact.html');

    ul.appendChild(home);
    ul.appendChild(about);
    ul.appendChild(game);
    ul.appendChild(contact);
    naviBar.appendChild(ul);

    navbar.appendChild(naviIntro);
    navbar.appendChild(naviBar);
}

function createNavItem(label, url, isActive = false) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = label;
    a.href = url;
    if (isActive) {
        a.classList.add('active');
    }
    li.appendChild(a);
    return li;
}

createNavbar();

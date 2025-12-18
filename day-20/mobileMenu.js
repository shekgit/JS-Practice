const mobileMenuData = {
    navItems: [
        {id: 1, text: 'About Me'},
        {id: 2, text: 'Portfolio'},
        {id: 3, text: 'Services'},
        {id: 4, text: 'Blog'}
    ],
    logo: {
        src: '../img/logo20.png',
        alt: 'Logo',
        className: 'logo'
    },
    ctaButton: {
        text: 'Book A Call',
        icon: 'ri-arrow-right-up-long-line',
        className: 'ri-book'
    }
};

function createMobileMenu() {

    function toggleMenu() {
        const menuContent = document.querySelector('.mobile-menu-content');
        const hamburger = document.querySelector('.hamburger');

        if (menuContent && hamburger) {
            if (menuContent.style.display === 'block') {
                menuContent.style.display = 'none';
                hamburger.textContent = '≡';
                hamburger.style.backgroundColor = 'white';
                document.body.style.overflow = 'auto';
                document.querySelector('.navbar').style.display = 'flex';

            } else {
                menuContent.style.display = 'block';
                hamburger.textContent = '×';
                hamburger.style.backgroundColor = 'rgba(255, 222, 173, 0.9)';
                document.body.style.overflow = 'hidden';
                document.querySelector('.navbar').style.display= 'none';
            }
        }
    }
    

    // Create hamburger
    const hamburger = React.createElement('div', {
        className: 'hamburger',
        onClick: toggleMenu
    }, '≡');

    // Menu content (initially hidden)
    const menuContent = React.createElement('div', {
        className: 'mobile-menu-content',
    }, [
        // Logo
        React.createElement('img', {
            className: mobileMenuData.logo.className,
            src: mobileMenuData.logo.src,
            alt: mobileMenuData.logo.alt
        }),

        // Nav items
        ...mobileMenuData.navItems.map(item =>
            React.createElement('h2', {key: item.id, className: 'menu'}, item.text)
        ),

        // Button
        React.createElement('button',
            {className: mobileMenuData.ctaButton.className},
            [
                mobileMenuData.ctaButton.text,
                React.createElement('i', {className: mobileMenuData.ctaButton.icon})
            ]
        )
    ]);

    // Combine everything
    return React.createElement('div', {className: 'mobile-menu'}, [
        hamburger,
        menuContent
    ]);
}
export default createMobileMenu;
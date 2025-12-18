function navbar() {
    const abt = React.createElement('h2', {className: 'nav'},'About Me');
    const por = React.createElement('h2', {className: 'nav'},'Portfolio');
    const ser = React.createElement('h2', {className: 'nav'},'Services');
    const blg = React.createElement('h2', {className: 'nav'},'Blog');
    const logo = React.createElement('img', {className: 'logo', src:'../img/logo20.png',} );
    const bookBtn = React.createElement('button', {className: 'ri-book '}, ['Book A Call',
    React.createElement('i', {className: 'ri-arrow-right-up-long-line'}, )
    ]);
    const leftDiv = React.createElement('div', {className: 'nav'},[logo, abt, por, ser, blg]);
    const rightDiv = React.createElement('div', {className: 'nav'},bookBtn);
    const nav = React.createElement('div', {className: 'navbar'} ,[leftDiv, rightDiv]);
    

    return nav;
}

export default navbar;
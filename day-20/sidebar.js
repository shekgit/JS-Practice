function sidebar(){
    const sideDiv = React.createElement('div', {className: 'side-content'},
        new Date().getFullYear()
    );
    const designation = React.createElement('div', {className: 'designation'}, 'Product Designer');
    const hr = React.createElement('hr', {className: 'hr'});
    const sidebar = React.createElement('div', {className: 'sidebar'},[sideDiv, hr, designation]);
    return sidebar;
}
export default sidebar;
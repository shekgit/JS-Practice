function hero(){
    
    const proj = React.createElement('h3',null,'Project Completed');
    const projNum = React.createElement('h2',null,[
        React.createElement('sup',{className:'plus'},'+'),
        '200']);
    const startup = React.createElement('h3',null,'Startup raised');
    const startupNum = React.createElement('h2',null, [
        React.createElement('sup',{className:'plus'},'+'),
        '50']);

    const el1 = React.createElement('div', {className: 'project',}, [projNum,proj]);
    const el2 = React.createElement('div', {className: 'startup',}, [startupNum, startup]);
    const topDiv = React.createElement('div', {className: 'project-startup'} ,[el1, el2]);

    const name = React.createElement('div', {className:'name'},'Hello');
    const desc = React.createElement('div', {className:'description'},"-It's D.Nova a design wizard");
    const midDiv = React.createElement('div', {className: 'name-desc'} ,[name, desc]);
    
    const scroll = React.createElement('button', {className:'scroll-btn'} ,['Scroll down',
        React.createElement('i', {className: 'ri-arrow-down-long-line'},''
        )]
    );
    const botDiv = React.createElement('div', {className: 'bot-div'} , scroll);

    const leftDiv = React.createElement('div', {className: 'heroData'}, [topDiv, midDiv, botDiv]);
    
    const imgDiv = React.createElement('img', {className: 'heroImg', src:'../img/20_1.png'});
    const rightDiv = React.createElement('div', {className: 'imgDiv'}, imgDiv);

    const hero = React.createElement('div', {className: 'hero'}, [leftDiv, rightDiv]);
    return hero;
}

export default hero ;
const skillsList = document.getElementById('js-skills');
const eduList = document.getElementById('js-edu');
const expList = document.getElementById('js-exp');
const portfolioList = document.getElementById('js-portfolio');

let skills = [

{
    name: 'HMTL/CSS',
    score: 70,
    logo: './img/1.png'
},

{
    name: 'JavaScript',
    score: 30,
    logo: './img/2.png'
},

{
    name: 'Git, GitHub',
    score: 30,
    logo: './img/3.png'
},

{
    name: 'Figma',
    score: 50,
    logo: './img/4.png'
},

{
    name: 'Photoshop',
    score: 80,
    logo: './img/5.png'
},

{
    name: 'Illustrator',
    score: 80,
    logo: './img/6.png'
},

{
    name: 'InDesign',
    score: 80,
    logo: './img/7.png'
}

];

let edu = [
    {
        place: 'Gubkin University',
        data: '2015-2019',
        direction: 'Faculty of Automation and Computer Science',
        position: 'Bachelor degree'
    },

    {
        place: 'Gubkin University',
        data: '2019-2021',
        direction: 'Faculty of Automation and Computer Science',
        position: 'Master degree'
    },
]

let exp = [
    {
        place: 'Transneft',
        data: '2020-now',
        direction: 'Department of Automoted Control System',
        position: 'IT-specialist'
    },
]

let portfolio = [
    {
        name: 'Belin',
        img: './img/logo.jpg',
        link: 'https://belinrussia.ru/'
    },

    {
        name: 'Gubkin University',
        img: './img/gubkin.jpg',
        link: 'https://belinrussia.ru/'
    }
]

window.onscroll = function() {
    const nav = document.getElementById('js-nav');
    scrollPos = document.documentElement.scrollTop;
    nav.style.top = 335 + scrollPos + 'px';

    console.log(scrollPos);
    console.log("nav " + nav.style.top);
}

function createElement(tag, ...classes) {
    let elem = document.createElement(tag);
    classes.forEach(item => {
        elem.classList.add(item);
    });
    return elem;
}

function showSkills() {
    
    skills.forEach(item => {
        const li = createElement('li', 'skills');
        
        const img = createElement('img', 'logo');
        img.src = item.logo;
        
        const div = createElement('div', 'skillLogo', 'mainText');
        div.innerHTML = item.name;
        
        const divProg = createElement('div', 'progress');
        
        const divBar = createElement('div');
        divBar.style.width = item.score + "%";
        
        div.prepend(img);
        divProg.appendChild(divBar);
        li.appendChild(div);
        li.appendChild(divProg);
        skillsList.appendChild(li);
    });
}

function showList(array, list) {
    
    array.forEach(item => {
        const li = createElement('li', 'shell');

        const data = createElement('div', 'title');
        data.innerHTML = item.data;

        const ul = createElement('ul', 'points', 'normalize');

        const place = createElement('li', 'title');
        place.innerHTML = item.place;

        const direction = createElement('li', 'mainText');
        direction.innerHTML = item.direction;
        
        const position = createElement('li', 'especialText');
        position.innerHTML = item.position;

        li.appendChild(data);
        ul.appendChild(place);
        ul.appendChild(direction);
        ul.appendChild(position);
        li.appendChild(ul);
        list.appendChild(li);
    });
}

function showBlock() {
    
    portfolio.forEach(item => {
        const div = createElement('div', 'portfolioBlock');
        
        const img = createElement('img', 'portfolioLogo');
        img.src = item.img;

        const a = createElement('a', 'blockName', 'links');
        a.innerHTML = item.name;
        a.href = item.link;
        a.target = "_blank";

        div.append(img);
        div.append(a);
        portfolioList.append(div);
    });
}

function init() {
    showSkills();
    showList(edu, eduList);
    showList(exp, expList);
    showBlock();

}

init();
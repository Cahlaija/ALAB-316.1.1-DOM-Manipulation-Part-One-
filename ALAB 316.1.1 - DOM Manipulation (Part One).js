//Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' }
];

//Part 1

//select and cache the main element
const mainEl = document.querySelector('main')

//set the background using css custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

//set content of main
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

//add flex-ctr class
mainEl.classList.add('flex-ctr');


//Part 2: Creating a Menu Bar

//select and cache the top menu element 
const topMenuEl = document.getElementById('top-menu');

//set height to 100%
topMenuEl.style.height = '100%';

//set background color using css custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//add flex-around class
topMenuEl.classList.add('flex-around');

//Part 3: Adding new menu buttons

//iterate through menuLinks array
menuLinks.forEach(function(link){
    //create <a> element
    const a = document.createElement('a');

    //set href attribute
a.setAttribute('href', link.href);
    //set link text
    a.textContent = link.text;
    
   //apprend link to top menu
    topMenuEl.appendChild(a);

});


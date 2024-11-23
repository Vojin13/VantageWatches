
// Main

const nav = [
    {
        PageName: 'Home',
        Link: '/index.html',
        Active: true,
    },
    {
        PageName: 'Shop',
        Link: '/shop.html',
        Active: false,
    },
    {
        PageName: 'Contact',
        Link: '/contact.html',
        Active: false,
    },
    {
        PageName: 'About author',
        Link: '/about-author.html',
        Active: false,
    }
]

const navMenu = document.querySelector('#menu')

let html = '<ul>'

for(let element of nav)
{
    html += `<li><a href="${element.Link}" class="${element.Active ? 'active-link' : ' '}">${element.PageName}</a></li>`
}

html += '</ul>'

navMenu.innerHTML += html

const mainWatch = {
    Name: 'Space Timer Jupiter Gold',
    Serial: 'CH-9341.2-CUBK',
    Image: 'Main Watch'
}

const mainLeftSection = document.querySelector('#main-left')

html = `<div><h2>${mainWatch.Serial}</h2><h1>${mainWatch.Name}</h1><a href='shop.html'>Find more</a></div>`
mainLeftSection.innerHTML += html

const mainRightSection = document.querySelector('#main-right')

html = `<div><img alt='${mainWatch.Image}' src='assets/img/${mainWatch.Image}.png'/></div>`
mainRightSection.innerHTML = html

// New Arrivals

const newArrivalsWatches = [
    {
        Name: 'Chronoswiss SkelTec',
        Serial: 'CH-9341.2-CUBK',
        Price: '$22,000',
        Image: 'Watch 1 Image',
        Limited: true
    },
    {
        Name: 'Ulysse Nardin Marine',
        Serial: '1192-310-0A/1A',
        Price: '$23,900',
        Image: 'Watch 2 Image',
        Limited: false
    },
    {
        Name: 'Zenith Defy Skeleton',
        Serial: '03.9300.3620/79.I001',
        Price: '$11,000',
        Image: 'Watch 3 Image',
        Limited: false
    },
    {
        Name: 'Hamilton Khaki',
        Serial: 'H70215130',
        Price: '$22,200',
        Image: 'Watch 4 Image',
        Limited: false
    }
]

const newArrivalsSection = document.querySelector('#newArrivals')

html = `<div id='watches'>`

for(watch of newArrivalsWatches)
{
    html += `<div class='watch'>`
    if(watch.Limited)
        html += `<div class='limited-edition'></div>`

    
            html += `<img src='assets/img/${watch.Image}.png' alt='${watch.Name}'/>
                     <p>${watch.Serial}</p>
                     <p>${watch.Name}</p>
                     <p>${watch.Price}</p>
                     <a href='/shop.html'>Buy now</a>
                     </div>`
}

html += `</div>`

newArrivalsSection.innerHTML += html

// Counter

let counter = setInterval(function(){
    const timeNow = new Date()
    const endOfDiscount = new Date("December 1, 2024 20:00:00")
    const timeLeft = endOfDiscount.getTime() - timeNow.getTime()

    let secondMS = 1000
    let minuteMS = secondMS*60
    let hourMS = minuteMS*60
    let daysMS = hourMS*24

    let seconds = Math.floor(timeLeft % minuteMS / secondMS)
    let minutes = Math.floor(timeLeft % hourMS / minuteMS)
    let hours = Math.floor(timeLeft % daysMS / hourMS)
    let days = Math.floor(timeLeft / daysMS)

    const counterRight = document.querySelector('.counter-right')

    html = `<div><h2>${days}</h2><p>Days</p></div><h3>:</h3>`
    html += `<div><h2>${hours}</h2><p>Hours</p></div><h3>:</h3>`
    html += `<div><h2>${minutes}</h2><p>Minutes</p></div><h3>:</h3>`
    html += `<div><h2>${seconds}</h2><p>Seconds</p></div>`

    counterRight.innerHTML = html
},1000)

// Your Ideal Watch

let idealWatchContent = [
    {
        Image: 'Men Watches',
        Text: 'Watches For Men'
    },
    {
        Image: 'Women Watches',
        Text: 'Watches For Women'
    },
    {
        Image: 'Kids Watches',
        Text: 'Watches For Kids'
    }
]

const yourIdealWatchSection = document.querySelector('#yourIdealWatchContent')

html = ``

for(let element of idealWatchContent)
{
    html += `<a href='shop.html'><div class='ideal-watch'><img src='assets/img/${element.Image}.jpg' alt=''/><h2>${element.Text}</h2></div></a>`
}

yourIdealWatchSection.innerHTML += html;

// Brands

const brandsSection = document.querySelector('#brands')

html = ''

const brandNames = ['Cartier','Rolex','Casio','Tissot','Longines']

for(let element of brandNames)
{
    html += `<div class="brand-block"><img alt='${element}' src="assets/img/${element}.png"/></div>`
}

brandsSection.innerHTML += html

// Footer

const quickLinks = document.querySelector('#footer-links')

html = '<ul>'

for(let element of nav)
{
    html += `<li><a href='${element.Link}'>${element.PageName}</a></li>`
}

html += '</ul>'

quickLinks.innerHTML += html
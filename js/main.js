
const allWatches = [
    {
        Name: 'Space Timer Jupiter Gold',
        Serial: 'CH-9341.2-CUBK',
        Image: 'Jupiter Gold',
        Price: '$29,900',
        Limited: true
    },
    {
        Name: 'Arnold & Son Time Pyramid',
        Serial: 'AS001',
        Price: '$25,000',
        Image: 'Arnold & Son Time Pyramid',
        Limited: true
    },
    {
        Name: 'Breguet Type XX',
        Serial: 'BG020',
        Price: '$18,500',
        Image: 'Breguet Type XX',
        Limited: false
    },
    {
        Name: 'Breitling Superocean',
        Serial: 'BR030',
        Price: '$4,500',
        Image: 'Breitling Superocean Automatic 42',
        Limited: false
    },
    {
        Name: 'Bremont Terra Nova',
        Serial: 'BT040',
        Price: '$7,500',
        Image: 'Bremont Terra Nova',
        Limited: false
    },
    {
        Name: 'Bulova Super Seville',
        Serial: 'BS050',
        Price: '$2,500',
        Image: 'Bulova Super Seville',
        Limited: false
    },
    {
        Name: 'Defy Skyline Americas',
        Serial: 'DS060',
        Price: '$10,000',
        Image: 'Defy Skyline Americas',
        Limited: true
    },
    {
        Name: 'Longines Spirit Flyback',
        Serial: 'LS070',
        Price: '$3,200',
        Image: 'Longines Spirit Flyback',
        Limited: false
    },
    {
        Name: 'NOMOS Tangente 2date',
        Serial: 'NT080',
        Price: '$3,500',
        Image: 'NOMOS Tangente 2date',
        Limited: false
    },
    {
        Name: 'Original Spezialist SeaQ',
        Serial: 'OS090',
        Price: '$6,000',
        Image: 'Original Spezialist SeaQ Chronograph',
        Limited: false
    },
    {
        Name: 'Shinola The Lava Lake',
        Serial: 'SM100',
        Price: '$1,800',
        Image: 'Shinola Monster The Lava Lake',
        Limited: true
    },
    {
        Name: 'Spezialist SeaQ Chronograph',
        Serial: 'SS110',
        Price: '$5,700',
        Image: 'Spezialist SeaQ Chronograph',
        Limited: false
    },
    {
        Name: 'Chronoswiss SkelTec',
        Serial: 'CH-9341.2-CUBK',
        Price: '$22,000',
        Image: 'Chronoswiss SkelTec',
        Limited: true
    },
    {
        Name: 'Ulysse Nardin Marine',
        Serial: '1192-310-0A/1A',
        Price: '$23,900',
        Image: 'Ulysse Nardin Marine Torpilleur',
        Limited: false
    },
    {
        Name: 'Zenith Defy Skeleton',
        Serial: '03.9300.3620/79.I001',
        Price: '$11,000',
        Image: 'Zenith Defy Skeleton',
        Limited: false
    },
    {
        Name: 'Hamilton Khaki',
        Serial: 'H70215130',
        Price: '$22,200',
        Image: 'Titanium Auto',
        Limited: false
    }
]

const nav = [
    {
        PageName: 'Home',
        Link: '/index.html',
        Active: false,
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

let pathName = window.location.pathname

if(pathName == '/')
    pathName = '/index.html'

// Index

if(pathName == '/index.html')
{
    nav[0].Active = true

    // Main

    const navMenu = document.querySelector('#menu')

    var html = '<ul>'

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

    const newArrivalsWatches = allWatches.slice(allWatches.length-4,allWatches.length)

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
        const endOfDiscount = new Date("December 31, 2024 20:00:00")
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
}

// Shop

else if(pathName == '/shop.html'){

    nav[1].Active = true

    const navMenu = document.querySelector('#menu')

    html = '<ul>'

    for(let element of nav)
    {
        html += `<li><a href="${element.Link}" class="${element.Active ? 'active-link' : ' '}">${element.PageName}</a></li>`
    }

    html += '</ul>'

    navMenu.innerHTML += html

    const products = document.querySelector('#products')

    html = ''

    for(watch of allWatches)
        {
            html += `<div class='watch'>`
            if(watch.Limited)
                html += `<div class='limited-edition'></div>`
    
            
                    html += `<img src='assets/img/${watch.Image}.png' alt='${watch.Name}'/>
                            <p>${watch.Serial}</p>
                            <p>${watch.Name}</p>
                            <p>${watch.Price}</p>
                            <a href='/contact.html'>Buy now</a>
                            </div>`
        }

    products.innerHTML = html

    const quickLinks = document.querySelector('#footer-links')

    html = '<ul>'

    for(let element of nav)
    {
        html += `<li><a href='${element.Link}'>${element.PageName}</a></li>`
    }

    html += '</ul>'

    quickLinks.innerHTML += html
}

else if(pathName == '/contact.html')
{
    nav[2].Active = true

    const navMenu = document.querySelector('#menu')

    html = '<ul>'

    for(let element of nav)
    {
        html += `<li><a href="${element.Link}" class="${element.Active ? 'active-link' : ' '}">${element.PageName}</a></li>`
    }

    html += '</ul>'

    navMenu.innerHTML += html

    const quickLinks = document.querySelector('#footer-links')

    html = '<ul>'

    for(let element of nav)
    {
        html += `<li><a href='${element.Link}'>${element.PageName}</a></li>`
    }

    html += '</ul>'

    quickLinks.innerHTML += html
}

else if(pathName == '/about-author.html')
{
    nav[3].Active = true
    const navMenu = document.querySelector('#menu')

    html = '<ul>'

    for(let element of nav)
    {
        html += `<li><a href="${element.Link}" class="${element.Active ? 'active-link' : ' '}">${element.PageName}</a></li>`
    }

    html += '</ul>'

    navMenu.innerHTML += html

    const quickLinks = document.querySelector('#footer-links')

    html = '<ul>'

    for(let element of nav)
    {
        html += `<li><a href='${element.Link}'>${element.PageName}</a></li>`
    }

    html += '</ul>'

    quickLinks.innerHTML += html
}
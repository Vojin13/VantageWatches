
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
        Link: 'index.html',
        Active: false,
    },
    {
        PageName: 'Shop',
        Link: 'shop.html',
        Active: false,
    },
    {
        PageName: 'Contact',
        Link: 'contact.html',
        Active: false,
    },
    {
        PageName: 'About author',
        Link: 'about-author.html',
        Active: false,
    }
]

const brands = [
    'Arnold & Son',
    'Breguet',
    'Breitling',
    'Bremont',
    'Bulova',
    'Defy',
    'Hamilton',
    'NOMOS',
    'Shinola',
    'Zenith',
    'Cartier',
    'Rolex',
    'Casio',
    'Tissot',
    'Longines'
]

let pathNameArray = window.location.pathname.split('/')

let pathName = '/'+pathNameArray[pathNameArray.length-1]


if(pathName == '/')
    pathName = '/index.html'

// Index

if(pathName == '/index.html')
{
    nav[0].Active = true

    // Main

    renderNav('#menu', nav)

    const mainWatch = {
        Name: 'Space Timer Jupiter Gold',
        Serial: 'CH-9341.2-CUBK',
        Image: 'Main Watch'
    }

    const mainLeftSection = document.querySelector('#main-left')

    html = `<div><h2>${mainWatch.Serial}</h2><h1>${mainWatch.Name}</h1><a href='#newArrivals'>Find more <i class="fa-solid fa-arrow-down-long"></i></a></div>`
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
                        <a href='shop.html'>Buy now</a>
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

    // Newsletter

    const emailInput = document.querySelector('#email')
    const submit = document.querySelector('#submit')

    submit.addEventListener('click',function(e){
        e.preventDefault()
        const emailValue = emailInput.value.trim()
        const emailRegEx = /^[\w\d\.]+@[\w\d\.]+\.[a-zA-Z\d]{2,}$/
        const errorMsg = document.querySelector('#error > span')
        if(emailRegEx.test(emailValue)){
            errorMsg.classList.remove('d-none')
            errorMsg.classList.remove('error')
            errorMsg.classList.add('success')
            errorMsg.textContent = "Your email address has been successfully submitted!"
            emailInput.value = ''
        }
        else{
            errorMsg.classList.remove('d-none')
            errorMsg.classList.remove('success')
            errorMsg.classList.add('error')
            errorMsg.textContent = "Must contain '\@' and a domain, e.g., example.com."
        }
    })

    // Brands

    const brandsSection = document.querySelector('#brands')

    html = ''

    const brandNames = brands.slice(brands.length-5,brands.length)

    for(let element of brandNames)
    {
        html += `<div class="brand-block"><img alt='${element}' src="assets/img/${element}.png"/></div>`
    }

    brandsSection.innerHTML += html

    // Footer

    renderFooter('#footer-links', nav)
}

// Shop

else if(pathName == '/shop.html'){

    nav[1].Active = true

    renderNav('#menu', nav)

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
                            <a href='contact.html'>Buy now</a>
                            </div>`
        }

    products.innerHTML = html

    renderFooter('#footer-links', nav)
}

else if(pathName == '/contact.html')
{
    nav[2].Active = true

    renderNav('#menu', nav)

    // Dinamicko ispisivanje ddl liste

    const brandsSelect = document.querySelector('#brand')

    html = '<option value="0">Choose...</option>'

    for(let index in brands)
    {
        html += `<option value='${+index+1}'>${brands[index]}</option>`
    }

    brandsSelect.innerHTML = html

    // Validacija forme

    // Dohvatanje elemenata

    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const email = document.querySelector("#email")
    const phone = document.querySelector("#phone")
    const brand = document.querySelector("#brand")
    const message = document.querySelector("#msg")
    const submit = document.querySelector("#submit")

    const radioError = document.querySelector('#radioError')
    const cbError = document.querySelector('#cbError')

    submit.addEventListener("click",function(е){
        е.preventDefault()
        let valid = true

        const watchType = document.querySelector('input[name="watchType"]:checked')
        const features = document.querySelectorAll('input[name="features"]:checked')

        // RegEx
        const regFirstName = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})*$/
        const regLastName = /^[A-Z][a-z]{2,20}(\s[A-Z][a-z]{2,20})*$/
        const regEmail = /^[\w\d\.]+@[\w\d\.]+\.[a-zA-Z\d]{2,}$/
        const regPhone = /^(\+)?[0-9]{7,15}$/

        testRegEx(regFirstName,firstName)
        testRegEx(regLastName,lastName)
        testRegEx(regEmail,email)
        testRegEx(regPhone,phone)

        valid = valid && testRegEx(regFirstName,firstName)
        valid = valid && testRegEx(regLastName,lastName)
        valid = valid && testRegEx(regEmail,email)
        valid = valid && testRegEx(regPhone,phone)

        if(brand.selectedIndex == 0) {
            brand.nextElementSibling.classList.remove('d-none')
            valid = false
        }
        else {
            brand.nextElementSibling.classList.add('d-none')
        }


        if(!watchType) {
            radioError.classList.remove('d-none')
            valid = false
        }
        else {
            radioError.classList.add('d-none')
        }

        if(features.length == 0) {
            cbError.classList.remove('d-none')
            valid = false
        }
        else {
            cbError.classList.add('d-none')
        }

        if(valid) {
            message.nextElementSibling.classList.remove('d-none')
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            phone.value = '';
            brand.selectedIndex = 0;
            watchType.checked = false;
            Array.from(features).forEach((element) => {
                element.checked = false;
            })
        } 
        else {
            message.nextElementSibling.classList.add('d-none')
        }
 
    })

    const questions = [
        {
            Title: "How can I contact customer support?",
            Answer: "For any inquiries or product support, you can reach us via email at support@vantagewatches.com, or by calling +123 456 7890. You can also fill out the contact form on our website."
        },
        {
            Title: "How can I track my order status?",
            Answer: "You can track the status of your order by logging into your account on our website and navigating to the 'My Orders' section. You will also receive email notifications at every stage of your delivery."
        },
        {
            Title: "Do you offer international shipping?",
            Answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on your location. You can check the shipping options at checkout."
        },
        {
            Title: "Can I return or exchange a product?",
            Answer: "Yes, we offer a 30-day return policy for most products. If you're not satisfied with your purchase, you can return or exchange the item within 30 days of receiving it. Please visit our Returns & Exchanges page for more details."
        },
        {
            Title: "What payment methods do you accept?",
            Answer: "We accept various payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and processed through our trusted payment partners."
        },
        {
            Title: "How do I take care of my Vantage Watch?",
            Answer: "To keep your Vantage watch in the best condition, we recommend cleaning it regularly with a soft cloth and storing it in a dry, cool place when not in use. Avoid exposing it to extreme temperatures or moisture. Please refer to our Watch Care page for more tips."
        }
    ]

    const FAQs = document.querySelector("#FAQs")

    html = ``

    for(let element of questions)
    {
        html += `<h3>${element.Title}</h3><div><p>${element.Answer}</p></div>`
    }

    FAQs.innerHTML = html
    
    renderFooter('#footer-links', nav)
}

else if(pathName == '/about-author.html')
{
    nav[3].Active = true

    renderNav('#menu', nav)

    renderFooter('#footer-links', nav)
}

function renderNav(menuSelector, navArray) {
    const navMenu = document.querySelector(menuSelector)

    var html = '<ul>'

    for(let element of navArray)
    {
        html += `<li><a href="${element.Link}" class="${element.Active ? 'active-link' : ' '}">${element.PageName}</a></li>`
    }

    html += '</ul>'

    navMenu.innerHTML += html
}

function renderFooter(footerSelector, navArray) {
    const quickLinks = document.querySelector(footerSelector)

    var html = '<ul>'

    for(let element of navArray)
    {
        html += `<li><a href='${element.Link}'>${element.PageName}</a></li>`
    }

    html += '</ul>'

    quickLinks.innerHTML += html
}

function testRegEx(regEx,object) {
    if(regEx.test(object.value.trim())) {
        object.nextElementSibling.classList.add('d-none')
        return true
    }
    else {
        object.nextElementSibling.classList.remove('d-none')
        return false
    }
}

// jQuery

$(document).ready(function(){
    
    $('input[type="text"]').focus(function(){
        $(this).css(`box-shadow`,`0 0 7px #FF8000`)
    }).blur(function(){
        $(this).css(`box-shadow`,`none`)
    })

    $('textarea').focus(function(){
        $(this).css(`box-shadow`,`0 0 7px #FF8000`)
    }).blur(function(){
        $(this).css(`box-shadow`,`none`)
    })

    $('#form #submit').hover(
        function() {
            $(this).css({'background-color':'#002762','color':'#FFFFFF'})
        },
        function() {
            $(this).css({'background-color':'#FFFFFF','color':'#002762'})
        }
    )

    $('#menu ul li a').hover(
        function() {
            $(this).css('color', '#FFC993')
        },
        function() {
            if (!$(this).hasClass('active-link')) {
                $(this).css('color', '#FFFFFF')
            }
        }
    )

    // FAQ
    if(pathName == '/contact.html')
        $("#FAQs").accordion({
            collapsible: true,
            heightStyle: "content",
            active: false
        })
    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.back-to-top').fadeIn('slow')
        } else {
            $('.back-to-top').fadeOut('slow')
        }
    })

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 200, 'swing')
        return false
    })

})
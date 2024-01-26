const container = document.querySelector(".sliderContainer");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "images/air.png",
            },
            {
                code: "darkblue",
                img: "images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "images/jordan.png",
            },
            {
                code: "green",
                img: "images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "images/blazer.png",
            },
            {
                code: "green",
                img: "images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "images/crater.png",
            },
            {
                code: "lightgray",
                img: "images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "images/hippie.png",
            },
            {
                code: "black",
                img: "images/hippie2.png",
            },
        ],
    },
];

let chosen = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        container.style.transform = `translateX(${-100 * index}vw)`;

        menuItems.forEach(item => {
            item.style.color = 'lightgray';
            item.style.textDecoration = 'none';
        })
        item.style.color = 'white';
        item.style.textDecoration = 'underline';

        chosen = products[index];
        currentProductTitle.textContent = chosen.title;
        currentProductPrice.textContent = "$" + chosen.price;
        currentProductImg.src = chosen.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosen.colors[index].code;
        })
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = chosen.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})


const productBtn = document.querySelector('.productBtn');
const close = document.querySelector('.close');
const payment = document.querySelector('.payment');

productBtn.addEventListener('click', ()=> {
    payment.style.display = 'flex';
})

close.addEventListener('click', ()=> {
    payment.style.display = 'none';
})
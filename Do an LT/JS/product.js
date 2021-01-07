document.addEventListener("DOMContentLoaded", function () {
    // khuyen mai hot
    let saleHot = [
        {
            image: "../Image/oppo-reno5-white-600x600-400x400.jpg",
            iconSale: '-7%',
            icon: '<i class="fas fa-heart"></i>',
            name: 'OPPO Reno5',
            moneyOne: '6.990.000',
            moneyTwo: '8.990.000',
            sale: '-7%'
        },
        {

            image: "../Image/samsung-galaxy-a10s-xanh-600x600.jpg",
            iconSale: '-32%',
            icon: '<i class="fas fa-heart"></i>',
            name: ' Samsung Galaxy A10s',
            moneyOne: '2.490.000',
            moneyTwo: '3.690.000',
            sale: '-32%'
        },
        {
            image: "../Image/vivo-v20-(4).jpg",
            iconSale: '-5%',
            icon: '<i class="fas fa-heart"></i>',
            name: 'Vivo V20',
            moneyOne: '7.990.000',
            moneyTwo: '8.490.000',
            sale: '-5%'
        },

    ];
    for (let i = 0; i < saleHot.length; i++) {
        let contentBlockSale = `
        
        <a href="#" class="product-link">
            <img src="${saleHot[i].image}"  alt="">
        </a>
        <span class="badge-product">
        ${saleHot[i].iconSale}
        </span>
        <span class="icon-heart">
        ${saleHot[i].icon}
        </span>
        <div class="info-product">
            <a href="#" class="product-link">
                <h4 class="product-name">
                ${saleHot[i].name}
                </h4>
            </a>
            <div class="action-money">
                <span class="money">
                ${saleHot[i].moneyOne}
                </span>
                <span class="money">
                ${saleHot[i].moneyTwo}
                </span>
                <span class="sale">${saleHot[i].sale}</span>
            </div>
        </div>
        `;
        let contentBlockSaleNew = document.createElement('div')
        contentBlockSaleNew.innerHTML = contentBlockSale;
        let fatherSale = document.getElementById('sale-hot');
        fatherSale.appendChild(contentBlockSaleNew);
        contentBlockSaleNew.classList.add('box-product')
    };
    // dien thoai
    let phone = [
        {
            imagePhone: "../Image/oppo-a92-(21).jpg",
            iconPhone: '-7%',
            iconSalePhone: '<i class="fas fa-heart"></i>',
            namePhone: 'OPPO A92',
            moneyOnePhone: '5.990.000',
            moneyTwoPhone: '6.490.000',
            salePhone: '-7%'
        },
        {
            imagePhone: "../Image/iphone-12-xanh-duong-new-600x600-600x600.jpg",
            iconPhone: '-8%',
            iconSalePhone: '<i class="fas fa-heart"></i>',
            namePhone: 'Iphone 12 64GB',
            moneyOnePhone: '22.990.000',
            moneyTwoPhone: '24.990.000',
            salePhone: '-8%'
        },
        {
            imagePhone: "../Image/xiaomi-redmi-9-(34).jpg",
            iconPhone: '-12%',
            iconSalePhone: '<i class="fas fa-heart"></i>',
            namePhone: 'Xiaomi Redmi 9 4GB/64GB',
            moneyOnePhone: '3.490.000',
            moneyTwoPhone: '3.990.000',
            salePhone: '-12%'
        },
        {
            imagePhone: "../Image/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
            iconPhone: '-5%',
            iconSalePhone: '<i class="fas fa-heart"></i>',
            namePhone: 'Samsung Galaxy M51',
            moneyOnePhone: '8.990.000',
            moneyTwoPhone: '9.490.000',
            salePhone: '-5%'
        },
        {
            imagePhone: "../Image/realme-c17-green-600x600-1-600x600.jpg",
            iconPhone: '-5%',
            iconSalePhone: '<i class="fas fa-heart"></i>',
            namePhone: 'Realme C17',
            moneyOnePhone: '4.990.000',
            moneyTwoPhone: '5.290.000',
            salePhone: '-5%'
        },
    ];
    for (let i = 0; i < phone.length; i++) {
        let contentBlockPhone = `
        <a href="#" class="product-link">
            <img src="${phone[i].imagePhone}"  alt="">
        </a>
        <span class="badge-product">
        ${phone[i].iconPhone}
        </span>
        <span class="icon-heart">
        ${phone[i].iconSalePhone}
        </span>
        <div class="info-product">
            <a href="#" class="product-link">
                <h4 class="product-name">
                ${phone[i].namePhone}
                </h4>
            </a>
            <div class="action-money">
                <span class="money">
                ${phone[i].moneyOnePhone}
                </span>
                <span class="money">
                ${phone[i].moneyTwoPhone}
                </span>
                <span class="sale">${phone[i].salePhone}</span>
            </div>
        </div>
        `
        let contentBlockPhoneNew = document.createElement('div')
        contentBlockPhoneNew.innerHTML = contentBlockPhone;
        let fatherPhone = document.getElementById('phone');
        fatherPhone.appendChild(contentBlockPhoneNew);
        contentBlockPhoneNew.classList.add('box-product')
    };
    // tablet
    let tablet = [
        {
            imagePhoneTablet: "../Image/samsung-galaxy-tab-a8-t295-2019-silver-600x600-1-600x600.jpg",
            iconPhoneTablet: '-8%',
            iconSalePhoneTablet: '<i class="fas fa-heart"></i>',
            namePhoneTablet: 'Samsung Galaxy Tab A8 8" T295',
            moneyOnePhoneTablet: '3.390.000',
            moneyTwoPhoneTablet: '3.690.000',
            salePhoneTablet: '-8%'
        },
        {
            imagePhoneTablet: "../Image/lenovo-tab-a22-xam-600x600.jpg",
            iconPhoneTablet: '-12%',
            iconSalePhoneTablet: '<i class="fas fa-heart"></i>',
            namePhoneTablet: 'Lenovo Tab M8 (TB-8505X)',
            moneyOnePhoneTablet: '3.240.000',
            moneyTwoPhoneTablet: '3.690.000',
            salePhoneTablet: '-12%'
        },
        {
            imagePhoneTablet: "../Image/ipad-pro-11-inch-2020-xam-600x600-600x600.jpg",
            iconPhoneTablet: '-6%',
            iconSalePhoneTablet: '<i class="fas fa-heart"></i>',
            namePhoneTablet: 'iPad Pro 11 inch Wifi 128GB',
            moneyOnePhoneTablet: '20.990.000',
            moneyTwoPhoneTablet: '21.990.000',
            salePhoneTablet: '-6%'
        },
        {
            imagePhoneTablet: "../Image/ipad-pro-12-9-inch-wifi-128gb-2020-bac-600x600-1-600x600.jpg",
            iconPhoneTablet: '-5%',
            iconSalePhoneTablet: '<i class="fas fa-heart"></i>',
            namePhoneTablet: 'iPad Pro 12.9 inch Wifi 128GB',
            moneyOnePhoneTablet: '26.490.000',
            moneyTwoPhoneTablet: '27.990.000',
            salePhoneTablet: '-5%'
        },
        {
            imagePhoneTablet: "../../Image/ipad-4-cellular-hong-new-600x600-600x600.jpg",
            iconPhoneTablet: '-5%',
            iconSalePhoneTablet: '<i class="fas fa-heart"></i>',
            namePhoneTablet: 'iPad Air 4 Wifi Cellular 64GB',
            moneyOnePhoneTablet: '19.990.000',
            moneyTwoPhoneTablet: '20.990.000',
            salePhoneTablet: '-5%'
        },
        {
            imagePhoneTablet: "../Image/huawei-mediapad-m5-lite-gray-600x600-1-600x600.jpg",
            iconPhoneTablet: '-0%',
            iconSalePhoneTablet: '<i class="fas fa-heart"></i>',
            namePhoneTablet: 'Huewei MediaPad M5 Lite',
            moneyOnePhoneTablet: '7.990.000',
            salePhoneTablet: '-0%'
        },
        {
            imagePhoneTablet: "../Image/huawei-mediapad-t5-101-inch-3gb-32gb-vang-114920-114910-400x400.jpg",
            iconPhoneTablet: '-0%',
            iconSalePhoneTablet: '<i class="fas fa-heart"></i>',
            namePhoneTablet: 'Huewei Mediapad T5 10.1 inch (3GB/32GB)',
            moneyOnePhoneTablet: '4.990.000',
            salePhoneTablet: '-0%'
        },

    ];
    for (let i = 0; i < tablet.length; i++) {
        let contentTablet = `
        <a href="#" class="product-link">
            <img src="${tablet[i].imagePhoneTablet}"  alt="">
        </a>
        <span class="badge-product">
        ${tablet[i].iconPhoneTablet}
        </span>
        <span class="icon-heart">
        ${tablet[i].iconSalePhoneTablet}
        </span>
        <div class="info-product">
            <a href="#" class="product-link">
                <h4 class="product-name">
                ${tablet[i].namePhoneTablet}
                </h4>
            </a>
            <div class="action-money">
                <span class="money">
                ${tablet[i].moneyOnePhoneTablet}
                </span>
                <span class="money">
                ${tablet[i].moneyTwoPhoneTablet}
                </span>
                <span class="sale">${tablet[i].salePhoneTablet}</span>
            </div>
        </div>
        `
        let tabletNew = document.createElement('div')
        tabletNew.innerHTML = contentTablet;
        let fatherTablet = document.getElementById('tablet');
        fatherTablet.appendChild(tabletNew);
        tabletNew.classList.add('box-product')
    };



}, false);
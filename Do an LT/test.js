let arrayFile = [
    {  
        name: 'Nguyễn văn B',
        title: 'em sinh ra va lơn len'
    },
    {   
        name: 'Nguyễn văn C',
        title: 'em yêu anh'
    }
];
for (let i = 0; i<arrayFile.length;i++) {
    let contentBlock = `
   
            <h2>
            ${arrayFile[i].name}
            </h2>
            <p>
            ${arrayFile[i].title}
            </p>
          
    `;
    let phantumoi = document.createElement('div');
    phantumoi.innerHTML = contentBlock;
    let bo = document.getElementById('product-he');
    bo.appendChild(phantumoi);
    console.log(contentBlock)
}

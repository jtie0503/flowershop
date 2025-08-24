const product = [
    {category:"boquet", price: 1500, product: "1 Dozen white roses", img: "IMG/img1.png" },
     {category:"boquet", price: 2000, product: "1 Dozen Red roses w/ Teddy bear", img: "IMG/img2.png" },
      {category:"boquet", price: 1500, product: "1 Dozen white roses", img: "IMG/img3.png" },
       {category:"boquet", price: 1200, product: "Money boquet" , img: "IMG/img4.png"},
        {category:"boquet", price: 700, product: "3pcs.Roses w/ Alstroemeria", img: "IMG/img5.png"},
         {category:"boquet", price: 800, product: "1 pc. Sunflower w/ Asssorted Malaysian flower", img: "IMG/img6.png" },
          {category:"boquet", price: 600, product: "8pcs white roses", img: "img/img7.png" },
           {category:"boquet", price: 1000, product: "6pcs. white Roses w/ Alstroemeria", img: "IMG/img8.png" },
            {category:"boquet", price: 1200, product: "9pcs.white & red Roses w/ Alstroemeria", img: "IMG/img9.png" },
             {category:"boquet", price: 1500, product: "6 pcs. sunflower" , img: "IMG/img10.png"},
              {category:"boquet", price: 1500, product: "6pcs red roses & 2pcs sunflower" , img: "IMG/img11.png" },
               {category:"boquet", price: 1200, product: "5pcs. sunflower" , img: "IMG/img12.png" },
                {category:"boquet", price: 1500, product: "1 Dozen red roses" , img: "IMG/img13.png" },
                 {category:"boquet", price: 1500, product: "5pcs. sunflower" , img: "IMG/img14.png"},
                  {category:"boquet", price: 2500, product: "10ps Dried white & red roses", img: "IMG/img15.png" },
                 
                  //pot//
                   {category:"flowerpot", price: 150, product: "Flower POt" , img: "IMG/img16.png"},
                    {category:"flowerpot", price: 150, product: "Flower POt", img: "IMG/img17.png" },
                     {category:"flowerpot", price: 150, product: "Flower POt", img: "IMG/img18.png" },
                      {category:"flowerpot", price: 150, product: "Flower POt" , img: "IMG/img19.png"},

                       //flowerspray//

                        {category:"flowerspray", price: 500, product: "Flat Spray", img: "IMG/img27.png" },
                        
                        {category:"flowerspray", price: 500, product: "Flat Spray", img: "IMG/img28.png" },
                        
                        {category:"flowerspray", price: 800, product: "1 sided spray", img: "IMG/img29.png" },
                         {category:"flowerspray", price: 1200, product: "1 sided spary 1 dozen anthurium ", img: "IMG/img30.png" },
                
                          //flowerbasket//
                        {category:"flowerbasket", price: 250, product: "Flower Basket" , img: "IMG/img20.png" },
                        {category:"flowerbasket", price: 250, product: "Flower Basket" , img: "IMG/img21.png" },
                        {category:"flowerbasket", price: 250, product: "Flower Basket", img: "IMG/img22.png" },
                        {category:"flowerbasket", price: 250, product: "Flower Basket", img: "IMG/img23.png"},
                         {category:"flowerbasket", price: 250, product: "Flower Basket", img: "IMG/img24.png"},
                          {category:"flowerbasket", price: 250, product: "Flower Basket", img: "IMG/img25.png"},
                           {category:"flowerbasket", price: 250, product: "Flower Basket", img: "IMG/img26.png"},

                         //Funeral flower//
                          {category:"funeralflower", price: 15000, product: "Wreat anthurium white w/radus", img: "IMG/img31.png" },
                           {category:"funeralflower", price: 15000, product: "Wreat anthurium yellow w/radus" , img: "IMG/img32.png" },
                           {category:"funeralflower", price: 8000, product: "2 layer white orchids whiteus", img: "IMG/img33.png" },
                           {category:"funeralflower", price: 7000, product: "2 dozen orange anthurium w/ 4pcs. sunflower", img: "IMG/img34.png" },
                           {category:"funeralflower", price: 10000, product: "Stargazer Casa Blanca" , img: "IMG/img35.png" },
                            {category:"funeralflower", price: 10000, product: "Stargazer Casa Blanca" , img: "IMG/img36.png" },
                             {category:"funeralflower", price: 10000, product: "Stargazer Casa Blanca" , img: "IMG/img37.png" }


]

const selectContainer = document.querySelector(".product-select select");
const productContainer = document.querySelector(".slider-track");

function flowersCard(flowerCategory){
    if(flowerCategory === "all"){
        // diretso .map kasi lahat ng product gusto ipakita
        return product.map(function(item){
            return `
                <div class="product-card">
                    <img src="${item.img}">
                     <hr>
                    <h3>${item.product}</h3>
                    <p>P${item.price}</p>
                     <a href=""><img src="IMG/flower-shop.png" alt="Add to Cart" class="cartshop"></a>
                </div>
            `;
        }).join(""); 
    } else {
        // i-filter muna, tapos saka i-map
        return product
          .filter(function(item){
              return item.category === flowerCategory;
          })
          .map(function(item){
              return `
                  <div class="product-card">
                      <img src="${item.img}">
                      <hr>
                      <h3>${item.product}</h3>
                      <p>P${item.price}</p>
                       <a href=""><img src="IMG/flower-shop.png" alt="Add to Cart" class="cartshop"></a>
                  </div>
              `;
          }).join("");
    }
}

selectContainer.addEventListener("change", function(){
    productContainer.innerHTML = flowersCard(selectContainer.value);
});


//form//
 const typeSelect = document.getElementById("type");
    const condolenceBox = document.getElementById("condolenceBox");
    const descBox = document.getElementById("descBox");

    typeSelect.addEventListener("change", () => {
      if (typeSelect.value === "Funeral") {
        condolenceBox.style.display = "block";
        descBox.style.display = "none";
      } else {
        condolenceBox.style.display = "none";
        descBox.style.display = "block";
      }
    });








      (function () {
    const groups = document.querySelectorAll('.footer-links h3');
    groups.forEach(h3 => {
      const list = h3.nextElementSibling;
      if (!list || list.tagName !== 'UL') return;

      // collapse by default on mobile
      const collapse = () => {
        groups.forEach(g => {
          g.classList.remove('is-open');
          const ul = g.nextElementSibling;
          if (ul && ul.tagName === 'UL') ul.classList.remove('open');
        });
      };

      h3.addEventListener('click', () => {
        const isOpen = h3.classList.contains('is-open');
        collapse();
        if (!isOpen) {
          h3.classList.add('is-open');
          list.classList.add('open');
        }
      });
    });

    // Optional: auto-open the first section on mobile
    if (groups[0]) {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) groups[0].click();
    }
  })();
/**********product section***************/
import ProductData from "./data.js"


const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)

const name = [...new Set(ProductData.map(el => el.name))]
console.log(name)
 

let filterData = []

document.addEventListener("click", (e) => {


    const bluetoothEl = document.getElementById("bluetooth").checked
    const ChainsEl = document.getElementById("chains").checked
    const KurtasEl = document.getElementById("kurtas").checked
    const AccessoriesEl = document.getElementById("accessories").checked
    const sareesEl = document.getElementById("sarees").checked
    const watchEl = document.getElementById("watch").checked
    const mentshirtEl = document.getElementById("mentshirt").checked
    const menshirtEl = document.getElementById("menshirt").checked
    const shoesEl = document.getElementById("shoes").checked
    const wwatchEl = document.getElementById("wwatch").checked
    const wkurtaEl = document.getElementById("wkurta").checked
    const jwelleryEl = document.getElementById("jwellery").checked
    const dressesEl = document.getElementById("dresses").checked
    const wtshirtEl = document.getElementById("wtshirt").checked

// for brands
    const RoadsterEl = document.getElementById("roadster").checked 
    const AnoukEl = document.getElementById("anouk").checked
    const PhilipsEl = document.getElementById("philips").checked 
    const boAtEl = document.getElementById("boat").checked 
    const HAMMER = document.getElementById("hammer").checked
    const miviEl = document.getElementById("mivi").checked
    const PUMAMotorsportEl = document.getElementById("puma").checked
    const PortronicsEl = document.getElementById("portonics").checked 
    const CellecorEl = document.getElementById("cellecor").checked
    const HIGHLANDEREl = document.getElementById("highlander").checked
    const MEENAZEl = document.getElementById("meenaz").checked
    const NOISEEl = document.getElementById("noise").checked
//    const Mitera = document.getElementById("").checked
//    const BOULTAUDIOEl = document.getElementById("").checked
   // const TimexEl = document.getElementById("").checked
   // const House of PataudiEl = document.getElementById("").checked
   // const iPhone BackcoverEl = document.getElementById("").checked
   // const DailyObjectsEl = document.getElementById("").checked
   // const EYNKEl = document.getElementById("").checked
   // const SatraniEl = document.getElementById("").checked 
   // const ASPORAEl = document.getElementById("").checked
   // const Silk LandEl = document.getElementById("").checked
   // const FossilEl = document.getElementById("").checked
   // const FastrackEl = document.getElementById("").checked
   // const The Souled StoreEl = document.getElementById("").checked
   // const WROGNEl = document.getElementById("").checked 
   // const OnePlusEl = document.getElementById("").checked
   // const Red TapeEl = document.getElementById("").checked
   // const RaymondEl = document.getElementById("").checked 
   // const Mast & HarbourEl = document.getElementById("").checked
   // const Michael KorsEl = document.getElementById("").checked
   // const PumaEl = document.getElementById("").checked
   // const JOKER & WITCHEl = document.getElementById("").checked 
   // const anaynaEl = document.getElementById("").checked 
   // const MYKIEl = document.getElementById("").checked
   // const Indo EraEl = document.getElementById("").checked
   // const DILLINGEREl = document.getElementById("").checked
   // const Carlton LondonEl = document.getElementById("").checked



    console.log(bluetoothEl)
    filterData = ProductData.filter(el => (
        bluetoothEl && el.category == "bluetooth Headset" ||
        ChainsEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        AccessoriesEl && el.category == "Mobile Accessories" ||
        sareesEl && el.category == "sarees" ||
        watchEl && el.category == "watch" ||
        mentshirtEl && el.category == "mentshirt" ||
        menshirtEl && el.category == "menshirt" ||
       shoesEl && el.category == "shoes" ||
       wwatchEl && el.category == "wwatch" ||
       wkurtaEl && el.category == "wkurta" ||
       jwelleryEl && el.category == "jwellery"|| 
       dressesEl && el.category == "dresses" ||
       wtshirtEl&& el.category == "wtshirt" ||

// filter for brands
       RoadsterEl && el.name == "Roadster" ||
        AnoukEl && el.name == "Anouk" || 
        PhilipsEl&& el.name == "Philips" ||
        boAtEl&& el.name == "boAt" ||
        HAMMER&& el.name == "HAMMER" ||
        miviEl&& el.name == "mivi" ||
        PUMAMotorsportEl&& el.name == "PUMA Motorsport" ||
        PortronicsEl&& el.name == "Portronics"|| 
        CellecorEl&& el.name == "Cellecor" ||
        HIGHLANDEREl&& el.name == "HIGHLANDER" ||
        MEENAZEl&& el.name == "MEENAZ" ||
        NOISEEl&& el.name == "NOISE" 
         
    ))

    renderProductData()


   

   
})



function renderProductData(){
    let filterDataHTML = "";

    if(filterData[0]){
        filterData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="${el.img}"/>
                </div>
                <h5 class="product_name">${el.name}</h5>
                <p>${el.desc}</p>
                <p class="product_price">
                    <span>Rs.</span>
                    <span>${el.price}</span>
                    <s style="color:#FFD39F">${el.oprice}</s>
                    <span>${el.rating}</span>
                </p>
                
             </div>
            `
        })
    }
    else{
        ProductData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="${el.img}"/>
                </div>
                <h5 class="product_name">${el.name}</h5>
                <p>${el.desc}</p>
                <p class="product_price">
                    <span>Rs.</span>
                    <span>${el.price}</span>
                    <s style="color:#FFD39F">${el.oprice}</s>
                    <span>${el.rating}</span>
                </p>
                
             </div>
            `
        }) 
    }
    
    document.getElementById("product_category_displayId").innerHTML = filterDataHTML
} 
renderProductData()



// function ClickProduct(id){
//     localStorage.setItem("productId",JSON.stringify(id))
//     // window.location("./page/product.html")

//     alert("hii")
// }








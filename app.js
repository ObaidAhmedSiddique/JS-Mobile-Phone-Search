var mobiles = {
    Select_Brand:{

    },
    Apple: {
        iphonese: {
            name : "Iphone SE",
            image: "https://assets.stickpng.com/images/5f49277468ecc70004ae7083.png",
            releaseDate: "Released 2022, March 18",
            internalMemory: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM",
            features: "Fingerprint (front-mounted), accelerometer, proximity, gyro, compass, barometer",
            colors: "red,blue,green",
            Frontcamera: "7 MP, f/2.2",
            backCamera: "12 MP, f/1.8 (wide), PDAF, OIS",
            batter: "Li-Ion 2018 mAh, non-removable (6.96 Wh)",
            modal: "A2783, A2595, A2785, A2782, A2784, iphone14,6",
            colors: "Black, White, Red",
        },
        iphonex: {
            image: "https://cutewallpaper.org/25/iphone-x-transparent-background/iphone-x-transparent-images-png-arts.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphonexr: {
            image: "https://www.pngitem.com/pimgs/m/284-2845251_iphone-xr-hd-png-download.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphone13: {
            image: "https://pngimg.com/uploads/iphone_13/iphone_13_PNG9.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphone12: {
            image: "https://www.citypng.com/public/uploads/preview/-21602651542ujkcgwlwka.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        iphone13mini: {
            image: "https://www.pngmart.com/files/21/iPhone-13-Mini-PNG-HD.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
    },

    Infinix: {
        hot10s: {
            image: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot-10s-9.jpg",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        hot10play: {
            image: "https://phonebolee.com/images/Infinix-Hot-10-Play-22.jpg",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },

        hotplay: {
            image: "https://mobiler.pk/wp-content/uploads/2022/02/Infinix-Hot-11-2022.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
    },

    Samsung: {
        note8: {
            image: "https://toppng.com/uploads/preview/with-the-galaxy-note-8-bigger-things-are-just-waiting-samsung-galaxy-11563716681zphjhdf5ow.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        note9: {
            image: "https://www.pngfind.com/pngs/m/381-3817661_samsung-galaxy-note-9-128gb-samsung-galaxy-note.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        a8: {
            image: "https://banner2.cleanpng.com/20180426/crq/kisspng-samsung-galaxy-a8-2018-samsung-galaxy-s-plus-sam-glaxy-s8-5ae19c723ec8a0.9646465515247350902572.jpg",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        j5: {
            image: "https://www.pngitem.com/pimgs/m/491-4911944_samsung-galaxy-j5-2015-hd-png-download.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },

    },

    Vivo: {
        y55: {
            image: "https://mymobilesnews.com/wp-content/uploads/2022/01/Vivo-Y55.jpg.webp",
            colors: "red,blue,green",
            memory: 64,
            camera: 24 + "pxels",
        },
        x80: {
            image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1652150117572/ebc21dc939c84f90a35e94b86fcca7ff.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
        v23: {
            image: "https://files.gsmchoice.com/phones/vivo-v23-5g/vivo-v23-5g-big.jpg",
            colors: "red,blue,green",
            memory: 32,
            camera: 25 + "pxels",
        },

        v23e: {
            image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1640661472285/0b35c1e277b8e83f9639a95e9ba6c740.png",
            colors: "red,blue,green",
            memory: 64,
            camera: 25 + "pxels",
        },
    },
};
var dropdown=document.getElementById("dropdown");
for (key in mobiles){
var options=document.createElement("option");
options.innerHTML=key;
dropdown.appendChild(options);
}
function search(){
  var text= document.getElementById("search-value").value;
  
  var result = dropdown.options[dropdown.selectedIndex].value;
        if(result=="SelectBrand"){
            swal("Please Select Brand")
        }

        else if (text in mobiles[result]) {
           document.getElementById("box").innerHTML = `
           <div class="box-div">
        <div class="mobile_model">
        <img src="${mobiles[result][text].image}" id="img" alt="">
        <p>Mobile memory is : RAM ${mobiles[result][text].memory}</p>
        <p>Colors Available : ${mobiles[result][text].colors}</p>
        <p>Camera: ${mobiles[result][text].camera}</p>
        </div>
        </div>
        `
        console.log(result)
        }
        else if (text == "") {
            swal("Please enter the model you want to search")
        }
        
        else{
            swal("Not Available")
        }
 }
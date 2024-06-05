const url_ = window.location.search;
const u_ = url_.split('?')[1];
const params = new URLSearchParams(u_);
const catUrl = params.get('cat');
const tipoUrl = params.get('tipo');
const prodUrl = params.get('id');
console.log("cat: "+catUrl);
console.log("tipo: "+tipoUrl);
console.log("id: "+prodUrl);

const json=[{
    "nombre": "productos todolomio",
    "articulos":[{
                    "id":1,
                    "nombre":"Artistica",
                    "tipo":"artistica", 
                    "carpeta":"imagenes/articulos/artistica/fondo",         
                    "img": ["url1", "url2", "url3"],                   
                    "productos":[{
                                    "id":1,
                                    "name":"Lapices",
                                    "tipo":"lapices",
                                    "lista":[{
                                                "id":1,
                                                "titulo": "Lapices de Colores Derwent",
                                                "descripcion": "set de 72 lapices de colores",
                                                "precio": '200.000',   
                                                "carpeta":"imagenes/articulos/artistica/lapices/",  
                                                "img": ["lapices_derwent.png", "lapices_derwent.png", "lapices_derwent.png"]
                                            },{
                                                "id":2,
                                                "titulo": "Lapices staedtler",
                                                "descripcion": "12 lapices de colores marca staedtler",
                                                "precio": '40.000',  
                                                "carpeta":"imagenes/articulos/artistica/lapices/",       
                                                "img": ["lapices_staedtler12.png", "lapices_staedtler12_2.png", "lapices_staedtler12.png"]
                                            },{
                                                "id":3,
                                                "titulo": "lapices 3",
                                                "descripcion": "...",
                                                "precio": 100, 
                                                "carpeta":"imagenes/articulos/artistica/lapices/",      
                                                "img": ["url1", "url2", "url3"]
                                            },{
                                                "id":4,
                                                "titulo": "lapices 4",
                                                "descripcion": "...",
                                                "precio": 1800,      
                                                "carpeta":"imagenes/articulos/artistica/lapices/",  
                                                "img": ["url1", "url2", "url3"]
                                            }]
                            
                                },{
                                    "id":2,
                                    "name":"Papeles",
                                    "tipo":"papeles",
                                    "lista":[{
                                                "id":1,
                                                "titulo": "papeles 1",
                                                "descripcion": "...",
                                                "precio": 1500,   
                                                "carpeta":"imagenes/articulos/artistica/papeles/",       
                                                "img": ["url1", "url2", "url3"]
                                            },{
                                                "id":2,
                                                "titulo": "papeles 2",
                                                "descripcion": "...",
                                                "precio": 300,  
                                                "carpeta":"imagenes/articulos/artistica/papeles/",         
                                                "img": ["url1", "url2", "url3"]
                                            }]  
                                }]
                
                },{
                    "id":2,
                    "nombre":"Productios Varios",
                    "tipo":"varios", 
                    "carpeta":"imagenes/articulos/varios/fondo",         
                    "img": ["url1", "url2", "url3"],  
                    "productos":[{
                                    "id":1,
                                    "name":"Productos Varios 1",
                                    "tipo":"productos1",
                                    "lista":[{
                                                "id":1,
                                                "titulo": "Productos Varios 1",
                                                "descripcion": "...",
                                                "precio": 1500,     
                                                "carpeta":"imagenes/articulos/varios/productos1/",      
                                                "img": ["url1", "url2", "url3"]
                                            }]
                                
                                },{
                                    "id":2,
                                    "name":"Productos Varios 2",
                                    "tipo":"productos2",
                                    "lista":[{
                                                "id":1,
                                                "titulo": "Productos Varios 2",
                                                "descripcion": "...",
                                                "precio": 1500,   
                                                "carpeta":"imagenes/articulos/varios/productos2/",        
                                                "img": ["url1", "url2", "url3"]
                                            }]  
                                }]
                
                },{
                    "id":3,
                    "nombre":"Pinturas",
                    "tipo":"pintura",   
                    "carpeta":"imagenes/articulos/pinturas/fondo",         
                    "img": ["url1", "url2", "url3"], 
                    "productos":[{
                                    "id":1,
                                    "name":"Pinturas Acrilico",
                                    "tipo":"acrilico",
                                    "lista":[{
                                                "id":1,
                                                "titulo": "Pintura Acrilico",
                                                "descripcion": "...",
                                                "precio": 1500,    
                                                "carpeta":"imagenes/articulos/artistica/pinturas/acrilico/",       
                                                "img": ["url1", "url2", "url3"]
                                            }]
                                
                                },{
                                    "id":2,
                                    "name":"Pinturas Oleo",
                                    "tipo":"oleo",
                                    "lista":[{
                                                "id":1,
                                                "titulo": "Pintura Oleo",
                                                "descripcion": "...",
                                                "precio": 1500,   
                                                "carpeta":"imagenes/articulos/artistica/pinturas/oleo/",      
                                                "img": ["url1", "url2", "url3"]
                                            }]  
                                }]
                
                }]
}];

document.body.onload = inicio;

function inicio(){
    addMenu();
    if(prodUrl==null){
        addLista();
        document.querySelectorAll('li.banner')[0].remove();        
    }else{  
        addProducto();         
        addBanner();      
    }

    if(catUrl==null && tipoUrl==null && prodUrl==null){
        addLista2();
    }
    
}

function addBanner(){
    var cantidad=0;
    json[0].articulos.forEach((cat, id) =>{            
            cat.productos.forEach((el, id) =>{                 
                    el.lista.forEach((prod, id) =>{
                        cantidad++;
                        //console.log(cantidad);
                        if(cantidad<=10){
                            var c_ = document.querySelector('#contBanner li');
                            var clon = c_.cloneNode(true);                             
                            clon.id=el.tipo+prod.id;                                                    
                            clon.querySelector('a').href="?cat="+cat.tipo+"&tipo="+el.tipo+"&id="+prod.id;
                            clon.querySelector('a img').src=prod.carpeta+prod.img[0];  
                            clon.querySelector('a p').textContent=prod.titulo;  
                            document.querySelector("ul#contBanner").appendChild(clon);
                        }
                    });                
            });
    }); 
    document.querySelectorAll('li.banner')[0].remove();   
}


function addMenu() { 
    //const jsonObject = JSON.parse(json[0]);
    //console.log(jsonObject.articulos);
    json[0].articulos.forEach((el) =>{
        //console.log(el);        
        const li1_ = document.createElement('li');
        const a1_= document.createElement('a');
        a1_.textContent = el.nombre;  
        a1_.href="?cat="+el.tipo;       
        a1_.alt=el.tipo;   
        a1_.target="_self";
        a1_.setAttribute("class", "dropdown-item");
        li1_.appendChild(a1_);
        const ul_ = document.createElement('ul');
        li1_.setAttribute("id", el.tipo);
        li1_.appendChild(ul_);
        document.querySelector("#navegador ul").appendChild(li1_);  
        el.productos.forEach((e) =>{
            //console.log(e);
            //console.log("-"+e.name);        
            const li2_ = document.createElement('li');
            li2_.setAttribute("id", e.tipo);
            const a2_= document.createElement('a');
            a2_.textContent = e.name; 
            a2_.target="_self"; 
            a2_.href="?cat="+el.tipo+"&tipo="+e.tipo;    
            a2_.setAttribute("class", "dropdown-item");   
            li2_.appendChild(a2_);
            document.querySelector("#navegador ul li#"+el.tipo+" ul").appendChild(li2_);            
            e.lista.forEach((lista) =>{
                //console.log(lista);
                //console.log(" *"+lista.titulo);
                //console.log(" *"+lista.precio);
            });
        });
    });
}


function addLista2(){
    json[0].articulos.forEach((cat, id) =>{
        cat.productos.forEach((el, id) =>{
            el.lista.forEach((prod, id) =>{
                //console.log(prod.id, prod.titulo, id);
                var ul1_ = document.querySelector('ul#art_1 li.producto');
                var clonA = ul1_.cloneNode(true);                             
                clonA.id=el.tipo+prod.id;                                                    
                clonA.querySelector('a').href="?cat="+cat.tipo+"&tipo="+el.tipo+"&id="+prod.id;
                clonA.querySelector('a div.contProducto img').src=prod.carpeta+prod.img[0];  
                clonA.querySelector('a div.contProducto h1').textContent=prod.titulo;  
                clonA.querySelector('a div.contProducto h2').textContent="$"+prod.precio;   
                document.querySelector("ul#art_1").appendChild(clonA);
            });                            
        });        
    }); 
    document.querySelectorAll('#art_1 li.producto')[0].remove();  
}


function addLista(){
    if(catUrl!=null || tipoUrl!=null){
        document.querySelectorAll('#art_1 li.producto')[0].remove();  
    }
    document.querySelector('#contArticulo').remove();        
    json[0].articulos.forEach((cat, id) =>{
        //console.log(cat,id);                      
        if(catUrl==cat.tipo){ 
            const h_ = document.querySelector('#contHeader');
            h_.querySelector('h1').textContent=cat.nombre;
    
            //document.querySelector('header').remove();
            cat.productos.forEach((el, id) =>{
                //console.log(el, id);      
                if(tipoUrl==el.tipo){
                    const h2_ = document.querySelector('#contHeader');               
                    h2_.querySelector('h1').textContent=el.name; 
                }             
                if(tipoUrl==el.tipo || tipoUrl==null){
                    el.lista.forEach((prod, id) =>{
                        //console.log(prod.id, prod.titulo, id); 
                        var cc = document.querySelector('#articulos li.producto');
                        var clon = cc.cloneNode(true);                             
                        clon.id=el.tipo+prod.id;                                                    
                        clon.querySelector('a').href="?cat="+cat.tipo+"&tipo="+el.tipo+"&id="+prod.id;
                        clon.querySelector('a div.contProducto img').src=prod.carpeta+prod.img[0];  
                        clon.querySelector('a div.contProducto h1').textContent=prod.titulo;  
                        clon.querySelector('a div.contProducto h2').textContent="$"+prod.precio;   
                        document.querySelector("ul#articulos").appendChild(clon);
                    });
                }               
            });
        }
    }); 
    document.querySelectorAll('#articulos li.producto')[0].remove();   

}

function addProducto(){
    document.querySelector('header').remove();
    document.querySelector('#articulos').remove();
    document.querySelector('#art_1').remove();
    json[0].articulos.forEach((cat, id) =>{
        if(catUrl==cat.tipo){            
            cat.productos.forEach((el, id) =>{
                if(tipoUrl==el.tipo){                    
                    el.lista.forEach((prod, id) =>{
                        if(prodUrl==prod.id){
                            //console.log(prod); 
                            prod.img.forEach((im_,id) =>{
                                //console.log(im_,id);
                                var ga_ = document.querySelector('#gallery figure.gallery-item');
                                var clonG = ga_.cloneNode(true);                             
                                clonG.querySelector('img').src=src=prod.carpeta+prod.img[id]; 
                                document.querySelector("#gallery .gallery-container").appendChild(clonG); 
                            });
                            document.querySelectorAll('#gallery figure.gallery-item')[0].remove();                        
                        
                            document.querySelector('#contCategoria p').textContent=cat.nombre+" / "+el.name;
                            document.querySelector('#contArticulo #contInfo h1').textContent=prod.titulo;
                            document.querySelector('#contArticulo #contInfo h2').textContent=prod.descripcion;
                            document.querySelector('#contArticulo #contInfo h3').textContent="$"+prod.precio;
                            document.querySelector('#contArticulo #botCompra a').href="https://wa.me/541159512598/?text=Hola, estoy interesado en:"+prod.titulo+" - $"+prod.precio;

                        }                            
                    });
                }
            });            
        }        
    });   
     
}

 



/*----------------- slider---------------- */
let currentIndex = 0;
document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});
document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});
function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;
   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;
   galleryContainer.style.transform = `translateX(${offset}%)`;
}
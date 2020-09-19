window.onload = function (){
    var menuData = [
    {
    	titre:'Rouleau d oeuf au boeuf',
    	image:'../images/menu/B/B1.jpg',
        description:'morceaux de poulet panés et frits avec une sauce contenant des écorces d orange; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Rouleau de printemps',
    	image:'../images/menu/B/B2.jpg',
        description:'morceaux de poulet panés et frits avec sauce et oignons verts; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Rouleau d oeuf aux légumes',
    	image:'../images/menu/B/B3.jpg',
        description:'poulet coupé en dés avec châtaignes deau, poivrons verts, céleri et noix de cajou; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Won Ton Frit avec Viande de Poulet ',
    	image:'../images/menu/B/B4.jpg',
        description:'boeuf sauté aux carottes et céleri, dans une sauce épicée Szechuan',
        prix:'5000 FCFA'
    },
    { 
    	titre:'Toast au poulet ',
    	image:'../images/menu/B/B5.jpg',
        description:'poulet à la viande blanche sauté aux haricots verts et sauce soja',
        prix:'5000 FCFA'
    },
    {
    	titre:'Tofu soyeux frit avec sauce spéciale à lail',
    	image:'../images/menu/B/B6.jpg',
        description:'poulet à la viande blanche dans une sauce blanche claire sautée avec un mélange de légumes',
        prix:'5000 FCFA'
    },
    {
    	titre:'Crêpe aux oignons verts',
    	image:'../images/menu/B/B7.jpg',
        description:'poulet sauté avec haricots verts, champignons et châtaignes à l ail',
        prix:'5000 FCFA'
    },
    {
    	titre:'Dumplings de poulet cuits à la vapeur (ou poêlés)',
    	image:'../images/menu/B/B8.jpg',
        description:'poulet à la viande blanche, haricots verts, châtaignes d eau, champignons et aubergines, sauce à l ail',
        prix:'5000 FCFA'
    }
    ];
    for (var i = 0; i < menuData.length; i++) {
        var menu=document.createElement("div");
        menu.className="menu";
        var menu_1=document.createElement("div");
        menu_1.className="menu_1";
    	var img = document.createElement("img");
		img.src = menuData[i].image;
        var prix = document.createElement("h5");
        prix.innerHTML=menuData[i].prix;
        var titre=document.createElement("h3");
        titre.innerHTML=menuData[i].titre;
        menu_1.appendChild(img);
        menu_1.appendChild(prix);
        menu_1.appendChild(titre); 
        menu.appendChild(menu_1);
		var block = document.getElementById("dejeuner").appendChild(menu);
		
        

    	}	
	
    
  
};
window.onload = function (){
    var menuData = [
    {
    	titre:'soupe won thon au poulet',
    	image:'../images/menu/A/A1.jpg',
        description:'morceaux de poulet panés et frits avec une sauce contenant des écorces d orange; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'soupe aux oeufs battus',
    	image:'../images/menu/A/A2.jpg',
        description:'morceaux de poulet panés et frits avec sauce et oignons verts; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'soupe au poulet et au mais',
    	image:'../images/menu/A/A3.jpg',
        description:'poulet coupé en dés avec châtaignes deau, poivrons verts, céleri et noix de cajou; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'soupe aigre piquante',
    	image:'../images/menu/A/A4.jpg',
        description:'boeuf sauté aux carottes et céleri, dans une sauce épicée Szechuan',
        prix:'5000 FCFA'
    },
    { 
    	titre:'chute d oeuf avec soupe won thon',
    	image:'../images/menu/A/A5.jpg',
        description:'poulet à la viande blanche sauté aux haricots verts et sauce soja',
        prix:'5000 FCFA'
    },
    {
    	titre:'soupe poulet et nouille',
    	image:'../images/menu/A/A6.jpg',
        description:'poulet à la viande blanche dans une sauce blanche claire sautée avec un mélange de légumes',
        prix:'5000 FCFA'
    },
    {
    	titre:'soupe de legume du jardin',
    	image:'../images/menu/A/A7.jpg',
        description:'poulet sauté avec haricots verts, champignons et châtaignes à l ail',
        prix:'5000 FCFA'
    },
    {
    	titre:'soupe aux légumes du jardin au tofu',
    	image:'../images/menu/A/A8.jpg',
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
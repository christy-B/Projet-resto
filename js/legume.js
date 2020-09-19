window.onload = function (){
    var menuData = [
    {
    	titre:'Légumes mélangés de Wok',
    	image:'../images/menu/VG/VG1.jpg',
        description:'morceaux de poulet panés et frits avec une sauce contenant des écorces d orange; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Haricots verts sautés, Szechuan',
    	image:'../images/menu/VG/VG2.jpg',
        description:'morceaux de poulet panés et frits avec sauce et oignons verts; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Aubergine à l ail',
    	image:'../images/menu/VG/VG3.jpg',
        description:'poulet coupé en dés avec châtaignes deau, poivrons verts, céleri et noix de cajou; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Aubergines croustillantes à l ail',
    	image:'../images/menu/VG/VG4.jpg',
        description:'boeuf sauté aux carottes et céleri, dans une sauce épicée Szechuan',
        prix:'5000 FCFA'
    },
    { 
    	titre:'Brocoli Sauté aux Champignons en Sauce Légère',
    	image:'../images/menu/VG/VG5.jpg',
        description:'poulet à la viande blanche sauté aux haricots verts et sauce soja',
        prix:'5000 FCFA'
    },
    {
    	titre:'Légumes Moo Shu',
    	image:'../images/menu/VG/VG6.jpg',
        description:'poulet à la viande blanche dans une sauce blanche claire sautée avec un mélange de légumes',
        prix:'5000 FCFA'
    },
    {
    	titre:'Pois mange-tout et châtaignes sautés en sauce brune',
    	image:'../images/menu/VG/VG7.jpg',
        description:'poulet sauté avec haricots verts, champignons et châtaignes à l ail',
        prix:'5000 FCFA'
    },
    {
    	titre:'Caillé de haricots, style Szechuan',
    	image:'../images/menu/VG/VG8.jpg',
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
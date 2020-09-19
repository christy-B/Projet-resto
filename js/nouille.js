window.onload = function (){
    var menuData = [
    {
    	titre:'Nouilles sautées aux légume',
    	image:'../images/menu/PF/PF1.jpg',
        description:'morceaux de poulet panés et frits avec une sauce contenant des écorces d orange; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Nouilles sautées au poulet',
    	image:'../images/menu/PF/PF2.jpg',
        description:'morceaux de poulet panés et frits avec sauce et oignons verts; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Nouilles sautées au boeuf',
    	image:'../images/menu/PF/PF3.jpg',
        description:'poulet coupé en dés avec châtaignes deau, poivrons verts, céleri et noix de cajou; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Nouilles sautées au veau',
    	image:'../images/menu/PF/PF4.jpg',
        description:'boeuf sauté aux carottes et céleri, dans une sauce épicée Szechuan',
        prix:'5000 FCFA'
    },
    { 
    	titre:'Nouilles sautées spéciales maison',
    	image:'../images/menu/PF/PF5.jpg',
        description:'poulet à la viande blanche sauté aux haricots verts et sauce soja',
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
window.onload = function (){
    var menuData = [
    {
    	titre:'Chocolate Truffle Cake',
    	image:'../images/menu/DS/DS1.jpg',
        description:'morceaux de poulet panés et frits avec une sauce contenant des écorces d orange; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Cappuccino Apricot Cake',
    	image:'../images/menu/DS/DS2.jpg',
        description:'morceaux de poulet panés et frits avec sauce et oignons verts; viande blanche sur demande',
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
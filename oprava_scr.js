class menu
{
    vyber_menu=[
        {id: "1", name: "Průvodce FPE", odkaz:"dom()", str: "www.leageuoflegends.com"},
        {id: "2", name: "Zapis předmětů", odkaz:"stud()", str: "www.leageuoflegends.com"},
        {id: "3", name: "Studijní platformy", odkaz:"kart()", str: "www.leageuoflegends.com"},
        {id: "4", name: "Budovy ZČU", odkaz:"menz()", str: "www.leageuoflegends.com"},
        {id: "5", name: "Menza", odkaz:"kated()", str: "www.leageuoflegends.com"}
    ];

    constructor()
    {
        for(let i = 0;i<this.vyber_menu.length;i++)
		{
			this.menu = document.getElementById("Menu1");
			this.li = document.createElement("li");
			this.text = document.createTextNode(this.vyber_menu[i].name);
            this.a = document.createElement("a");;
            this.a.setAttribute("href",this.vyber_menu[i].str);
            this.a.setAttribute("target","_blank");

            this.li.setAttribute("onClick",this.vyber_menu[i].odkaz);
            this.a.appendChild(this.text);
            this.li.appendChild(this.a);
            this.menu.appendChild(this.li);
        }
    }
    


}

window.onload= ()=>{h1 = new menu();}
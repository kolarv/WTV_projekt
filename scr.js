class menu
{
    vyber_menu=[
        {id: "1", name: "Domů", odkaz:"dom()", str: "www.leageuoflegends.com"},
        {id: "2", name: "Studium", odkaz:"stud()", str: "www.leageuoflegends.com"},
        {id: "3", name: "Jis - karta", odkaz:"kart()", str: "www.leageuoflegends.com"},
        {id: "4", name: "Menza", odkaz:"menz()", str: "www.leageuoflegends.com"},
        {id: "5", name: "Katedry", odkaz:"kated()", str: "www.leageuoflegends.com"}
    ];

    constructor(menu, mes, jmen, a, i, diva, divi)
    {
        for(let i = 0;i<this.vyber_menu.length;i++)
		{

			this.menu = document.getElementById("Menu1");
			this.mes = document.createElement("li");
			this.jmen = document.createTextNode(this.vyber_menu[i].name);
            this.a = document.createElement("a");
            this.divi = document.createElement("div");
            this.diva = document.createElement("div");
            this.i = document.createElement("i");
            this.i.setAttribute("class","fas fa-home fa-3x home");
            this.divi.setAttribute("class","circle");
            this.diva.setAttribute("class", "title");
            this.a.setAttribute("href",this.vyber_menu[i].str);
            this.a.setAttribute("target","_blank");

            this.mes.setAttribute("onClick",this.vyber_menu[i].odkaz);
            this.i.appendChild(this.divi);
            this.i.appendChild(this.jmen);
            this.a.appendChild(this.diva);
            this.a.appendChild(this.i);
            this.mes.appendChild(this.a);
            this.menu.appendChild(this.mes);
        }
    }
    


}

window.onload= ()=>{h1 = new menu();};
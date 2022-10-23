

class menu
{
    kontrola=0;
    vyber_menu=[
        {id: "1", name: "Průvodce FPE", odkaz:"dom()", str: "www.leageuoflegends.com"},
        {id: "2", name: "Zapis předmětů", odkaz:"stud()", str: "www.leageuoflegends.com"},
        {id: "3", name: "Studijní platformy", odkaz:"kart()", str: "www.leageuoflegends.com"},
        {id: "4", name: "Budovy ZČU", odkaz:"menz()", str: "www.leageuoflegends.com"},
        {id: "5", name: "Menza", odkaz:"kated()", str: "www.leageuoflegends.com"},
        {id: "6", name: "Fórum", odkaz:"forum()", str: "www.leageuoflegends.com"}
    ];

    constructor()
    {
        for(let i = 0;i<this.vyber_menu.length;i++)
		{
			this.menu = document.getElementById("Menu1");
			this.li = document.createElement("li");
			this.text = document.createTextNode(this.vyber_menu[i].name);
            this.a = document.createElement("a");
            this.a.setAttribute("href",this.vyber_menu[i].str);

            this.li.setAttribute("onClick",this.vyber_menu[i].odkaz);
            this.a.appendChild(this.text);
            this.li.appendChild(this.a);
            this.menu.appendChild(this.li);
        }
    }
    ham()
    {
        let prehozeni = document.getElementById("hamburger");

        if(this.kontrola == 0)
        {
            prehozeni.src="/img/Back (1).svg";
            this.kontrola=1;
            document.getElementById("Menu1").classList.toggle("uloff");
        }
        else
        {
            prehozeni.src="/img/Hamburger-mmenu (1).svg";
            this.kontrola=0;
            document.getElementById("Menu1").classList.toggle("uloff");
        }
    }

}

class okenka
{

    obsah=[
        {napdis:"Klatovská", text:"Fakulta pedagogická - Klatovská", odkaz:"www.leagueoflegends.com"},
        {napdis:"Klatovská", text:"Fakulta pedagogická - Klatovská", odkaz:"www.leagueoflegends.com"},
        {napdis:"Klatovská", text:"Fakulta pedagogická - Klatovská", odkaz:"www.leagueoflegends.com"},
        {napdis:"Klatovská", text:"Fakulta pedagogická - Klatovská", odkaz:"www.leagueoflegends.com"}
    ];

    constructor()
    {
        for(let i = 0;i<this.obsah.length;i++)
		{
			this.obs = document.getElementById("left2");
			
            this.div = document.createElement("div");
            this.div.setAttribute("class","window");
            this.a = document.createElement("a");
            this.a.setAttribute("href",this.obsah[i].odkaz);
            this.div1 = document.createElement("div");
            this.div1.setAttribute("class","obr");
            this.div1.setAttribute("id","platno1");
            this.div2 = document.createElement("div");
            this.div2.setAttribute("class","nadpis");
            
            this.h3 = document.createElement("h3");
            this.div3 = document.createElement("div");
            this.div3.setAttribute("class","popis");
            this.p = document.createElement("p");
            this.napdis1 = document.createTextNode(this.obsah[i].napdis);
            this.popis = document.createTextNode(this.obsah[i].text);
            

            this.p.appendChild(this.popis);
            this.h3.appendChild(this.napdis1)
            this.div3.appendChild(this.p);
            this.div2.appendChild(this.h3);
            this.div2.appendChild(this.div3);
            this.div1.appendChild(this.div2);
            this.a.appendChild(this.div1);
            this.div.appendChild(this.a);
            this.obs.appendChild(this.div);
        }
    }
}


window.onload= ()=>{uglytest();}

function uglytest(){
    h1 = new menu();
    h2 = new okenka();
}
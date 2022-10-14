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
            this.div0 = document.createElement("div");
            this.div0.setAttribute("class", "zahlavi_mobilni");
			this.menu = document.getElementById("Menu1");
			this.li = document.createElement("li");
			this.text = document.createTextNode(this.vyber_menu[i].name);
            this.a = document.createElement("a");
            this.divi = document.createElement("div");
            this.diva = document.createElement("div");
            this.i = document.createElement("i");
            this.i.setAttribute("class","fas fa-home fa-3x home");
            this.divi.setAttribute("class","circle");
            this.diva.setAttribute("class","title");
            this.a.setAttribute("href",this.vyber_menu[i].str);
            this.a.setAttribute("target","_blank");

            this.li.setAttribute("onClick",this.vyber_menu[i].odkaz);
            this.i.appendChild(this.divi);
            this.i.appendChild(this.text);
            this.a.appendChild(this.diva);
            this.a.appendChild(this.i);
            this.li.appendChild(this.a);
            this.menu.appendChild(this.li);
        }
    }
    


}

class zapati
{ 
    zapati1=[
            {name:"Kontakt: ", parametr: "zikam@kvd.zcu.cz"},
            {name:"ZČU", parametr: "1991-2022"},
            {name:"Project: ", parametr: "Kolář, Breit, Kantnerová"},
            {name:"Instagram ", parametr: "https://www.instagram.com/fpezcu/?hl=cs"},
            {name:"Facebook ", parametr: "https://cs-cz.facebook.com/FPEZCU/"},
            {name:"Official web ", parametr: "https://www.fpe.zcu.cz/cs/"},
        ]
    constructor ()
    {
        for(let i=0;i<this.zapati1.length;i++)
        {
            this.hovno = document.getElementById("Zapati");
            this.div1 = document.createElement("div");
            this.div2 = document.createElement("div");
            this.div3 = document.createElement("div");
            this.div4 = document.createElement("div");
            this.span = document.createElement("span");

            this.div1.setAttribute("class", "upravazapati1");
            this.div2.setAttribute("class", "upravazapati2");
            this.div3.setAttribute("class", "upravazapati3");
            this.div4.setAttribute("class", "upravazapati4");
            this.span.setAttribute("class", "span1");
            this.span_text = document.createTextNode(this.zapati1[i].name + " " + this.zapati1[i].parametr);

            this.span.appendChild(this.span_text);
            this.div4.appendChild(this.span);
            this.div3.appendChild(this.div4);
            this.div2.appendChild(this.div3);
            this.div1.appendChild(this.div2);
            this.hovno.appendChild(this.div1);
        }
    }
}

window.onload= ()=>{h1 = new menu();/*h2 = new zapati()*/};

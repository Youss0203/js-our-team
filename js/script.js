/* 
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg */


const membri=[
{
    nome:"Wayne",
    cognome:"Barnett",
    ruolo:"Founder & CEO",
    foto:"wayne-barnett-founder-ceo.jpg"
},
{
    nome:"Angela",
    cognome:"Caroll",
    ruolo:"Chief Editor",
    foto:"angela-caroll-chief-editor.jpg"
},
{
    nome:"Walter",
    cognome:"Gordon",
    ruolo:"Office Manager",
    foto:"walter-gordon-office-manager.jpg"
},
{
    nome:"Angela",
    cognome:"Lopez",
    ruolo:"Social Media Manager",
    foto:"angela-lopez-social-media-manager.jpg"
},
{
    nome:"Scott",
    cognome:"Estrada",
    ruolo:"Developer",
    foto:"scott-estrada-developer.jpg"
},
{
    nome:"Barbara",
    cognome:"Ramos",
    ruolo:"Graphic Designer",
    foto:"barbara-ramos-graphic-designer.jpg"
},
]

console.log(membri)

const newEl=document.querySelector("div.container")
for(let i=0;i<membri.length; i++){

    const newArticle=document.createElement("article");
    newArticle.innerHTML=("Nome:" +membri[i].nome + "cognome :" +  membri[i].cognome + "ruolo:" + membri[i].ruolo + "foto:" + "<img src= img/" + membri[i].foto + ">")
    newEl.appendChild(newArticle)
}
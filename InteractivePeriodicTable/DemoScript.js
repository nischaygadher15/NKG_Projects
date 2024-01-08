let selVar = document.getElementsByClassName("eleCell");
var eleNo = 0;

for (let i=0; i < selVar.length; i++)
{
    selVar[i].addEventListener("mouseover", hoverOnCell);
}

function hoverOnCell()
{
    console.log(this.classList[1]);
}
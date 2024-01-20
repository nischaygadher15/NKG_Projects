// Upper Header Search Bar Hide/Show Feature Script

let searchLogo = document.getElementsByClassName("searchLogoBlock")[0];
let crossLogo = document.getElementsByClassName("crossLogoBlock")[0];
let searchBigLogo = document.getElementById("searchBigLogo");
let searchBar = document.getElementsByClassName("searchBarBlock")[0];
searchLogo.addEventListener("click", changetoCross);
crossLogo.addEventListener("click", hideCross);

function changetoCross()
{    
        searchLogo.style.visibility = "hidden";
        searchLogo.style.opacity = "0";
        searchBar.style.visibility = "visible";
        searchBar.style.opacity = "1";
}

function hideCross()
{
    searchLogo.style.visibility = "visible";
    searchLogo.style.opacity = "1";
    searchBar.style.visibility = "hidden";
    searchBar.style.opacity = "0";
}


//Sticky Nav Bar After Scroll Pass Header Section

const lowerHeadInt = document.querySelector(".intersection");
const navBar = document.querySelector(".stickyNavbar");
var firstTime = 0;
const observer = new IntersectionObserver(changeNavbar,
    {
        root:null,
        rootMargin: "-80px",
        threshold: 0
        });

function changeNavbar(entries)
{
    const ent = entries[0];
    if (ent.isIntersecting == false)
    {
        navBar.style.visibility= "visible";
    }
    else
    {
        navBar.style.visibility= "hidden";
    }
}

observer.observe(lowerHeadInt);



// Free Quote Form
let quoteClass = document.getElementsByClassName("yourQuote")[0];

function quoteForm()
{
    quoteClass.style.right = '0';
    quoteClass.style.transition = ""
}

function hideQuoteForm()
{
    quoteClass.style.right = '-342px';
}


//Home Button

const slideShowInt = document.querySelector(".lowerHeader");
let homeBtn = document.getElementsByClassName('toHomeBtn')[0];
const observer3 = new IntersectionObserver(showHomeBtn,
    {
        root:null,
        rootMargin: "30px",
        threshold: 0
    });

function showHomeBtn(entries)
{
    const ent = entries[0];
    if (ent.isIntersecting == false)
    {
        homeBtn.style.visibility= "visible";
        homeBtn.style.opacity= "1";
    }
    else
    {
        homeBtn.style.visibility= "hidden";
        homeBtn.style.opacity= "0";
    }
}

observer3.observe(slideShowInt);



//  Certifications Slideshow

let certificate = document.querySelectorAll(".certificate");
const array1 = [0,1,2,3,4];
var i = 0, len = array1.length, a = 3, b = 4, c = 0, d = 1, e = 2, flag = 0, cont = 0;
let leftBtn = document.getElementById("leftSlideBtn");
let rightBtn = document.getElementById("rightSlideBtn");
leftBtn.addEventListener("click", previousSlide);
rightBtn.addEventListener("click", nextSlide);

function slideVarDec()
{
    if (a < 2)
    {
        if (a == 1)
        {
            a = 4;
        }
        else
        {
            a = 3;
        }
    }
    else
    {
        a -= 2;
    }


    if (b < 2)
    {
        if (b == 1)
        {
            b = 4;
        }
        else
        {
            b = 3;
        }
    }
    else
    {
        b -= 2;
    }

    if (c < 2)
    {
        if (c == 1)
        {
            c = 4;
        }
        else
        {
            c = 3;
        }
    }
    else
    {
        c -= 2;
    }


    if (d < 2)
    {
        if (d == 1)
        {
            d = 4;
        }
        else
        {
            d = 3;
        }
    }
    else
    {
        d -= 2;
    }


    if (e < 2)
    {
        if (e == 1)
        {
            e = 4;
        }
        else
        {
            e = 3;
        }
    }
    else
    {
        e -= 2;
    }
}

function previousSlide()
{   
    flag = -1;
}

function nextSlide()
{
    flag = 1;
}

function slideShow()
{
    if (true)
    {
        if (a < len)
            {
                //Hide Slide Left Side
                certificate[a].style.position = "absolute";
                certificate[a].style.left = "-40%";
                certificate[a].style.opacity = "0";
                certificate[a].style.transition = "all 500ms ease-out";
                a++;
            }
        else
            {
                a = 0;
                //Hide Slide Left Side
                certificate[a].style.position = "absolute";
                certificate[a].style.left = "-40%";
                certificate[a].style.opacity = "0";
                certificate[a].style.transition = "all 500ms ease-out";
                a++;
            }

        if (b < len)
            {
                // left side 
                certificate[b].style.position = "absolute";
                certificate[b].style.left = "5%";
                certificate[b].style.transform = "scale(0.7)";
                certificate[b].style.opacity = "0.6";
                certificate[b].style.transition = "all 500ms ease-out";
                b++;
            }
        else
            {
                b = 0;
                // left side 
                certificate[b].style.position = "absolute";
                certificate[b].style.left = "5%";
                certificate[b].style.transform = "scale(0.7)";
                certificate[b].style.opacity = "0.6";
                certificate[b].style.transition = "all 500ms ease-out";
                b++;
            }

        if (c < len)
            {
                // Center
                certificate[c].style.position = "absolute";
                certificate[c].style.left = "40%";
                certificate[c].style.transform = "scale(1)";
                certificate[c].style.opacity = "1";
                certificate[c].style.transition = "all 500ms ease-out";
                c++;
            }
        else
            {
                c = 0;
                // Center
                certificate[c].style.position = "absolute";
                certificate[c].style.left = "40%";
                certificate[c].style.transform = "scale(1)";
                certificate[c].style.opacity = "1";
                certificate[c].style.transition = "all 500ms ease-out";
                c++;
            }

        if (d < len)
            {
                // right side
                certificate[d].style.position = "absolute";
                certificate[d].style.left = "75%";
                certificate[d].style.transform = "scale(0.7)";
                certificate[d].style.opacity = "0.6";
                certificate[d].style.transition = "all 500ms ease-out";
                d++;
            }
        else
            {
                d = 0;
                // right side
                certificate[d].style.position = "absolute";
                certificate[d].style.left = "75%";
                certificate[d].style.transform = "scale(0.7)";
                certificate[d].style.opacity = "0.6";
                certificate[d].style.transition = "all 500ms ease-out";
                d++;
            }


        if (e < len)
            {
                //Hide Slide Right Side
                certificate[e].style.position = "absolute";
                certificate[e].style.left = "110%";
                certificate[e].style.opacity = "0";
                certificate[e].style.transition = "all 500ms ease-out";
                e++;
            }
        else
            {
                e = 0;
                //Hide Slide Right Side
                certificate[e].style.position = "absolute";
                certificate[e].style.left = "110%";
                certificate[e].style.opacity = "0";
                certificate[e].style.transition = "all 500ms ease-out";
                e++;
            }
            
            
            function timer()
            {
                if(flag == -1)
                {
                    slideVarDec();
                    console.log("slideVarDec")
                    flag = 0;
                    cont = 0;
                    slideShow();
                }
                else
                {
                    if (flag == 0)
                    {
                        if(cont < 40)
                        {
                            console.log(cont);
                            cont++;
                            setTimeout(() => {timer()},100);    
                        }
                        else
                        {
                            cont = 0;
                            slideShow();
                        }

                    }
                    else
                    {
                        flag = 0;
                        cont = 0;
                        console.log("flag = 1");
                        slideShow();
                    }
                }

            }
            timer();

    }
}

slideShow();







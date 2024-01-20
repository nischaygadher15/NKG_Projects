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


// Tabs

let vision = document.querySelector('button.visionTab');
let mission = document.querySelector('button.missionTab');
let visionText = document.querySelector('.visionTabText');
let missionText = document.querySelector('.missionTabText');

// console.log(vision.classList, mission.classList);

function openVisionTab()
{
    console.log("clicked");
    vision.classList.add("clicked");
    mission.classList.remove("clicked");
    visionText.style.visibility = "visible";
    missionText.style.visibility = "hidden";
    visionText.style.top = "0";
    missionText.style.top = "-8.4vh";
}

function openMissionTab()
{
    console.log(".clicked");
    vision.classList.remove("clicked");
    mission.classList.add("clicked");
    visionText.style.visibility = "hidden";
    missionText.style.visibility = "visible";
    visionText.style.top = "-3vh";
    missionText.style.top = "-11.4vh";
}




// Companies Slide Show

let companySlide = document.querySelectorAll(".compPhotos");
var len = 10, a1 = 9, b1 = 0, c1 = 1, d1 = 2, e1 = 3,f1 = 4, flag = 0, cont = 0;
let leftBtn = document.getElementById("leftSlideBtn");
let rightBtn = document.getElementById("rightSlideBtn");
leftBtn.addEventListener("click", previousSlide);
rightBtn.addEventListener("click", nextSlide);

function slideVarDec1()
{
    if (a1 < 2)
    {
        if (a1 == 1)
        {
            a1 = 9;
        }
        else
        {
            a1 = 8;
        }
    }
    else
    {
        a1 -= 2;
    }


    if (b1 < 2)
    {
        if (b1 == 1)
        {
            b1 = 9;
        }
        else
        {
            b1 = 8;
        }
    }
    else
    {
        b1 -= 2;
    }

    if (c1 < 2)
    {
        if (c1 == 1)
        {
            c1 = 9;
        }
        else
        {
            c1 = 8;
        }
    }
    else
    {
        c1 -= 2;
    }


    if (d1 < 2)
    {
        if (d1 == 1)
        {
            d1 = 9;
        }
        else
        {
            d1 = 8;
        }
    }
    else
    {
        d1 -= 2;
    }


    if (e1 < 2)
    {
        if (e1 == 1)
        {
            e1 = 9;
        }
        else
        {
            e1 = 8;
        }
    }
    else
    {
        e1 -= 2;
    }


    if (f1 < 2)
    {
        if (f1 == 1)
        {
            f1 = 9;
        }
        else
        {
            f1 = 8;
        }
    }
    else
    {
        f1 -= 2;
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
    if (a1 < len)
        {
            //Hide Slide Left Side
            console.log('companySlide',a1);
            companySlide[a1].style.left = "-40%";
            companySlide[a1].style.opacity = "0";
            a1++;
        }
    else
        {
            a1 = 0;
            //Hide Slide Left Side
            console.log('companySlide',a1);
            companySlide[a1].style.left = "-40%";
            companySlide[a1].style.opacity = "0";
            a1++;
        }

    if (b1 < len)
        {
            // left side 
            console.log('companySlide',b1);
            companySlide[b1].style.left = "9%";
            companySlide[b1].style.opacity = "1";
            b1++;
        }
    else
        {
            b1 = 0;
            // left side 
            console.log('companySlide',b1);
            companySlide[b1].style.left = "9%";
            companySlide[b1].style.opacity = "1";
            b1++;
        }

    if (c1 < len)
        {
            // Center
            console.log('companySlide',c1);
            companySlide[c1].style.left = "30%";
            companySlide[c1].style.opacity = "1";
            c1++;
        }
    else
        {
            c1 = 0;
            // Center
            console.log('companySlide',c1);
            companySlide[c1].style.left = "30%";
            companySlide[c1].style.opacity = "1";
            c1++;
        }

    if (d1 < len)
        {
            // right side
            console.log('companySlide',d1);
            companySlide[d1].style.left = "51%";
            companySlide[d1].style.opacity = "1";
            d1++;
        }
    else
        {
            d1 = 0;
            // right side
            console.log('companySlide',d1);
            companySlide[d1].style.left = "51%";
            companySlide[d1].style.opacity = "1";
            d1++;
        }


    if (e1 < len)
        {
            //Hide Slide Right 
            console.log('companySlide',e1);
            companySlide[e1].style.left = "72%";
            companySlide[e1].style.opacity = "1";
            e1++;
        }
    else
        {
            e1 = 0;
            //Hide Slide Right Side
            console.log('companySlide',e1);
            companySlide[e1].style.left = "72%";
            companySlide[e1].style.opacity = "1";
            e1++;
        }
        
    if (f1 < len)
        {
            //Hide Slide Right 
            console.log('companySlide',f1);
            companySlide[f1].style.left = "150%";
            companySlide[f1].style.opacity = "0";
            f1++;
        }
    else
        {
            f1 = 0;
            //Hide Slide Right Side
            console.log('companySlide',f1);
            companySlide[f1].style.left = "150%";
            companySlide[f1].style.opacity = "0";
            f1++;
        }
        
    
        function timer1()
        {
            if(flag == -1)
            {
                slideVarDec1();
                console.log("slideVarDec1")
                flag = 0;
                cont = 0;
                slideShow();
            }
            else
            {
                if (flag == 0)
                {
                    if(cont < 30)
                    {
                        console.log(cont);
                        cont++;
                        setTimeout(() => {timer1()},100);    
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

        timer1();

}

slideShow();




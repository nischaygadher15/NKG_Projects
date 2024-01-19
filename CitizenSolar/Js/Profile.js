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






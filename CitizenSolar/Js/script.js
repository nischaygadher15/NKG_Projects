

// Upper Header Search Bar Hide/Show Feature Script

let searchLogo = document.getElementsByClassName("searchLogoBlock")[0];
let crossLogo = document.getElementsByClassName("crossLogoBlock")[0];
let searchBar = document.getElementsByClassName("searchBarBlock")[0];
searchLogo.addEventListener("click", changetoCross);
crossLogo.addEventListener("click", hideCross);

function changetoCross()
{    
        searchLogo.style.visibility = "hidden";
        searchLogo.style.opacity = "0";
        crossLogo.style.visibility = "visible";
        crossLogo.style.opacity = "1";
        searchBar.style.visibility = "visible";
        searchBar.style.opacity = "1";
}

function hideCross()
{
    searchLogo.style.visibility = "visible";
    searchLogo.style.opacity = "1";
    crossLogo.style.visibility = "hidden";
    crossLogo.style.opacity = "0";
    searchBar.style.visibility = "hidden";
    searchBar.style.opacity = "0";
}


// Sticky Nav Bar After Scroll Pass Header Section

const lowerHeadInt = document.querySelector(".lowerHeader");
const navBar = document.querySelector(".lowerNavbar");
const logo = document.getElementById('citizenLogo');
const observer = new IntersectionObserver(changeNavbar,
    {
        root:null,
        rootMargin: "20px",
        threshold: 1
    });


function changeNavbar(entries)
{
    const ent = entries[0];
    
}

observer.observe(lowerHeadInt);

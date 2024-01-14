

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


//Sticky Nav Bar After Scroll Pass Header Section

const lowerHeadInt = document.querySelector(".intersection");
const navBar = document.querySelector(".stickyNavbar");
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


//Animated Up Counting Numnbers

const counterTgr1 = document.querySelector("#citizenSolar");
const observer1 = new IntersectionObserver(triggerF,
    {
        root:null,
        rootMargin: "50px",
        threshold: 1
    });

observer1.observe(counterTgr1);


const counterTgr2 = document.querySelector("#countingNum");
const observer2 = new IntersectionObserver(triggerT,
    {
        root:null,
        rootMargin: "0px",
        threshold: 0.8
    });

observer2.observe(counterTgr2);


function triggerF(entries)
{
    let ent1 = entries[0];
    if (ent1.isIntersecting == false)
    {
        startCounter();
    }
}

function triggerT(entries)
{
    let ent2 = entries[0];
    if (ent2.isIntersecting == true)
    {
        startCounter();
    }
}


function startCounter()
{
    let countArray = document.querySelectorAll('.counterNum');
    let speed = 40;

    countArray.forEach( (countEle) => {
        let target = parseInt(countEle.getAttribute('data-set'));
        let initialValue = 0; 
        let incVar = target / speed;

        function updateCounter()
        {
            initialValue += incVar;
            countEle.innerText = Math.floor(initialValue)

            if(initialValue < target)
            {
                setTimeout(() => {updateCounter()},100);
            }
            else{
                if (countEle.innerText == 180)
                {
                countEle.innerText += "MW";
                }
                else
                {
                countEle.innerText += "+";
                }

            }
        }
        updateCounter();
    })

}



//  Certifications Slideshow

let certificate = document.querySelectorAll(".certificate");

function slideShow()
{
    //Hide Slide Left Side
    certificate[1].style.position = "absolute";
    certificate[1].style.left = "-30%";
    
    // left side 
    certificate[0].style.position = "relative";
    certificate[0].style.left = "5%";
    certificate[0].style.transform = "scale(0.7)";
    certificate[0].style.opacity = "0.6";

    // Center
    certificate[i].style.position = "relative";
    certificate[i].style.left = "40%";

    // right side
    certificate[1].style.position = "absolute";
    certificate[1].style.right = "5%";
    certificate[1].style.transform = "scale(0.7)";
    certificate[1].style.opacity = "0.6";

    //Hide Slide Right Side
    certificate[0].style.position = "absolute";
    certificate[0].style.left = "107%";

}


slideShow();


// console.log(certificate);


















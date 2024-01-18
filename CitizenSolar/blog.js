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


// Photos Slide Show

let slideShowVar = document.getElementById("slideShow");
let slideShowArr = [
    "url('/Images/33_banner-2.jpg') no-repeat;",
    "url('/Images/40_sample-banner.jpg') no-repeat;"
];
let sld=0, ssArrLen = slideShowArr.length;


function HomeSlideShow()
{
    if  (sld == (ssArrLen - 1))
    {
        sld = 0;
    }
    else
    {
        slideShowVar.style.background = slideShowArr[sld];
        sld++;  
    }
    setTimeout(() => {HomeSlideShow()},3000);
}

HomeSlideShow();    




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



// News Article Slide Show

let newsSlide = document.querySelectorAll(".newsSlide");
var len1 = 10, a1 = 8, b1 = 9, c1 = 0, d1 = 1, e1 = 2, flag1 = 0, cont1 = 0;
let leftBtn1 = document.getElementById("leftSlideNewsBtn");
let rightBtn1 = document.getElementById("rightSlideNewsBtn");
leftBtn1.addEventListener("click", previousNewsSlide);
rightBtn1.addEventListener("click", nextNewsSlide);

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
}

function previousNewsSlide()
{   
    flag1 = -1;
}

function nextNewsSlide()
{
    flag1 = 1;
}

function NewsSlideShow()
{
    if (true)
    {
        if (a1 < len1)
            {
                //Hide Slide Left Side
                console.log('newsSlide',a1);
                newsSlide[a1].style.position = "absolute";
                newsSlide[a1].style.left = "-40%";
                newsSlide[a1].style.opacity = "0";
                newsSlide[a1].style.transition = "all 500ms ease-out";
                a1++;
            }
        else
            {
                a1 = 0;
                //Hide Slide Left Side
                console.log('newsSlide',a1);
                newsSlide[a1].style.position = "absolute";
                newsSlide[a1].style.left = "-40%";
                newsSlide[a1].style.opacity = "0";
                newsSlide[a1].style.transition = "all 500ms ease-out";
                a1++;
            }

        if (b1 < len1)
            {
                // left side 
                console.log('newsSlide',b1);
                newsSlide[b1].style.position = "absolute";
                newsSlide[b1].style.left = "2%";
                newsSlide[b1].style.opacity = "1";
                newsSlide[b1].style.transition = "all 500ms ease-out";
                b1++;
            }
        else
            {
                b1 = 0;
                // left side 
                console.log('newsSlide',b1);
                newsSlide[b1].style.position = "absolute";
                newsSlide[b1].style.left = "2%";
                newsSlide[b1].style.opacity = "1";
                newsSlide[b1].style.transition = "all 500ms ease-out";
                b1++;
            }

        if (c1 < len1)
            {
                // Center
                console.log('newsSlide',c1);
                newsSlide[c1].style.position = "absolute";
                newsSlide[c1].style.left = "34.5%";
                newsSlide[c1].style.opacity = "1";
                newsSlide[c1].style.transition = "all 500ms ease-out";
                c1++;
            }
        else
            {
                c1 = 0;
                // Center
                console.log('newsSlide',c1);
                newsSlide[c1].style.position = "absolute";
                newsSlide[c1].style.left = "34.5%";
                newsSlide[c1].style.opacity = "1";
                newsSlide[c1].style.transition = "all 500ms ease-out";
                c1++;
            }

        if (d1 < len1)
            {
                // right side
                console.log('newsSlide',d1);
                newsSlide[d1].style.position = "absolute";
                newsSlide[d1].style.left = "67%";
                newsSlide[d1].style.opacity = "1";
                newsSlide[d1].style.transition = "all 500ms ease-out";
                d1++;
            }
        else
            {
                d1 = 0;
                // right side
                console.log('newsSlide',d1);
                newsSlide[d1].style.position = "absolute";
                newsSlide[d1].style.left = "67%";
                newsSlide[d1].style.opacity = "1";
                newsSlide[d1].style.transition = "all 500ms ease-out";
                d1++;
            }


        if (e1 < len1)
            {
                //Hide Slide Right 
                console.log('newsSlide',e1);
                newsSlide[e1].style.position = "absolute";
                newsSlide[e1].style.left = "110%";
                newsSlide[e1].style.opacity = "0";
                newsSlide[e1].style.transition = "all 500ms ease-out";
                e1++;
            }
        else
            {
                e1 = 0;
                //Hide Slide Right Side
                console.log('newsSlide',e1);
                newsSlide[e1].style.position = "absolute";
                newsSlide[e1].style.left = "110%";
                newsSlide[e1].style.opacity = "0";
                newsSlide[e1].style.transition = "all 500ms ease-out";
                e1++;
            }
            
            
            function timer1()
            {
                if(flag1 == -1)
                {
                    slideVarDec1();
                    console.log("slideVarDec1")
                    flag1 = 0;
                    cont1 = 0;
                    NewsSlideShow();
                }
                else
                {
                    if (flag1 == 0)
                    {
                        if(cont1 < 50)
                        {
                            console.log(cont1);
                            cont1++;
                            setTimeout(() => {timer1()},100);    
                        }
                        else
                        {
                            cont1 = 0;
                            NewsSlideShow();
                        }

                    }
                    else
                    {
                        flag1 = 0;
                        cont1 = 0;
                        console.log("flag1 = 1");
                        NewsSlideShow();
                    }
                }

            }
            timer1();

    }
}

NewsSlideShow();



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













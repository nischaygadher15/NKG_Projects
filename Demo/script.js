const fname = document.getElementById('f-name');
const lname = document.getElementById('l-name');
const mobileNo = document.getElementById('mob-no');
const pwd = document.getElementById('p-w-d');
const excMk = document.getElementsByClassName('excMk');
const dd = document.getElementById('birthDate');
const mm = document.getElementById('birthMonth');
const yy = document.getElementById('birthYear');
const f = document.getElementById('f');
const m = document.getElementById('m');
const c = document.getElementById('c');
const gOp = document.getElementsByClassName('gOp');


function checkForm()
{
    if (fname.value == '')
    {
        excMk[0].style.opacity= 1;
        fname.style.borderColor= 'red';
        
    }

    if (lname.value == '')
    {
        excMk[1].style.opacity= 1;
        lname.style.borderColor= 'red';
    }

    if (mobileNo.value == '')
    {
        excMk[2].style.opacity= 1;
        mobileNo.style.borderColor= 'red';
    }

    if (pwd.value == '')
    {
        excMk[3].style.opacity= 1;
        pwd.style.borderColor= 'red';
    }

    if (dd.value == 'DD')
    {
        dd.style.borderColor = 'red';
    }

    if (mm.value == 'MMM')
    {
        mm.style.borderColor = 'red';
    }

    if (yy.value == 'YYYY')
    {
        yy.style.borderColor = 'red';
    }

    if (!f.checked)
    {
        if(!m.checked)
        {
            if(!c.checked)
            {
                gOp[0].style.borderColor = 'red';
                gOp[1].style.borderColor = 'red';
                gOp[2].style.borderColor = 'red';
            }
        }
    }


    
    return false;
}
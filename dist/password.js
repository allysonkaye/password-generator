
document.getElementById("copyPaste").style.visibility = "hidden";
const pass = document.getElementById("result");
const upperChar = document.getElementById("upper");
const lowerChar = document.getElementById("lower");
const numChar = document.getElementById("num");
const specialChar = document.getElementById("special");
const text = document.getElementById('copyPaste');
//Generate function
function myPassword() {
    var char = "";

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnpqestuvwxyz";
    let spec = "!@#$%^&*()_-+={}[]|:;\"'<>,.?/";
    let numc = "0123456789";

    if ((upperChar).checked) char += upper;
    if ((lowerChar).checked) char += lower;
    if ((numChar).checked) char += numc;
    if ((specialChar).checked) char += spec;
    
    
    console.log(char);



    var password = "";

    for (let i = 1; i <=size.value; i++) {
        var randomNum = Math.floor(Math.random() * char.length + 1);
        password += char.charAt(randomNum)
        }

    return password;
        } 

    function runPass() {
    pass.innerHTML = myPassword();

    } 

   
    // update the value of slider
    var inp = document.getElementById('slider'); 
    inp.addEventListener("change", function () { 
        document.getElementById('size').innerHTML = this.value; 
    }); 
    

    //copy to clipboard
    document.getElementById('clipboard').onclick = function() {
        var copyText = document.getElementById('result').value;
         if (copyText == 0) {
            text.style.visibility = "visible";
            text.innerHTML = "Click Generate button!";
        } else {
            navigator.clipboard.writeText(copyText).then(() => {

                copyText.select();
                copyText.setSelectionRange(0, 99999);
            text.style.visibility = "visible";
            text.style.color = "#3b82f6";
            text.innerHTML = "Copied To Clipboard!";

            });
        }

        setTimeout(() => {
            const box = document.getElementById('copyPaste');

            box.style.visibility = "hidden";
            box.style.transition = "ease";
          }, 2000);
      }
      

    //theme toggle
      const light = document.getElementById("sun");
      const dark = document.getElementById("moon");
      const toggle = document.getElementById("switch");
      light.style.display = "none";

      // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            light.classList.remove('hidden');
        } else {
            dark.classList.remove('hidden');
        }

        toggle.addEventListener('click', function() {

        // toggle icons inside button
        dark.classList.toggle('hidden');
        light.classList.toggle('hidden');
        
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                light.style.display = "block";
                dark.style.display = "none";
                //text.style.color = "white";
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                dark.style.display = "block";
                light.style.display = "none";
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                dark.style.display = "block";
                light.style.display = "none";
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                light.style.display = "block";
                dark.style.display = "none";
            }
        }
        
    });







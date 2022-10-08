// Generating Automatic Captcha Code

function captchaGenerator()
{

    const alpha = ['A','B','C','D','E','a','b','c','d','e','1','2','3','4','5']

    const a = alpha[Math.floor(Math.random()*alpha.length)]
    const b = alpha[Math.floor(Math.random()*alpha.length)]
    const c = alpha[Math.floor(Math.random()*alpha.length)]
    const d = alpha[Math.floor(Math.random()*alpha.length)]
    const e = alpha[Math.floor(Math.random()*alpha.length)]

    const sum = a+b+c+d+e;

    
    document.getElementById('main').value = sum

}


//  Comparing Automatic Value and User Value

function isValid()
{

    if (main.value == user.value)
     {
        window.location.href = "https://joinindianarmy.nic.in/index.htm";
    } 
    
    else 
    {
       
      
        alert("Please Enter Correct Captcha")
    }
}

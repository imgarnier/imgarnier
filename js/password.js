{         
    const passwords = [
    {
        pass: "dogs",
        page: "dogs"
    },
    {
        pass: "cats",
        page: "cats"
    },
    {
        pass: "rats",
        page: "rats"
    },
];



function checkPswd() {
    const passInput = document.getElementById("pswd").value;
    const passMatch = passwords.find(o => o.pass === passInput);
  
    if (passMatch ) {
      console.log(`Redirecting to: "${passMatch.page}"`);

      const slider = document.getElementById("rgbKineticSlider");
      function delay() {
        slider.style.display = "none";
      }
      setTimeout(delay, 3000);

      const video = document.getElementById("myVideo");
      function delay() {
        video.style.display = "block";
        myVideo.play();
      }
      setTimeout(delay, 3000);

      const passwordcontent = document.getElementById("password-content");
      function delay() {
        passwordcontent.style.display = "none";
      }
      setTimeout(delay, 4000);
        
      const textcontent = document.getElementById("text-content");
      function delay() {
         textcontent.style.display = "none";
      }
      setTimeout(delay, 4000);

        

       video.addEventListener('ended',function() {window.location = `${passMatch.page}.html`;
    
       var value = "visited";    // or the date of visit!
       localStorage.setItem('my_flag', "visited");
    })





        document.getElementById("PasswordInput").innerHTML = "Access Granted";
        document.getElementById("PasswordInput").style.color = '#86ff51';
        document.getElementById("f1").style = `
        border: 2px solid #86ff51;
        height:11vh;
        `;
        document.getElementById("pswd").style.visibility = 'hidden';
        document.getElementById("CorrectPswd").style = 'display:block';
        document.getElementById("WrongPasswordInput").style = 'display:none';

        document.getElementById("clock-overlay-five").style.opacity = "1";
        document.getElementById("dontgo").style = 'display:block';
        document.getElementById("boat-song").style = 'display:none';
        document.getElementById("rgbKineticSlider").style = 'display:none';
    

        
        

    } else {
        document.getElementById("WrongPasswordInput").style = 'display:block';

            var elem = document.getElementById("WrongPasswordInput");
            var newElem = elem.cloneNode(true);
            elem.parentNode.replaceChild(newElem, elem);
            newElem.style.opacity = "animation: background-fade 4s";

        document.getElementById('pswd').value = ''

    }
}
}   




var input = document.getElementById("pswd");
input.addEventListener("keypress", function(event) {
    if (event.keyCode===13) {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
});




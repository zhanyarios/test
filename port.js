const navbar = document.querySelector('.navbar');
             const btnn = document.querySelector('.btn');
             btnn.addEventListener( 'click', () => {
             navbar.classList.toggle('active');
             btnn.classList.toggle('active');
         }
     );


     //speech about code
     let utterance = new SpeechSynthesisUtterance("hello my friend my name is your Name and this is my personal portfolio website. i am a student and i amd a full stack web devloper and Ui and ux designer.if you want to contact me you can contact me through this website thansks");
     function speakstart(){
         speechSynthesis.speak(utterance);
        
     }
    // Al
    let ai = new SpeechSynthesisUtterance("Artificial Intelligent is the feature technology");
     function aistart(){
         speechSynthesis.speak(ai);
        
     }

     //Button Audia 
    //  var audia = new Audio("Audia/audiobutton.mp3");
    //  function soundplay(){
    //      audia.play();
    //  }
// youtube
    let youtube = new SpeechSynthesisUtterance("you are click youtube please Wait Youtube is opening");
     function soundplay(){
        speechSynthesis.speak(youtube);
     }
     let github = new SpeechSynthesisUtterance("you are click github please Wait github is opening");
     function soundplayr(){
        speechSynthesis.speak(github);
     }
     let instagram = new SpeechSynthesisUtterance("you are click instagram please wait instagram is opening");
     function soundplayl(){
        speechSynthesis.speak(instagram);
     }
     let link = new SpeechSynthesisUtterance("you are click linkind please wait LinkedIn is opening");
     function soundplayi(){
        speechSynthesis.speak(link);
     }
     let twiter = new SpeechSynthesisUtterance("you are click Twitter please wait twitter is opening");
     function soundplayt(){
        speechSynthesis.speak(twiter);
     }
    //start form validation
    var nameError = document.getElementById('name-error');
    var phoneError = document.getElementById('Phone-error');
    var EmailError = document.getElementById('email-error');
    var Meassageerror = document.getElementById('massage-error');
    var SubmitError = document.getElementById('submit-error');


   function validationName(){
       var name = document.getElementById('form-name').value;
       if(name.lenght == 0){
         nameError.innerHTML = "name is Require";
         return false;
       }
       if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
           nameError.innerHTML = '<i class="fa fa-times" style="background-colour:red;"></i>';
           return false;
       }
       nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
       return true;
   }

   function validationPhone(){

      var phone = document.getElementById("form-phone").value;

      if(phone.lenght == 0){
          phoneError.innerHTML = "phone no is required";
          return false;
        }
        
          if(!phone.match(/^[0-9]{10}$/)){
            phoneError.innerHTML = '<i class="fa fa-times"></i>';
             return false;
              }
           phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
           return true; 
   }

   function validationEmail(){
       var Email = document.getElementById('contact-email').value;
       if(Email.lenght == 0){
          EmailError.innerHTML = 'fill the Email';
          return false;
       }
       
       if(!Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
           EmailError.innerHTML = '<i class="fa fa-times"></i>';
           return false;
       }
  
          EmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
          return true; 
   }

   function validationmassage(){
       var massage = document.getElementById('message-control').value;
        var required = 30;

        var left = required - massage.length;

        if(left > 0)
        {
          Meassageerror.innerHTML = left + 'more character require';
          return false;  
        }

        Meassageerror.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;

   }
   function validateForm(){
       if(!validationName() || !validationPhone() || !validationEmail() || !validationmassage()){
           SubmitError.style.display = 'block';
           SubmitError.innerHTML = 'please fix error to submit';
           setTimeout(function(){
               SubmitError.style.display = 'none';
           }, 12000);
       }
   }


   //send mail with javascript

var email_error = document.getElementById('email-control');

var pass_error = document.getElementById('pass-control');
var form_error = document.getElementById('button-control');

function validationEmail(){
    var email_value = document.getElementById('email').value;

    if(email_value.lenght == 0){
        email_error.innerHTML = 'fill Email field';
        return false;
    }

    if(!email_value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email_error.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
        email_error.style.color = "red";
        return false;
    }

    email_error.innerHTML ='<i class="fa fa-check-circle" aria-hidden="true"></i>';
    email_error.style.color = "green";
    return true;
}

function passvalidation(){
    var pass_value = document.getElementById('pass').value;

    if(pass_value.lenght == 0){
        pass_error.innerHTML = 'fill the password field';
        return false;
    }

    var matchedCase = new Array();
                matchedCase.push("[$@$!%*#?&]"); // Special Charector
                matchedCase.push("[A-Z]");      // Uppercase Alpabates
                matchedCase.push("[0-9]");      // Numbers
                matchedCase.push("[a-z]");     // Lowercase Alphabates

                // Check the conditions
                var ctr = 0;
                for (var i = 0; i < matchedCase.length; i++) {
                    if (new RegExp(matchedCase[i]).test(pass_value)) {
                        ctr++;
                    }
                }
                // Display it
                var color = "";
                var strength = "";
                switch (ctr) {
                    case 0:
                    case 1:
                    case 2:
                        strength = "Very Weak";
                        color = "red";
                        break;
                    case 3:
                        strength = "Medium";
                        color = "orange"; 
                        break;
                    case 4:
                        strength = "Strong";
                        color = "green";
                        break;
                }
                pass_error.innerHTML = strength;
                pass_error.style.color = color;
                return true;
             

}
 
function formvalidation(){
    if(!validationEmail() || !passvalidation()){
       form_error.innerHTML ='fill all field';
       return false; 
    }
}
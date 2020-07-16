
angular.module('public')

.controller('SignUpController',SignUpController);

SignUpController.$inject=['SignUpService'];
function SignUpController(SignUpService){
  var signupctrl=this;

  signupctrl.user ={};
  signupctrl.user.firstname = "";
  signupctrl.user.lastname = "";
  signupctrl.user.emailaddress = "";
  signupctrl.user.phonenum = "";
  signupctrl.user.menu_number = "";

  signupctrl.submit = function(){
    SignUpService.submit(signupctrl.user);
  }


  signupctrl.data = SignUpService.retrieve();

  signupctrl.menuinfo = SignUpService.data;

}

function validateEmail() {
  if (newsletter.email.value=="")      
  {
    alert("Please enter the email");
    newsletter.email.focus();
    return false;
  }

  var reg = /^ ([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z][2,4])$/;

  if(reg.test(newsletter.email.value) == false)
  {
    alert('Invalid email adress');
    newsletter.email.focus();
    return false;
  }

  return true;
}
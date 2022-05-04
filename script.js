/* Applying the "open" class when you click the Menu button, which triggers the mobile menu to open/close; Toggle Menu/Close menu text. */
$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Close Menu' ? 'Menu' : 'Close Menu');
    e.preventDefault();
  });
});
<script> 
function validateform(){ 
var name=document.myform.name.value; 
var name2=document.myform.name2.value; 
var name3=document.myform.name3.value; 
var Phone=document.myform.Phone.value; 
 
if (name==null || name==""){ 
  alert("First Name can't be blank"); 
  return false; 
}if (name2==null || name2==""){ 
  alert("Last Name can't be blank"); 
  return false;
}if (name3==null || name3==""){ 
  alert("Mailbox can't be blank"); 
  return false;
}else if(Phone.length<11){
  alert("Phone must be at least 11 characters long.");
  return false;
  }
}
</script> 

function NavigateToSite(){
    var ddl = document.getElementById("ddlMyList");
    var selectedVal = ddl.options[ddl.selectedIndex].value;
 
    window.location = selectedVal;
}

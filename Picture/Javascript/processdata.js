function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function checkEmail(email)
{	
	
  var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  
  if(pattern.test(email)) {         
	return true;
  } else {   
	return false; 
  }

}

function toggleFormVisibility()
{
  var frm_element = document.getElementById('subscribe_frm'); 
  var sub_link_element = document.getElementById('sub');
  var nosub_link_element = document.getElementById('nosub');

  var vis = frm_element.style;
  
  if(vis.display=='' || vis.display=='none') {
	  vis.display = 'block';
	  sub_link_element.style.display='none';
	  nosub_link_element.style.display='';
  } else {
	  vis.display = 'none';
	  sub_link_element.style.display='block';
	  nosub_link_element.style.display='none';
  }

}

function processFormData() 
{
	var name_element = document.getElementById('txt_rname');
	var email_element = document.getElementById('txt_email');
	var TelNo_element = document.getElementById('Tel_no');
	var gender_element = document.getElementById('slt_gender');
	var address_element = document.getElementById('txt_address');
	var state_element = document.getElementById('rstate');
	var postc_element = document.getElementById('rpostcode');
	var password_element = document.getElementById('rpassword');
	


	var name = trim(name_element.value);
	var email = trim(email_element.value);
	var TelNo = trim(TelNo_element.value);
	var gender = gender_element.value;
	var address = trim(address_element.value);
	var state = state_element.value;
	var postcode = trim(postc_element.value);
	var password = password_element.value;
	  

	var error_message = 'The following fields had errors in them: \n\n';
  	var data = 'Thanks for Signing Up \n\n';

	var error_flag = false;


if(name == '') {
	  error_message += 'User Name: Invalid\n';
	  error_flag = true;
  } else {
	  data += 'User Name: ' + name + '\n';
  }

if(!checkEmail(email)) {
	  error_message += 'Email: Invalid\n';
	  error_flag = true;
  } else {
	  data += 'Email: ' + email + '\n';
  }

if(TelNo == '') {
	  error_message += 'Phone No.: Invalid\n';
	  error_flag = true;
  } else {
	      data += 'Phone No. : ' + TelNo + '\n';
  }

 data += 'Gender: ' + gender + '\n';

if(address == ''){
	error_message += 'Address: Invalid\n';
	error_flag = true
}else {
	data += 'Address :' + address + '\n';
	}
data += 'State :' + state + '\n'

if(postcode == ""){
	error_message += 'Postcode : Invalid\n';
	error_flag = true
}else {
	data += 'Postcode :' + postcode + '\n';	
}

data += 'Password : Valid' + '\n';


if(error_flag) {
	  alert(error_message);
  } else {
	  alert(data);
  }

}
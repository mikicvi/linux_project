console.log("Script loaded");
function validation(){
    console.log('meh');
}

window.addEventListener("load", function(){
    new mediumZoom('.containerImg, .researchImg');;
});



//Array which will store all header images
var header_images = new Array();
header_images[0] = "ubuntu_header.jpg";
header_images[1] = "arch_linux_header.png";
header_images[2] = "fedora_header.png";
header_images[3] = "linux_mint_header.png";

var image_path = "Assets/Images/";

var counter = 0;

//jquery rotator
function rotator()
{
    path = image_path + header_images[counter];
    counter++;

    if(counter > header_images.length - 1)
    {
        counter = 0;
    }
    setTimeout(rotator, 15000);
    transition(path);
};
//Jquery Transition
function transition(path)
{
    console.log(path)
    $('#rotatorImage').fadeOut(500, function()
    {
        $('#rotatorImage').attr("src",path).stop().fadeIn(700);
    });
};

//function to move to the previous image
function previousImage()
{
    if(counter > 0)
    {
        counter--;
    }
    else{
        counter = header_images.length -1;
    }
    document.getElementById("rotatorImage").src =image_path + header_images[counter];
    console.log("button clicked")
};
//funtion to move to next image
function nextImage()
{
    if(counter == header_images.length-1)
    {
        counter = 0;
    }
    else{
        counter++;
    }
    document.getElementById("rotatorImage").src = image_path + header_images[counter];
    console.log("button clicked")
};

function validate(){
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 3){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(surname.length < 3){
    text = "Please Enter Valid Surname";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 15){
    text = "Please Enter More Than 15 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

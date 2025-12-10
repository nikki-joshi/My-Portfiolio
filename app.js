var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");
var sidemenu = document.getElementById("sidemenu")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
     for(tabcont of tabcontent){
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}
 function openmenu(){
    sidemenu.style.right = "0";
 }
 function closemenu(){
    sidemenu.style.right = "-200px";
 }
 const scriptURL = 'https://script.google.com/macros/s/AKfycbzr_-i-todF51YXt5XTI4Jj7RBQlhoPQX0i2diZqjeNTds4LgGC_A9LmxmOvzFXHgs/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {

      // Show message + fade-in
      msg.innerHTML = "Message sent successfully!";
      msg.classList.add("show");

      
      setTimeout(() => {
        msg.classList.remove("show");  

        setTimeout(() => {
          msg.innerHTML = "";
          window.location.reload();     
        }, 600); 
      }, 4000);

      form.reset();
    })
    .catch(error => {
      msg.innerHTML = "Something went wrong!";
      msg.classList.add("show");
      console.error('Error!', error.message);
    });
});
  
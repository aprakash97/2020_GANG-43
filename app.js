const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },2000);
})

// Rating Initialization
$(document).ready(function() {
    $('#rateMe2').mdbRate();
  });
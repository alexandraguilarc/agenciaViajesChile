let buttons = document.querySelectorAll('a');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
      
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  $(document).ready(function () {
    $("#section1").on("click", function(){
        $('p').toggle(2000);
        $('p').toggle('hide');
    });
  });
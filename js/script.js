 

    // Date Picker
    const pickerCheckIn = datepicker('#inputCheckIn');
    const pickerCheckOut = datepicker('#inputCheckOut');

    
    $('.slider-level').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll:1,
        arrows:false,
  
      });
     
      function setPageNav(){
        if($(window).width() > 991) {
            $('#tm-top-bar').singlePageNav({
                currentClass:'active',
                offset: 79
            });   
        }
        else {
            $('#tm-top-bar').singlePageNav({
                currentClass:'active',
                offset: 65
            });   
        }
    }


    
    $(document).ready(function(){

        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".tm-top-bar").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".tm-top-bar").removeClass("active");
            }
        }
        )});      



       
    function videoToggle(){

        video= $('.level-video').get(0)
  
  
        if(video.paused) {
  
          video.play();
          $('.video-play-control').hide();
          $('.video-control-pause').show();
  
  
  
        }
  
        else {
  
          video.pause();
          $('.video-play-control').show();
          $('.video-control-pause').hide();
  
        }
      }
  
  
      $('.video-play-control').click(function() {
  
        videoToggle();
      })
  
      $('.video-control-pause').click(function() {
  
        videoToggle();
      })
  
    ;

    var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
  
  
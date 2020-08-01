
  function myFunction() {
  var x = document.getElementById("carouselExampleIndicators");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var form = document.getElementById('form');

    var displaySetting = form.style.display;
    if (displaySetting == "block") {
      form.style.display = "none";
    }
    else {
      form.style.display = "block";
      
    }
  }
function myfunction() {
  var hideform = document.getElementById("form");
  var displaySetting = form.style.display;

  if (displaySetting === "none"){
    hideform.style.display ="block";
  }
  else {
    hideform.style.display = "none";
  }

  var showCarousel = document.getElementById("carouselExampleIndicators")
  var displaySetting = form.style.display;

  if (displaySetting == "block") {
      showCarousel.style.display = "none";
    }
    else {
      showCarousel.style.display = "block";
    }
  }
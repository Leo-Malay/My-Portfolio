
var certi_index = 0;
showSlide(certi_index);

function plusSlide(n) {
  showSlide(certi_index += n);
}

function currentSlide(n) {
  showSlide(certi_index = n);
}

function showSlide(n) {
  var imgs = ["./IMG/py.png","./IMG/pd.png","./IMG/ml0.png","./IMG/ml1.png","./IMG/dv.png"];
  var name = ["Python","Pandas","Intro to Machine Learning","Intermediate to Machine Learning","Data Visualization"];
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if(n >= 5){
      n = 0;
      certi_index = 0;
  }
  else if(n < 0){
      n = 4;
      certi_index = 4;
  }
  dots[n].className = "dot active";
  document.getElementById("desc_certi").innerHTML = name[n];
  document.getElementById("desc_certi_img").src = imgs[n];
}
function move(t){
  var s=document.getElementById("bar");
  s.style.display="block"

  switch (t) {
    case(1):
    s.style.transform="translate(588.5px, 0px)";
    break;

    case(2):
    s.style.transform="translate(659.5px, 0px)";
    break;

    case(3):
    s.style.transform="translate(728px, 0px)";
    break;

    case(4):
    s.style.transform="translate(807px, 0px)";
    break;

    case(5):
    s.style.transform="translate(895px, 0px)";
    break;
  }
}

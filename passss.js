function check(){
pass=document.getElementById("pass").value;
if (pass=="VEDANsh2100"){
    document.getElementById("form").innerHTML='<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfttAEDi23OGMDYXCaT5PwgNT1CMxJIE8AM8nmPaTchk6aK6Q/viewform?embedded=true" width="500" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe><br>'
    document.getElementById("button").innerHTML=""
}
else{
    document.getElementById("form").innerHTML='<iframe style="border-radius: 15px;" src="in.html" height="100px" width="500px"></iframe>'
}
}
    // Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

function toggleMenu(){document.getElementById("navLinks").classList.toggle("open")}
function openLesson(title,text){
  document.getElementById("modalTitle").textContent=title;
  document.getElementById("modalText").textContent=text;
  document.getElementById("lessonModal").classList.add("show");
}
function closeLesson(e){
  if(!e || e.target.id==="lessonModal") document.getElementById("lessonModal").classList.remove("show");
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLesson()});

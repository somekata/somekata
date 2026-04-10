function openSection(evt, sectionName) {
  document.querySelectorAll('.tabcontent').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tablinks').forEach(el => el.classList.remove('active'));
  document.getElementById(sectionName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

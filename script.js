var s;
var ss;
var sss;
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
var gta = new Audio();
gta.src = "gta.mp3";
var err = new Audio();
err.src = "err.mp3";
var fart = new Audio();
fart.src = "fart.mp3";
var wow = new Audio();
wow.src = "wow.mp3";

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function ss1()
{
  err.play()
  if(s==1)
  {
    document.getElementById("s1").style.display="inline";
    return s=0;
  }
  else
  {
    document.getElementById("s1").style.display="none";
    return s=1;
  }
}
function ss2()
{
  fart.play()
  fart.pause()
  if(s==1)
  {
    document.getElementById("s2").style.display="inline";
    return ss=0;
  }
  else
  {
    document.getElementById("s2").style.display="none";
    return ss=1;
  }
}
function ss3()
{
  gta.play()
  if(s==1)
  {
    document.getElementById("s3").style.display="inline";
    return sss=0;
  }
  else
  {
    document.getElementById("s3").style.display="none";
    return sss=1;
  }
}
function ss4()
{
  wow.play()
}


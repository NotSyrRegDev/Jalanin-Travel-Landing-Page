
/* HANDLING SHOWING SIDEBAR */

  const mobileBar = document.querySelector('.mobile-bar__div');
  const mobileSideBar = document.querySelector('.sidebar--mobile');
  const closeSibarBomile =  document.querySelector('.close--icon__sidebar');
  mobileBar.addEventListener('click' , showSidebar);
  closeSibarBomile.addEventListener('click' , hideSidebar);

  function showSidebar() {
    mobileSideBar.classList.add('active');
    closeSibarBomile.classList.add('active');

  }
  function hideSidebar() {
    mobileSideBar.classList.remove('active');
    closeSibarBomile.classList.remove('active');
  }


  /* HANDILIGN POPUP VIDEO */
  const playVideoSvg = document.querySelectorAll('.play--icon__svg');

 for (var i =0; i < playVideoSvg.length; i++ ) {
  playVideoSvg[i].addEventListener('click' , showVideoPopop);
 }
  
  const clsoeVideoSvg = document.querySelector('.img--close__svg');
  const popUpVideoDiv = document.querySelector('.popup__video--div');



  clsoeVideoSvg.addEventListener('click' , hideVideoPopop);

  function showVideoPopop() {
    popUpVideoDiv.classList.add('active');
  }
  function hideVideoPopop() {
    popUpVideoDiv.classList.remove('active');
  }
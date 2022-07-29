window.onload = function() {
  window.addEventListener('resize', heightUpdate);
  let container = document.querySelector('.container');
  function heightUpdate() {
    let footerH = document.querySelector('footer').offsetHeight;
    let section = document.querySelector('section').offsetHeight;
    container.style.minHeight = (section + footerH) + 'px';
  }
  heightUpdate();
}

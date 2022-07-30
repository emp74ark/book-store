function shadow(cmd){
  const insertionPlace = document.querySelector('main')
  if (cmd === 0){
    document.body.style.overflow = 'auto'
    const shadowDiv = document.querySelector('.shadow');
    insertionPlace.removeChild(shadowDiv)
  }
  if (cmd === 1){
    document.body.style.overflow = 'hidden'
    const shadowDiv = document.createElement('div');
    shadowDiv.className = 'shadow';
    insertionPlace.appendChild(shadowDiv)
  }
}

export { shadow }
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  //e stands for event
  //keyboard event to dom
  //if space is pressed, display space
  //wow this is magical, we can update the dom with bunch of html code by using innerHTML and template literals
  insert.innerHTML = `
  <div class="key">
  ${e.key === ' ' ? 'Space' : e.key} 
  <small>event.key</small>
</div>

<div class="key">
${e.keyCode}

  <small>event.keycode</small>
</div>

<div class="key">
${e.code}
  
  <small>event.code</small>
</div> 
  `
})

const hover = document.getElementById('myClick');

    hover.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black';
  });

    hover.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white';
  });
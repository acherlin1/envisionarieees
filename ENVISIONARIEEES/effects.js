const hover = document.getElementById('myText');

    hover.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black';
  });

    hover.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white';
  });
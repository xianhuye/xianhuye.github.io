function homeBt(){
  document.getElementById('homeP').style.display = 'block';
  document.getElementById('interP').style.display = 'none';
  document.getElementById('resumeP').style.display = 'none';
  document.getElementById('homeText').style.color = 'black';
  document.getElementById('interText').style.color = '#b4b4b4';
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
};

function interBt(){
  document.getElementById('interP').style.display = 'block';
  document.getElementById('homeP').style.display = 'none';
  document.getElementById('resumeP').style.display = 'none';
  document.getElementById('homeText').style.color = '#b4b4b4';
  document.getElementById('interText').style.color = 'black';
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
};

function resumeBt(){
  document.getElementById('interP').style.display = 'none';
  document.getElementById('homeP').style.display = 'none';
  document.getElementById('resumeP').style.display = 'block';
  document.getElementsByTagName('body')[0].style.backgroundColor = '#dedede';
};

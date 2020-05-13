

function resumeBt(){
  document.getElementById('homeP').style.display = 'none';
  document.getElementById('resumeP').style.display = 'block';
  document.getElementsByTagName('body')[0].style.backgroundColor = '#dedede';
};

function tinyBt(){
  document.getElementById('interiorMenu').style.display = 'none';
  document.getElementById('tinyHouse').style.display = 'block';
  document.getElementById('codesLab').style.display = 'none';
  document.getElementById('aNh').style.display = 'none';
  document.getElementById('new').style.display = 'none';
}

function codeBt(){
  document.getElementById('interiorMenu').style.display = 'none';
  document.getElementById('tinyHouse').style.display = 'none';
  document.getElementById('codesLab').style.display = 'block';
  document.getElementById('aNh').style.display = 'none';
  document.getElementById('new').style.display = 'none';
}

function aNhBt(){
  document.getElementById('interiorMenu').style.display = 'none';
  document.getElementById('tinyHouse').style.display = 'none';
  document.getElementById('codesLab').style.display = 'none';
  document.getElementById('aNh').style.display = 'block';
  document.getElementById('new').style.display = 'none';
}

function newBt(){
  document.getElementById('interiorMenu').style.display = 'none';
  document.getElementById('tinyHouse').style.display = 'none';
  document.getElementById('codesLab').style.display = 'none';
  document.getElementById('aNh').style.display = 'none';
  document.getElementById('new').style.display = 'block';
}

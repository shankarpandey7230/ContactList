// console.log('script connected');check

// slide to next (app) screen
const sliderElm = document.getElementById('mySlider');
// console.log(sliderElm);

sliderElm.addEventListener('change', (e) => {
  //   console.log(e.target.value);
  const { value } = e.target;
  const labelElm = document.getElementById('label');
  if (value > 70) {
    labelElm.textContent = '';
    displayAppScreen();
  } else {
    labelElm.textContent = 'Slide To Unlock';
  }
});

const displayAppScreen = () => {
  // hide home screen
  //   document.querySelector('.homeScreen').style.display = 'none';
  document.querySelector('.homeScreen').remove();

  // show app screen
  document.querySelector('.appScreen').style.display = 'block';
};

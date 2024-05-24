// console.log('script connected');check

const apiEp = 'https://randomuser.me/api?results=2';

let userList = [];
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

const fetchContacts = async (url) => {
  // fetch contacts
  // promise method
  // fetch(url)
  //   .then((res) => {
  //     // console.log(res);
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(erro)
  //   });

  // async await;
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  userList = data.results;
  // console.log(data);
  console.log(userList);
};
fetchContacts(apiEp);

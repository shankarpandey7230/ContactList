// console.log('script connected');check

const apiEp = 'https://randomuser.me/api?results=6';

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
  // hide the spinner
  document.querySelector('.showSpinner').style.display = 'none';

  // display contacts
  displayContList(userList);
};
fetchContacts(apiEp);

// displayContact List

const displayContList = (userList) => {
  document.getElementById('list').style.display = 'block';

  let str = '';
  userList.map((item, i) => {
    str += ` 
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse${i}"
        aria-expanded="false"
        aria-controls="collapse${i}"
      >
        <img
          src="${item.picture.large}"
          alt=""
          width="50px"
          class="rounded-circle"
        />
        <div class="ms-2">
          <div class="fw-bolder">${item.name.title}  ${item.name.first}  ${item.name.last}</div>
          <small> ${item.location.street.number} ${item.location.street.name} </small>
        </div>
      </button>
    </h2>
    <div
      id="collapse${i}"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div
        class="accordion-body d-flex flex-column align-items-center justify-content-center"
      >
        <img
        src="${item.picture.large}"
          alt=""
          width="150px"
          class="rounded-circle"
        />
        <div>
          <div class="fw-bolder">
            <i class="bi bi-person-circle"></i>
            ${item.name.title}  ${item.name.first}  ${item.name.last}
          </div>
          <div>
            <a href="tel:${item.cell}">
              <i class="bi bi-phone-fill"> ${item.cell}</i> 
            </a>
          </div>
          <div>
            <a href="mailto:${item.email}"
              ><i class="bi bi-envelope-fill"></i>${item.email}</a
            >
          </div>
          <div>
            <a href="https://www.google.com/maps/place/${item.location.street.number} ${item.location.street.name}" target="_blank">
              <i class="bi bi-globe-asia-australia"></i> ${item.location.street.number} ${item.location.street.name}${item.location.state}
            >
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });

  document.getElementById('accordionExample').innerHTML = str;
};

// searchContact

document.getElementById('search').addEventListener('keyup', (e) => {
  // console.log(e);
  const { value } = e.target;
  // console.log(value);

  const filteredContact = userList.filter((item) => {
    const name = (item.name.first + '' + item.name.last).toLowerCase();
    return name.includes(value.toLowerCase());
  });
  displayContList(filteredContact);
});




/* ->->-> COMMON <-<-<- */



// Variables
const underlayer = document.querySelector(".underlayer");

// Open window function
function openWindow(classificator) {
  let windowName = document.querySelector(classificator);

  windowName.style.visibility = "visible";
};

// Close window function
function closeWindow(classificator) {
  let windowName = document.querySelector(classificator);

  windowName.style.visibility = "hidden";
};

// Close ALL windows function
function closeAllWindows(classificator) {
  let windowName = document.querySelectorAll(classificator);

  windowName.forEach((item) => item.style.visibility = "hidden");
};



/* ->->-> MAIN SECTIONS APPEARANCE <-<-<- */



// Variables
const infoSection = document.querySelector(".section-info");
const skillsSection = document.querySelector(".section-skills");
const portfolioSection = document.querySelector(".section-portfolio");
const contactMeSection = document.querySelector(".section-contact-me");

// Function. Section Appearance
function visualSections(identificator) {
  let arrForBlocks = [infoSection, skillsSection, portfolioSection, contactMeSection];

  arrForBlocks[identificator].style.display = "block";
  returnButton.style.visibility = "visible";
  returnButton.style.opacity = "1";

  arrForBlocks.splice(identificator, 1);

  for (let value of arrForBlocks) {
    value.style.display = "none";
  };
};



/* ->->-> NAVIGATION ICONS ANIMATION <-<-<- */



// Variables
const skillsImg = document.querySelector(".skills-img");
const portfolioImg = document.querySelector(".portfolio-img");
const contactMeImg = document.querySelector(".contact-me-img");

// Function. Icon change if click
function visualImgs(identificator) {
  let arrImgs = [0, skillsImg, portfolioImg, contactMeImg];

  if (identificator == 0) {
    for (let value of arrImgs) {
      value.style.marginLeft = "0px";
    };
  } else {
    arrImgs[identificator].style.marginLeft = "6px";

    arrImgs.splice(identificator, 1);
    arrImgs.splice(0, 1);

    for (let value of arrImgs) {
      value.style.marginLeft = "0px";
    };
  };
};



/* ->->-> RETURN BUTTON ANIMATION <-<-<- */



// Variables
const returnButton = document.querySelector(".return-label");

returnButton.addEventListener("click", visualReturn);

// Function. Return button visualiation
function visualReturn() {
  let arrForBlocks = [skillsSection, portfolioSection, contactMeSection];
  let arrImgs = [skillsImg, portfolioImg, contactMeImg];

  returnButton.style.visibility = "hidden";
  returnButton.style.opacity = "0";
  infoSection.style.display = "block";
  linksStrip.style.width = "86%";
  linksStrip.style.marginLeft = "7%";

  for (let value of arrForBlocks) {
    value.style.display = "none";
  };

  for (let value of arrImgs) {
    value.style.marginLeft = "0px";
  };

  skillsVisualRefresh();
};

let leftSideTitleOrange = document.querySelector(".left-side-title__orange")
let leftSideTitleBlack = document.querySelector(".left-side-title__black")
let leftSideTitleName = document.querySelector(".left-side-title__name")

leftSideTitleOrange.addEventListener("click", visualReturn);
leftSideTitleBlack.addEventListener("click", visualReturn);
leftSideTitleName.addEventListener("click", visualReturn);


//class="left-side-title__span" onclick="visualReturn()"



/* ->->-> ORANGE STRIP ANIMATION <-<-<- */



// Variables
const linksStrip = document.querySelector(".links-strip");

// Function. Orange strip visualiation
function visualStrip(identificator) {
  switch (identificator) {
    case 1:
      linksStrip.style.width = "28.67%";
      linksStrip.style.marginLeft = "7%";
      break;
    case 2:
      linksStrip.style.width = "28.67%";
      linksStrip.style.marginLeft = "35.67%";
      break;
    case 3:
      linksStrip.style.width = "28.67%";
      linksStrip.style.marginLeft = "64.34%";
      break;
  };
};



/* ->->-> SECTION SKILLS <-<-<- */



// Variables
const skillsArr = Array.from(document.querySelectorAll(".skills-visual"));

let timerSkills;

// Function. Skills block visualiation
function skillsVisual() {
  for (let i = 0; i < skillsArr.length; i++) {
    timerSkills = setTimeout((function (index) {
      return function () {
        skillsArr[index].style.animationName = "open";
      };
    })(i), 200 * (i + 1))
  };
};

function skillsVisualRefresh() {

  clearTimeout(timerSkills);
  clearInterval(timerSkills);

  for (let i = 0; i < skillsArr.length; i++) {
    skillsArr[i].style.animationName = "none";
  };
};



/* ->->-> SECTION PORTFOLIO <-<-<- */



// Variables
const portfolioBlock = document.querySelector(".section-portfolio-block");

// Function. Portfolio block visualiation
function portfolioVisual() {
  portfolioBlock.style.animationName = "appearTable";
};



/* ->->-> SECTION CONTACT ME <-<-<- */



// Variables
const contactMeWrapper = document.querySelector(".section-contact-me-wrapper");

// Function. Contact me block visualiation
function contactMeVisual() {
  contactMeWrapper.style.animationName = "appearForm";
};



/* ->->-> RESULTING VISUALIZATION <-<-<- */



// Функция. Итоговая визуализация
function visual(identificator) {

  visualImgs(identificator);

  visualSections(identificator);

  visualStrip(identificator);

  identificator == 1 ? skillsVisual() : skillsVisualRefresh();

  if (identificator == 2) portfolioVisual();

  if (identificator == 3) contactMeVisual();
};



/* ->->-> MODAL WINDOWS <-<-<- */



// Функция. Модальные окна
function openModal(classificator) {
  openWindow(classificator);
  underlayer.style.visibility = "visible";
  underlayer.style.animationName = "underlayerOpacityChange";
};

function closeAllModals(classificator) {
  closeAllWindows(classificator);
  underlayer.style.visibility = "hidden";
  underlayer.style.animationName = "none";
};



/* ->->-> FEEDBACK FORM <-<-<- */



// Function. Form button
function formFeedBackClose() {
  closeWindow(".form-feedback-window");
  underlayer.style.visibility = "hidden";
  underlayer.style.animationName = "none";
};

function formFeedBackDeclinedClose() {
  closeWindow(".form-feedback-window-declined");
  underlayer.style.visibility = "hidden";
  underlayer.style.animationName = "none";
};

// Function. Form
let form = document.querySelector("#form");

form.addEventListener("submit", formSend);

let error;

async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);

  if (error === 0) {
    const formData = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      message: document.querySelector("#message").value
    };

    const formDatatoSend = JSON.stringify(formData)

    openWindow(".loading");
    underlayer.style.visibility = "visible";
    underlayer.style.animationName = "underlayerOpacityChange";

    setTimeout(() => {sendData("http://localhost:3000/101_susov_newDesign/contactme.php", formDatatoSend)
      .then(() => {
        closeWindow(".loading")
        openWindow(".form-feedback-window")
        form.reset();
      })
      .catch((err) => {
        console.log(err)
        closeWindow(".loading")
        openWindow(".form-feedback-window-declined")
      })}, 1500);
  };
};

const sendData = async (url, data) => {
  const response = await fetch (url, {
    method: "POST",
    body: data
  })

  if (!response.ok) {
    throw new Error (`Ошибка по адресу ${url}, статус ошибки ${response}`)
  };

  return await response;
};

function formValidate() {
  let error = 0;

  formRemoveError();

  let allInputs = document.querySelectorAll("._req");

  for (let i = 0; i < allInputs.length; i++) {
    let input = allInputs[i];
    
    if (input.value === '') {
      formAddError(input);
      error++;
    } else if (input.classList.contains("_email")) {
      if (!emailTest(input)) {
        let insert = document.createElement("p");
        insert.className = "alert";
        insert.innerHTML = "Введите корректный email адрес";
      
        input.parentNode.before(insert);

        error++;
      };
    };
  };

  if (document.querySelector(".phone").value !== '' && document.querySelector(".phone").value.length < 18) {
    let insert = document.createElement("p");
    insert.className = "alert";
    insert.innerHTML = "+7 (9XX) XXX-XX-XX или 8 (9XX) XXX-XX-XX";

    let inputPhone = document.querySelector(".phone")
  
    inputPhone.parentNode.before(insert);

    error++;
  };

  function formAddError(input) {
    let insert = document.createElement("p");
    insert.className = "alert";
    insert.innerHTML = "Заполните обязательное поле";
  
    input.parentNode.before(insert);
  };

  function formRemoveError() {
    let arrAlertInputs = document.querySelectorAll('.alert');
    if (arrAlertInputs != null) arrAlertInputs.forEach(element => element.remove());
  };

  function emailTest(input) {
    return /^[\w-\. ]+@[\w-]+\.[a-zA-Z]{2,4}$/i.test(input.value);
  };

  return error;
};

// Mask for phone number
let phoneInputs = document.querySelectorAll('.phone');

let getInputNumbersValue = function (input) {
  // Return stripped input value — just numbers
  return input.value.replace(/\D/g, '');
};

let onPhonePaste = function (e) {
  let input = e.target,
    inputNumbersValue = getInputNumbersValue(input);
  let pasted = e.clipboardData || window.clipboardData;
  if (pasted) {
    let pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
      // formatting will be in onPhoneInput handler
      input.value = inputNumbersValue;
      return;
    };
  };
};

let onPhoneInput = function (e) {
  let input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    selectionStart = input.selectionStart,
    formattedInputValue = "";

  if (!inputNumbersValue) {
    return input.value = "";
  };

  if (input.value.length != selectionStart) {
    // Editing in the middle of input, not last symbol
    if (e.data && /\D/g.test(e.data)) {
      // Attempt to input non-numeric symbol
      input.value = inputNumbersValue;
    };
    return;
  };

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = input.value = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    };
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    };
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    };
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    };
  };
  input.value = formattedInputValue;
};

let onPhoneKeyDown = function (e) {
  // Clear input after remove last symbol
  let inputValue = e.target.value.replace(/\D/g, '');
  if (e.keyCode == 8 && inputValue.length == 1) {
    e.target.value = "";
  };
};

for (let phoneInput of phoneInputs) {
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
};

// Button - checkbox dependency
const check_1 = document.querySelector('#agreement-checkbox');

const buttonActive = document.querySelector('.submit-button_active');
const buttonDisabled = document.querySelector('.submit-button_disabled');

buttonActive.style.display = "block";
buttonDisabled.style.display = "none";

check_1.addEventListener("click", displaySubmit);
  
function displaySubmit() {
  if (check_1.checked){
    buttonActive.style.display = "block";
    buttonDisabled.style.display = "none";
  } else {
    buttonActive.style.display = "none";
    buttonDisabled.style.display = "block";;
  };
};
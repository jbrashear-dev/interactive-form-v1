
const form = document.getElementById('baseForm');
const input = form.querySelector('input');
const title = document.getElementById('title');
const design = document.getElementById('design');
const color = document.getElementById('color');
const checkboxActivities = document.getElementById('checkboxActivities');
const activities = document.querySelectorAll("input[type='checkbox']");
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const name = document.getElementById('name');
const nameLabel = document.getElementById('nameLabel');
const basic = document.getElementById('basic');
const mailLabel = document.getElementById('mailLabel');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
let total = 0.00;
name.focus(); //set focus to text feild on page load

//insert text field if other is selected as job role
title.addEventListener("change", function() {
  if (title.selectedIndex === 5){
    let otherInput = document.createElement("INPUT");
    let mail = document.getElementById('mail');
    let basic = document.getElementById('basic');
    otherInput.setAttribute("type", "text");
    otherInput.setAttribute("name", "otherJobRole");
    otherInput.setAttribute("placeholder", "Your Job Role");
    otherInput.setAttribute("id", "otherInput");
    basic.insertBefore(otherInput, mail.nextSibling);
  }
  if (title.selectedIndex != 5 && document.contains(document.getElementById('otherInput'))){
    document.getElementById('otherInput').remove();
  }
});

//shirt color selection
color.style.display = "none";
//eventlsitener for shirt selection
design.addEventListener("change", function(){
//shirt selection for JS Puns
  if (design.selectedIndex === 1){
    color.style.display = 'block';
    color.selectedIndex = 0;
    for (let i = 0; i < color.length; i++){
      color[i].style.display = "block";
    }
    for(let i =3; i < color.length;i++){
      color[i].style.display = 'none';
      console.log(color[i]);
      }
    }
    //shirt selection for I heart JS
    if (design.selectedIndex === 2) {
      color.style.display = 'block';
      color.selectedIndex = 3;
      for (let i = 0; i < color.length; i++) {
        color[i].style.display = "block";
      }
      for(let i =0; i < 3;i++){
        color[i].style.display = 'none';
        console.log(color[i]);
        }
      }
    if (design.selectedIndex == 0) {
      color.style.display = "none";
    }
});

//activity selection

checkboxActivities.addEventListener("click",  (e) => {

  if (activities[1].checked) {
    document.getElementById("express").style.color = "red";
    activities[3].disabled = true}
  else {
    activities[3].disabled = false;
    document.getElementById("express").style.color = "#000";
  }

  if (activities[2].checked) {
    document.getElementById("node").style.color = "red";
    activities[4].disabled = true}
  else {
    activities[4].disabled = false;
    document.getElementById("node").style.color ="#000";
  }

  if (activities[3].checked) {
    document.getElementById("js-frameworks").style.color = "red";
    activities[1].disabled = true}
  else {
    activities[1].disabled = false;
    document.getElementById("js-frameworks").style.color = "#000";
  }

  if (activities[4].checked) {
    document.getElementById("js-libs").style.color = "red";
    activities[2].disabled = true}
  else {
    activities[2].disabled = false;
    document.getElementById("js-libs").style.color = "#000";
  }
//get number of boxes checked to calculate total
  let checkedboxes = (document.querySelectorAll('input[type="checkbox"]:checked').length);
  total = (checkedboxes * 100.00);
  if (activities[0].checked){
    total += 100;
  } else {
    total = (checkedboxes * 100.00);
  }

// add total line
  if (checkboxActivities.lastElementChild.id == "npm") {
    let label = document.createElement("label");

    checkboxActivities.appendChild(label);
    label.id = "total";
    label.textContent = "Total: $" + total +".00";
  } else {
    checkboxActivities.lastElementChild.textContent = "Total: $" + total + ".00";
  }

  if (checkedboxes == 0){
    document.getElementById('total').remove();
  }
});

if (payment.value == "select_method") {
  creditCard.style.display = 'inherit';
  paypal.style.display = 'none';
  bitcoin.style.display = 'none';
}

creditCard.style.display = 'none';
payment.addEventListener('change', () =>{
  if (payment.value == "select_method") {
    creditCard.style.display = 'none';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  }

  if (payment.value == 'credit card') {
    creditCard.style.display = 'inherit';
  } else {creditCard.style.display ='none'}

  if (payment.value =='paypal') {
    paypal.style.display = 'inherit';
  } else {paypal.style.display = 'none'}

  if (payment.value == 'bitcoin') {
    bitcoin.style.display = 'inherit';
  } else {bitcoin.style.display = 'none'}
});

//form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  title.selectedIndex = 0; //reset job title on submit
  //remove other text input if added
  if (document.getElementById('otherInput')){
    document.getElementById('otherInput').remove();
  }
  //validate name
  if (!/^[A-Za-z\s]+$/.test(name.value)){
    document.getElementById('name').focus();
    nameLabel.innerText = "Name: Is a required field";
    nameLabel.style.color = 'red';
    }
    //email validate on submit
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail.value)){
    mailLabel.innerText = 'Email: Please enter a valid email address....';
    document.getElementById('mail').focus();
  } else {
    mailLabel.innerText = 'Email:'
  }
  //validate activity checked
  if (document.querySelectorAll('input[type="checkbox"]:checked').length < 1){
    alert('You must select at least one activity');
  }
  //credit card payment validation
  if (payment.value == 'credit card'){
    let ccnum = document.getElementById('cc-num');
  if (isNaN(ccnum.value)){
    alert('Numbers only in this field please.')
  }
  if (ccnum.value.length<13 || ccnum.value.length>16 ){
    alert("Please enter valid credit card number 13 - 16 digits")
  }
  if (zip.value.length < 5) {
    alert('Please enter valid Zip code of 5 digits....')
  }
  if (cvv.value.length <= 2 || cvv.value.length > 4)
    alert('CVV must be 3 or 4 digits')
  }

  name.focus();
  name.value = "";
  mail.value ="";
  ccnum.value = "";
  zip.value = "";
  cvv.value = "";
  });

  basic.addEventListener('change', () =>{
    if (!/^[A-Za-z\s]+$/.test(name.value)) {
      nameLabel.innerText = 'Name: Valid characters are A-Z & a-z no numbers! ';
      nameLabel.style.color = 'red';
      document.getElementById('name').focus();
      }
    if (/^[A-Za-z\s]+$/.test(name.value)) {
      nameLabel.style.color = '#184f68';
      nameLabel.innerText = 'Name:';
      }


  });

document.getElementById('mail').addEventListener('change', () =>{
  if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail.value)){
    mailLabel.innerText = 'Email: Please enter a valid email address....';
    document.getElementById('mail').focus();
  } else {
    mailLabel.innerText = 'Email:'
  }
});

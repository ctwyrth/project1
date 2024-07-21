function generateCard() {
  const nameVal = document.getElementById("name").value;
  const nameValElement = document.getElementById("cardName");
  nameValElement.innerHTML = nameVal;

  const collegeVal = document.getElementById("collegeName").value;
  const collegeValElement =  document.getElementById("cardCollegeName");
  collegeValElement.innerHTML = collegeVal;

  const locationVal = document.getElementById("location").value;
  const locationValElement = document.getElementById("cardLocation");
  locationValElement.innerHTML = locationVal;

  document.getElementById("collegeCard").style.display = "block";
}

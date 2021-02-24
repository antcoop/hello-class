function additionalChanges() {
  console.log("Additional Changes, Yup!");
}

function moreChanges() {
  console.log("We Have more changes");  
  additionalChanges();
}

function init() {
  console.log("INIT!");
  moreChanges();
}

init();
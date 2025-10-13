//alert("Hello");//write a check function here...
//update: the check function should reveal the "removed" text input
//if the baggage is overweight
//and a button to remove some
//the remove function should update the weight
//and let the user know when ok to proceed

const checkWeight = () => {
  let weight = parseInt(document.getElementById("weight").value);

  if (weight > 15) {
    alert("Overweight baggage detected!");
    document.getElementById("removed").style.display = "block";
    document.getElementById("remB").style.display = "block";
  } else {
    return alert(
      "Checking Baggage weight: " +
        parseInt(document.getElementById("weight").value)
    );
  }
};

const removeWeight = () => {
  let weight = parseInt(document.getElementById("weight").value);
  let newWeight = weight - parseInt(document.getElementById("removed").value);

  console.log(newWeight);
  if (newWeight <= 15) {
    alert("Baggage weight accepted.");
    document.getElementById("removed").style.display = "none";
    document.getElementById("remB").style.display = "none";
    document.getElementById("weight").value = newWeight;
  } else {
    alert("Baggage is still overweight. Please remove more weight.");
  }
}
//call it from the page
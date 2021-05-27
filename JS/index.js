const inputs = document.querySelectorAll(".form-input");

inputs.forEach((input) => {
    input.addEventListener("focus", (event) => {
      const parent = event.target.parentElement;
      parent.classList.add("focused");
    });
  });
  
  inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      const parent = event.target.parentElement;
      if (!event.target.value) {
        parent.classList.remove("focused");
      }
    });
  });

const handleMessageCount = () => {

  var msg = document.getElementById("message").value;
  var msgCount = document.getElementById("message-count")
  var msgLength = msg.length;
  const maxLength = 1000;
  var charLeft = maxLength - msgLength;
  msgCount.innerText = charLeft;
  }
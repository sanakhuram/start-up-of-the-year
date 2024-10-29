document
  .getElementById("learnMoreBtn")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "green";
  });

document
  .getElementById("learnMoreBtn")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  if (name === "") {
    alert("Name cannot be empty!");
  } else {
    alert(`Hello, ${name}!`);
  }
});
document.getElementById("parent").addEventListener("click", function () {
  console.log("parent clicked - Bubbling");
});

document.getElementById("child").addEventListener("click", function (event) {
  console.log("child clicked");
   event.stopPropagation();
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("parent clicked - Capturing");
},true);


function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new DataTransfer().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func(...args);
    }
  };
}

window.addEventListener("scroll", throttle(function () {
  console.log("Scroll event triggered");
}, 500));


function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

document.getElementById("nameInput").addEventListener(
  "input",
  debounce(function () {
    console.log("Input event debounced");
  }, 300)
);

const customEvent = new CustomEvent("customAlert", {
  detail: { message: "Hello from custom event!" },
});

document
  .getElementById("triggerEventBtn")
  .addEventListener("click", function () {
    document.dispatchEvent(customEvent);
  });


document.addEventListener("customAlert", function (event) {
  alert(event.detail.message);
});
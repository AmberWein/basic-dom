function validate() {
  event.preventDefault(); // prevents form from refreshing the page

  // clear previous errors
  const errorsDiv = document.getElementById("errors");
  errorsDiv.innerHTML = "";

  // get values
  const name = document.getElementById("name").value.trim();
  const salary = Number(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value.trim();

  console.log({ name, salary, birthday, phone }); // debug values

  const errors = [];

  // validate input
  if (name.length <= 2) {
    errors.push("Name must be longer than 2 characters.");
  }

  if (isNaN(salary) || salary <= 10000 || salary >= 16000) {
    errors.push("Salary must be greater than 10,000 and less than 16,000.");
  }

  if (!birthday) {
    errors.push("Birthday cannot be empty.");
  }

  const phoneDigitsOnly = phone.replace(/\D/g, "");
  if (phoneDigitsOnly.length !== 10) {
    errors.push("Phone must be exactly 10 digits.");
  }

  // show errors or success
  if (errors.length > 0) {
    errors.forEach((err) => {
      const p = document.createElement("p");
      p.style.color = "red";
      p.textContent = err;
      errorsDiv.appendChild(p);
    });
  } else {
    errorsDiv.style.color = "green";
    errorsDiv.textContent = "Form submitted successfully!";
  }
}

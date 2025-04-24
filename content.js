// Q1: Email Checkbox (optional)
document.querySelector('div[role="checkbox"]')?.click();

// Q2: Email textbox
const emailTextbox = document.querySelectorAll('input[type="text"][jsname="YPqjbf"]')[0];
if (emailTextbox) {
  emailTextbox.value = "dabbirukashyap@gmail.com";
  emailTextbox.dispatchEvent(new Event('input', { bubbles: true }));
}

// Q3: Trainer Name textbox
const trainerNameTextbox = document.querySelectorAll('input[type="text"][jsname="YPqjbf"]')[1];
if (trainerNameTextbox) {
  trainerNameTextbox.value = "Raghavendra";
  trainerNameTextbox.dispatchEvent(new Event('input', { bubbles: true }));
}

// Q4–Q6: Radio buttons (Yes)
const yesRadios = document.querySelectorAll('div[role="radio"][aria-label="Yes"]');
if (yesRadios.length >= 3) {
  yesRadios[0]?.click();
  yesRadios[1]?.click();
  yesRadios[2]?.click();
}

// Q7: Rate Instructor
document.querySelector('div[role="radio"][aria-label="Good"]')?.click();

// Q8: Overall experience
document.querySelectorAll('div[role="radio"][aria-label="Good"]')[1]?.click();

// Q9: Course material
document.querySelectorAll('div[role="radio"][aria-label="Good"]')[2]?.click();

// Q10: Feedback
const feedbackTextarea = document.querySelector('textarea[jsname="YPqjbf"]');
if (feedbackTextarea) {
  feedbackTextarea.value = "None";
  feedbackTextarea.dispatchEvent(new Event('input', { bubbles: true }));
}

// Q11: Recommend on scale of 1–10 (choose 9)
document.querySelector('div[role="radio"][aria-label="9"]')?.click();

// Q12–Q14: Excellent
const excellentRadios = document.querySelectorAll('div[role="radio"][aria-label="Excellent"]');
if (excellentRadios.length >= 6) {
  excellentRadios[3]?.click();
  excellentRadios[4]?.click();
  excellentRadios[5]?.click();
}

// Q15: Submit the form after a short delay
setTimeout(() => {
  const submitButton = document.querySelector('div[role="button"][aria-label^="Submit"]');
  submitButton?.scrollIntoView({ behavior: "smooth", block: "center" });
  submitButton?.click();
}, 1000); // 1 second delay to allow previous events to register

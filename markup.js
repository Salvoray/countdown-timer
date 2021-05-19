const subTimerValue = (selector, { days, hours, mins, secs }) => {
  const daysRef = document.querySelector(`#${selector} [data-value = days]`);
  const hoursRef = document.querySelector(`#${selector} [data-value = hours]`);
  const minsRef = document.querySelector(`#${selector} [data-value = mins]`);
  const secsRef = document.querySelector(`#${selector} [data-value = secs]`);
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
};

const makeMarkup = (selector) => {
  const markup = `
  <div class="timer" id="${selector}">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div>
  `;
  const timerContainerRef = document.querySelector(".timer-container");
  timerContainerRef.insertAdjacentHTML("beforeend", markup);
};

export { subTimerValue, makeMarkup };

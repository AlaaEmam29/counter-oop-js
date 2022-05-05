export class Counter {
  constructor(counter, value) {
    this.value = value;
    this.counter = counter;
    this.valueCounter = counter.querySelector("span");
    this.valueCounter.innerHTML = this.value;
    this.incrementBtn = counter.querySelector("#increase");
    this.resetBtn = counter.querySelector("#reset");
    this.decreaseBtn = counter.querySelector("#decrease");
    this.incrementBtn.addEventListener("click", () => {
      this.increment();
    });
    this.resetBtn.addEventListener("click", () => {
      this.reset();
    });
    this.decreaseBtn.addEventListener("click", () => {
      this.decrement();
    });
  }
  increment() {
    this.value++;
    this.valueCounter.innerHTML = this.value;
  }
  decrement() {
    this.value--;
    this.valueCounter.innerHTML = this.value;
  }
  reset() {
    this.value = 0;
    this.valueCounter.innerHTML = this.value;
  }
}

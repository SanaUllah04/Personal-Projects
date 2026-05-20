let count = 0;

function render() {
  console.log("Count:", count);
}

function setCount(newValue) {
  count = newValue;
  render();
}

// initial render
render();

// simulate button click
setCount(count + 1);
setCount(count + 1);
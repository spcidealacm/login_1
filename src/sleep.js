function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < delay) {
    continue;
  }
}

// sleep(5000)

window.onload = () => {
  // setTimeout(() => {
  //   sleep(2000)
  // }, 1000)
}
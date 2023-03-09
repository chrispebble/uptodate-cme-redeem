const goals = document.querySelectorAll(".cme-select");

function randInt(max) {
  return Math.floor(Math.random() * max);
}

goals.forEach((goal) => {
    checkboxes = goal.querySelectorAll("input[type=checkbox]")
    sel = checkboxes[randInt(checkboxes.length)]
    sel.click()
});

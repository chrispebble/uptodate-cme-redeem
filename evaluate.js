const radios = document.querySelectorAll("input[type=radio]");
const selects = document.querySelectorAll("select");

radiosToChoose = ["Agree", "No", "Sometimes"]
radios.forEach((radio) => {
    if (radiosToChoose.includes(radio.value)){
        radio.click()
    }
});

optionsToChoose = [ "Agree",
                    "For about 25% of the patients I see",
                    "Physician",
                    "Primary Care" ]
selects.forEach((select) => {
    select.click()
    options = select.querySelectorAll("option")
    options.forEach((option) => {
       if (optionsToChoose.includes(option.value)){
           select.value = option.value
       } 
    });
});

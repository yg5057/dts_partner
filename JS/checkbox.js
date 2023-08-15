const toggleTextbox = (checkbox, textboxId) => {
  const textbox_elem = document.getElementById(textboxId);
  textbox_elem.disabled = !checkbox.checked;

  if (!textbox_elem.disabled) {
      textbox_elem.focus();
  } else {
      textbox_elem.value = '';
  }
};

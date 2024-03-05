function toggleCheckbox(checkbox) {
  // uncheck last checked item if the third is checked
  if (checkbox.id === "goodCheckbox" && checkbox.checked) {
    let previousCheckbox = document.querySelector(
      'input[type="checkbox"]:checked'
      //   Line 5 behaves like Css: double dots and checked referece to the last checked item
    );

    if (previousCheckbox && previousCheckbox !== checkbox) {
      // zuvor angehaktes Checkbox-Element vorhanden ist (previousCheckbox &&), und ob dieses Element nicht dasselbe ist wie das aktuelle Checkbox-Element (previousCheckbox !== checkbox).
      previousCheckbox.checked = false;
    }
  }
  // Prüfen, ob mehr als eine Checkbox angehakt ist
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length > 1) {
    // Die zuletzt angehakte Checkbox deaktivieren
    checkbox.checked = false;
  }
}

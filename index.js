// Function to format selected text
function formatText(command, value = null) {
  document.execCommand(command, false, value);
}

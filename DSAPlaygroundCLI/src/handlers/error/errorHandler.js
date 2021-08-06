//error handler in case of any bad user input
function error(message, includeHelpCommand = false) {
  console.error(`Error: ${message}`);
  if (includeHelpCommand) {
    console.log("");
    helpCommands();
  }
}

module.exports = { error };

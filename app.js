function appendCharacter(character) {
    document.getElementById('display').value += character;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLastCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
  }
  
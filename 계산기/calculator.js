  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
    bufferData = '';
  }

  function calculateResult() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
      bufferData = document.getElementById('display').value;
    } catch (error) {
      document.getElementById('display').value = 'Error';
      bufferData = '';
    }
  }

  function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }

  document.querySelector('.numpad').addEventListener('mousedown', function (e) {
    console.log(e.target.tagName + e.target.innerText);
    switch (e.target.innerText) {
      case 'AC':
        clearDisplay();
        break;
      case '=':
        calculateResult();
        break;
      default:
        if (!(bufferData === '' && e.target.innerText === '0')) {
          if (isOperator(e.target.innerText)) {
            // 이전 값이 연산자일 경우에만 현재 연산자 추가
            if (isOperator(bufferData.slice(-1))) {
              bufferData = bufferData.slice(0, -1) + e.target.innerText;
            } else {
              bufferData += e.target.innerText;
            }
          } else {
            bufferData += '' + e.target.innerText;
          }
        }
        document.getElementById('display').value = bufferData;
        break;
    }
  });
  


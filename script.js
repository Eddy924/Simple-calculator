let output = ""


document.getElementById('clearAll').
  addEventListener('click', (event) => {
    output = ""
    updateOutput("|")
  })

document.getElementById(`multiply`)
  .addEventListener('click', (event) => {
    output += '*'
    updateOutput(output)
  })

document.getElementById(`divide`)
  .addEventListener('click', (event) => {
    output += '/'
    updateOutput(output)
  })

document.getElementById(`plus`)
  .addEventListener('click', (event) => {
    output += '+'
    updateOutput(output)
  })

document.getElementById(`minus`)
  .addEventListener('click', (event) => {
    output += '-'
    updateOutput(output)
  })

document.getElementById(`equal`)
  .addEventListener('click', (event) => {

    output = eval(output)
    updateOutput(output)
  })

for (let i = 0; i < 10; i++) {
  addListener(i)
}

function addListener(num) {
  document.getElementById(`num${num}`).addEventListener('click', (event) => {
    output += num
    updateOutput(output)
  })
}

document.getElementById(`decimal`)
  .addEventListener('click', (event) => {
    
    output += '.'
    updateOutput(output)
  })


function updateOutput(newValue) {
  let output = document.getElementById("output")
  output.innerHTML = newValue;
}

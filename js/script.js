//common function
function getInputValue(field) {
    const strValue = document.getElementById(field)
    const getValue = parseFloat(strValue.value)
    return getValue;
}
//input error functio
function inputError(error) {
    const Warning = document.getElementById('Warning')
    Warning.style.display = error
}
// balance error function
function balanceError(error) {
    const balanceWarning = document.getElementById('balance-Warning')
    balanceWarning.style.display = error
}
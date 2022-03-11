const printButton = document.getElementById("print-button");
printButton.addEventListener('click', () => {
    const valueA = document.querySelector('input[name="a"]:checked').value;
    const valueB = document.querySelector('input[name="b"]:checked').value;
    const printText = document.getElementById("print-text");
    printText.textContent = parseInt(valueA) * parseInt(valueB);
    window.print();
})
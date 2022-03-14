const printButton = document.getElementById("print-button");
printButton.addEventListener('click', () => {
    const domA = document.querySelector('input[name="a"]:checked');
    const domB = document.querySelector('input[name="b"]:checked');
    const valueA = domA.value;
    const valueB = domB.value;
    const optionA = domA.nextElementSibling.innerHTML;
    const optionB = domB.nextElementSibling.innerHTML;
    const printText1 = document.getElementById("print-text-1");
    const printText2 = document.getElementById("print-text-2");
    const printText3 = document.getElementById("print-text-3");
    const result = Math.ceil( (parseFloat(valueA) * parseFloat(valueB) / 10) ).toString();

    printText1.innerHTML = optionA;
    printText2.innerHTML = optionB;
    printText3.innerHTML = `${result[0]}.${result[1]}%`;
    window.print();
})
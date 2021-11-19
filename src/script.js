function tax() {
    let incomeElement = document.getElementById('income');
    let expenseElement = document.getElementById('expense');
    let incomeSecondElement = document.getElementById('incomeSecond');
    let expenseSecondElement = document.getElementById('expenseSecond');
    let valueTaxElement = document.getElementsByClassName('valueTax')[0];
    let valueProfitElement = document.getElementsByClassName('valueProfit')[0];
    let taxButton = document.getElementsByClassName('tax btn')[0];
    let profitButton = document.getElementsByClassName('Profit btn')[0];

    taxButton.addEventListener('click', calculateTax);
    profitButton.addEventListener('click', calculateProfit);

    function calculateTax() {

        let income = Number(incomeElement.value);
        let secondIncome = Number(incomeSecondElement.value);
        let expense = Number(expenseElement.value);
        let secondExpense = Number(expenseSecondElement.value);

        if (income == '' || secondIncome == '' || expense == '' || secondExpense == '') {
            return alert('All fields are required.')
        }

        if (income < 0 || secondIncome < 0 || expense < 0 || secondExpense < 0) {
            return alert('Values should be above zero.');
        }

        let taxResult = (income + secondIncome - expense - secondExpense) * 0.2;
        valueTaxElement.textContent = taxResult + 'лв';
    }


    function calculateProfit() {
        let income = Number(incomeElement.value);
        let secondIncome = Number(incomeSecondElement.value);
        let expense = Number(expenseElement.value);
        let secondExpense = Number(expenseSecondElement.value);

        if (income == '' || secondIncome == '' || expense == '' || secondExpense == '') {
            return alert('All fields are required.')
        }

        if (income < 0 || secondIncome < 0 || expense < 0 || secondExpense < 0) {
            return alert('Values should be above zero.');
        }

        let taxResult = (income + secondIncome - expense - secondExpense) * 0.2;
        let profitResult = (income + secondIncome - expense - secondExpense) - taxResult;
        valueProfitElement.textContent = profitResult + 'лв';

    }
}


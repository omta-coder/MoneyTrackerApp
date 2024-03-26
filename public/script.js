let expenses =[]
let totalAmount = 0;
const categorySelect = document.getElementById('category_select')
const amountInput = document.getElementById('amount_input')
const InfoInput = document.getElementById('info')
const dateInput = document.getElementById('date_input')
const addBtn = document.getElementById('add_btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click',function(){
    const category=categorySelect.value;
    const info=InfoInput.value;
    const amount =Number(amountInput.value);
    const date = dateInput.value;

    if(category ===''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount<=0){
        alert('please enter a valid amount');
        return;
    }
    if(info ===''){
        alert('please enter a valid amount info');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
})
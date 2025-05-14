// Default login credentials
const defaultID = "admin";
const defaultPassword = "12345";

const loginContainer = document.getElementById("login-container");
const dashboardContainer = document.getElementById("dashboard-container");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");

const loginIDInput = document.getElementById("login-id");
const loginPasswordInput = document.getElementById("login-password");

const expenseList = document.getElementById("expense-list");
const totalExpense = document.getElementById("total-expense");
const weeklyExpense = document.getElementById("weekly-expense");
const categorySummary = document.getElementById("category-summary");

let expenses = [];

loginButton.addEventListener("click", () => {
  const id = loginIDInput.value;
  const password = loginPasswordInput.value;
  if (id === defaultID && password === defaultPassword) {
    loginContainer.classList.add("hidden");
    dashboardContainer.classList.remove("hidden");
    updateDashboard();
  } else {
    alert("Invalid credentials");
  }
});

logoutButton.addEventListener("click", () => {
  loginContainer.classList.remove("hidden");
  dashboardContainer.classList.add("hidden");
  loginIDInput.value = "";
  loginPasswordInput.value = "";
});

document.getElementById("add-expense").addEventListener("click", () => {
  const desc = document.getElementById("expense-desc").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);
  const date = document.getElementById("expense-date").value;
  const category = document.getElementById("expense-category").value;

  if (!desc || isNaN(amount) || !date || !category) {
    alert("Please fill all fields correctly.");
    return;
  }

  const expense = { desc, amount, date, category };
  expenses.push(expense);
  updateDashboard();
});

document.getElementById("filter-button").addEventListener("click", () => {
  const date = document.getElementById("filter-date").value;
  const category = document.getElementById("filter-category").value;
  updateDashboard(date, category);
});

document.getElementById("export-csv").addEventListener("click", () => {
  let csvContent = "data:text/csv;charset=utf-8,Description,Amount,Date,Category\n";
  expenses.forEach(e => {
    csvContent += `${e.desc},${e.amount},${e.date},${e.category}\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "expenses.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

function updateDashboard(filterDate = "", filterCategory = "") {
  const filtered = expenses.filter(e => {
    return (!filterDate || e.date === filterDate) &&
           (!filterCategory || e.category === filterCategory);
  });

  expenseList.innerHTML = "";
  let total = 0;
  let weekTotal = 0;
  const categoryMap = {};

  const thisWeek = getThisWeekRange();

  filtered.forEach(e => {
    total += e.amount;

    if (new Date(e.date) >= thisWeek.start && new Date(e.date) <= thisWeek.end) {
      weekTotal += e.amount;
    }

    if (!categoryMap[e.category]) {
      categoryMap[e.category] = 0;
    }
    categoryMap[e.category] += e.amount;

    const li = document.createElement("li");
    li.className = "bg-white p-2 rounded shadow flex justify-between";
    li.innerHTML = `<span>${e.desc} (${e.category})</span><span>₹${e.amount}</span>`;
    expenseList.appendChild(li);
  });

  totalExpense.textContent = `₹${total}`;
  weeklyExpense.textContent = `₹${weekTotal}`;

  categorySummary.innerHTML = "";
  for (const cat in categoryMap) {
    const li = document.createElement("li");
    li.textContent = `${cat}: ₹${categoryMap[cat]}`;
    categorySummary.appendChild(li);
  }
}

function getThisWeekRange() {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - now.getDay());
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return { start, end };
}
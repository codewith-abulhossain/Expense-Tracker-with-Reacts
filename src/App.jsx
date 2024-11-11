import { useState } from "react";
import "./App.css";
import ExpenseList from "./component/ExpenseList";
import ExpenseFilter from "./component/ExpenseFilter";
import ExpenseForm from "./component/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "2024-11-10",
      description: "Coffee",
      category: "FoodBeverage2",
      amount: 3.5,
    },
    {
      id: 2,
      date: "2024-11-10",
      description: "Bus fare",
      category: "Transportation1",
      amount: 2.75,
    },
    {
      id: 3,
      date: "2024-11-10",
      description: "Lunch at cafe",
      category: "FoodBeverage",
      amount: 12.0,
    },
    {
      id: 4,
      date: "2024-11-10",
      description: "Notebook",
      category: "Stationery",
      amount: 5.25,
    },
    {
      id: 5,
      date: "2024-11-10",
      description: "Groceries",
      category: "Groceries",
      amount: 45.5,
    },
    {
      id: 6,
      date: "2024-11-10",
      description: "Gasoline",
      category: "Transportation",
      amount: 30.0,
    },
    {
      id: 7,
      date: "2024-11-10",
      description: "Movie ticket",
      category: "Entertainment",
      amount: 10.0,
    },
    {
      id: 8,
      date: "2024-11-10",
      description: "Dinner at restaurant",
      category: "FoodBeverage",
      amount: 25.0,
    },
    {
      id: 9,
      date: "2024-11-10",
      description: "Gym membership",
      category: "HealthFitness",
      amount: 40.0,
    },
    {
      id: 10,
      date: "2024-11-10",
      description: "Internet bill",
      category: "Utilities",
      amount: 60.0,
    },
  ]);

  const deleteItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filterItem = (cat) => {
    setExpenses(expenses.filter((expense) => expense.category == cat));
  };

  return (
    <div className="container-md mt-5">
      <ExpenseForm></ExpenseForm>
      <ExpenseFilter filterItem={filterItem}></ExpenseFilter>
      <ExpenseList items={expenses} deleteItem={deleteItem}></ExpenseList>
    </div>
  );
}

export default App;

const ExpenseForm = () => {
  return (
    <form action="" className="mb-5">
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input id="date" type="date" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" name="" className="form-select">
          <option value=""></option>
          <option value="Stationery">Stationery</option>
          <option value="Groceries">Groceries</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="FoodBeverage">FoodBeverage</option>
          <option value="HealthFitness">HealthFitness</option>
          <option value="Utilities">Utilities</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;

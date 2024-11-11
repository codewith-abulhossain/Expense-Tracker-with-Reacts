const ExpenseFilter = ({ filterItem }) => {
  return (
    <div>
      <select
        name=""
        id=""
        className="form-select mb-4"
        onChange={(event) => filterItem(event.target.value)}
      >
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
  );
};

export default ExpenseFilter;

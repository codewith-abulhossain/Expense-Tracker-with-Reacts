const ExpenseList = ({ items, deleteItem }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td className="fs-3 fw-bold">Total</td>
          <td className="fs-3 fw-bold">
            TK:{" "}
            {items.reduce((total, item) => total + item.amount, 0).toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;

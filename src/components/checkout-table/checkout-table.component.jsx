import "./checkout-table.styles.scss";

const CheckoutTable = ({ products }) => {
  console.log(products);
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={`item${product.id}`}>
              <td>
                <img src={product.imageUrl} />
              </td>
              <td>{product.name}</td>
              <td>
                <span>{"<"}</span>
                <span>{` ${product.quantity} `}</span>
                <span>{">"}</span>
              </td>
              <td>{product.price}</td>
              <td>
                <span>X</span>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={4}>Price total</th>
          <th>$200</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default CheckoutTable;

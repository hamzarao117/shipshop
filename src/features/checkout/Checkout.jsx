// // Test ID: IIDSAT

// import OrderItem from "./OrderItem";

// import {
//   calcMinutesLeft,
//   formatCurrency,
//   formatDate,
// } from "../../utils/helpers";

// function Checkout() {
//   // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
//   const {
//     id,
//     status,
//     priority,
//     priorityPrice,
//     orderPrice,
//     estimatedDelivery,
//     cart,
//   } = order;

//   const deliveryIn = calcMinutesLeft(estimatedDelivery);

//   return (
//     <div>
//       <div>
//         <h2>Order #{id} status</h2>

//         <div>
//           {priority && <span>Priority</span>}
//           <span>{status} order</span>
//         </div>
//       </div>

//       <div>
//         <p>
//           {deliveryIn >= 0
//             ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
//             : "Order should have arrived"}
//         </p>
//         <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
//       </div>

//       <ul>
//         {cart.map((item) => (
//           <OrderItem item={item} key={item.id} />
//         ))}
//       </ul>

//       <div>
//         <p>Price pizza: {formatCurrency(orderPrice)}</p>
//         {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
//         <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

function Checkout() {
  return <div></div>;
}

export default Checkout;

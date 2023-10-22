import "./App.css";
function RightSide({date, supplierName,hour,totalAmount}) {
    return (
      <div className="container">
        <table>
            <tbody>
            <tr>
                <td>Comercio</td>
                <td id="supplierName">{supplierName}</td>
            </tr>
            <tr>
                <td>Fecha</td>
                <td id="date">{date}</td>
            </tr>
            <tr>
                <td>Hora</td>
                <td id="hour">{hour}</td>
            </tr>
            <tr>
                <td>Total gastado</td>
                <td id="totalAmount">{totalAmount} €</td>
            </tr>
            </tbody>
        </table>
      </div>
    );
  }
export default RightSide;

import { useSelector } from "react-redux";

function BillDesk() {
    const login =useSelector(state=>state.login.loginUser);
    let total = login.cart.reduce((a, b) => {
        return a + (b.price * b.cartcount)
    }, 0).toFixed(2)
    let discount;
    var charges = 50;
    var totalitems = login.cart.length;
    if (total <= 500)
        discount = 0;
    else if (total > 500 && total <= 1000)
        discount = 5;
    else if (total > 1000 && total <= 2000)
        discount = 15;
    else if (total > 2000)
        discount = 20;
    return (
        <div className="card shadow bill p-3">
            <h1>BillDesk</h1>
            <table className="table">
                <thead>
                    <tr className="m-2">
                        <td>Items({totalitems})</td>
                        <td><i className="bi bi-currency-rupee p-0">{total}</i></td>
                    </tr>
                    <tr>
                        <td>Discount:</td>
                        <td className="text-success">{discount}%</td>
                    </tr>
                    <tr className="m-2">
                        <td>Delivery Charges:</td>
                        <td>{!(total >= 500) && <span className="bi bi-currency-rupee m-0 p-0">{charges}</span>}
                            {(total >= 500) && <><span className="m-0 text-success p-0 text-decoration-line-through bi bi-currency-rupee">{charges}</span>
                                <b className="m-1 text-success p-0"><i>Free</i></b></>}
                        </td>
                    </tr>
                    <tr className="m-2 border-secondary" style={{ borderTop: "dashed", marginTop: "20px" }}>
                        <th>Total Amount</th>
                        <th>{!(total >= 500) && <i className="bi bi-currency-rupee p-0">{((charges + Number(total))).toFixed(2)}</i>}
                            {(total >= 500) && <i className="bi bi-currency-rupee p-0">{(total * (100 - discount) / 100).toFixed(2)}</i>}</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}

export default BillDesk
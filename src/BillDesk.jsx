import { connect } from "react-redux"

function BillDesk(props) {
    let total = props.cart.reduce((a, b) => {
        return a + (b.price * b.cartcount)
    }, 0).toFixed(2)
    let discount;
    var charges = 50;
    var totalitems = props.cart.length;
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
            <table class="table">
                <thead>
                    <tr class="m-2">
                        <td>Items({totalitems})</td>
                        <td><i class="bi bi-currency-rupee p-0">{total}</i></td>
                    </tr>
                    <tr>
                        <td>Discount:</td>
                        <td class="text-success">{discount}%</td>
                    </tr>
                    <tr class="m-2">
                        <td>Delivery Charges:</td>
                        <td>{!(total >= 500) && <span class="bi bi-currency-rupee m-0 p-0">{charges}</span>}
                            {(total >= 500) && <><span class="m-0 text-success p-0 text-decoration-line-through bi bi-currency-rupee">{charges}</span>
                                <b class="m-1 text-success p-0"><i>Free</i></b></>}
                        </td>
                    </tr>
                    <tr class="m-2 border-secondary" style={{ borderTop: "dashed", marginTop: "20px" }}>
                        <th>Total Amount</th>
                        <th>{!(total >= 500) && <i class="bi bi-currency-rupee p-0">{((charges + Number(total))).toFixed(2)}</i>}
                            {(total >= 500) && <i class="bi bi-currency-rupee p-0">{(total * (100 - discount) / 100).toFixed(2)}</i>}</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}
function mapStateToProps(state) {
    return state.login
}
function mapDispatchToProps(dispatch) {
    return
}
export default connect(mapStateToProps, mapDispatchToProps)(BillDesk)
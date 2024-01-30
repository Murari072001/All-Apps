import { useNavigate } from "react-router"

function Header()
{
    const navi=useNavigate()
    return (
        <div className="text-end">
            <button className="btn" onClick={()=>{navi('/cart')}}><h1 className="bi bi-cart"></h1></button>
        </div>
    )
}
export default Header
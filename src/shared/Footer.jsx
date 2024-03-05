import React from "react";

function Footer() {
    return (
        <div className="bg-dark footer d-flex mt-5">
            <div className="text-white"><h1>The Best Shopping Experience is Here</h1></div>
            <div id="contact" className="text-white">
                <h4>Our Contacts</h4>
                <p>Email:<a href="mailto:info.edupoly@gmail.com">info.edupoly@gmail.com</a></p>
                <p>Customer Care: <a href="">Customercare.eduoly.com</a></p>

            </div>
            <div id="address" className="text-white">
                <p>+91 9561214818</p>
                <p>Address:372, HMT Hills Rd, Addagutta Society, Jal Vayu Vihar, Kukatpally, Hyderabad, Telangana 500085
                    (9:AM to 8:PM IST)</p>
            </div>
            <div id="follow" className="text-white">
                <h4>Follow Us On</h4>
                <button className="btn btn-dark bi bi-whatsapp"></button>
                <button className="btn btn-dark bi bi-instagram"></button>
                <button className="btn btn-dark bi bi-telegram"></button>
                <button className="btn btn-dark bi bi-twitter"></button>
                <button className="btn btn-dark bi bi-youtube"></button>
            </div>
        </div>
    )
}

export default Footer
import React from "react";

function FilterItems({HandleCheckbox})
{

    return (
        <div>
            <input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Asia" id="Asia" /><label for="Asia">Asia</label>
            <input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Europe" id="Europe" /><label for="Europe">Europe</label>
            <input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Africa" id="Africa" /><label for="Africa">Africa</label>
            <input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="North America" id="North America" /><label for="North America">North America</label>
            <input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="South America" id="South America" /><label for="South America">South America</label>
            <input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Australia" id="Australia" /><label for="Australia">Australia</label>
            <input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Antartica" id="Antartica" /><label for="Antartica">Antartica</label>
        </div>
    )
}

export default FilterItems
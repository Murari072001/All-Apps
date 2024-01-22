import React from "react";

function FilterItems({HandleCheckbox})
{

    return (
        <div className="container m-3">
            Continents
            <div><input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Asia" id="Asia" /><label for="Asia">Asia</label></div>
            <div><input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Europe" id="Europe" /><label for="Europe">Europe</label></div>
            <div><input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Africa" id="Africa" /><label for="Africa">Africa</label></div>
            <div><input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="North America" id="North America" /><label for="North America">North America</label></div>
            <div><input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="South America" id="South America" /><label for="South America">South America</label></div>
            <div><input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Australia" id="Australia" /><label for="Australia">Australia</label></div>
            <div><input type="checkbox" name="country" onChange={(e)=>{HandleCheckbox(e)}} value="Antarctica" id="Antarctica" /><label for="Antarctica">Antarctica</label></div>
        </div>
    )
}

export default FilterItems
import React from 'react'

import { Send} from "@material-ui/icons";
export default function ReturnedAsset() {


    return (

        <div className="content-wrapper bg-white">
          <div className="returnedAsset">
<h3 className="newUserTitle text-center text-white">Returning  Asset </h3>
            <form className="newUserForm">
            <div className="newUserItem">
                    <label>Asset Name Code</label>
                    <input type="text" value="CND7081XLG" name="assetType" id="assetType" required readOnly />
                </div>
                <div className="newUserItem">
                    <label>Asset Condition</label>
                    <select name="assetCondition" id="assetCondition" className="newUserSelect">
                        <option value="Good">Good</option>
                        <option value="Bad">Bad</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Asset Note</label>
                    
                    <textarea name="assetNote" id="assetNote" cols="30" rows="10" className="newUserSelect"></textarea>
                </div>
                 
                <button className="newUserButton bg-primary"><Send className="text-warning"/> Return</button>
                
            </form>


           </div>
            
        </div>
    )
}

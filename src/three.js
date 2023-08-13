import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
function Three(){
    return(
        <div>
            <div className='set'>
                <div>
                    <h4>samuel oladokun</h4>
                    {/* <p><span>gender</span><span>gender</span></p> */}
                    <div className='move gap'>
                        <p>gender:</p>
                        <p>male</p>
                    </div>
                    <div className="move gap ">
                        <p>location:</p>
                        <p>lagos,nigeria</p>
                    </div>
                    <div className="move gap">
                        <p> sew gender:</p>
                        <p>male</p>                    
                    </div>

                </div>
                    
                <div className="set">
                    <PhoneIcon/>
                    <div>
                        <p>phone number</p>
                        <p>+2347034796619</p>
                    </div>
                </div>
                    
                <div className="set">
                    <EmailIcon/>

                    <div>
                        <p>emai address</p>
                        <p>samueloladokun@gmail.com</p>
                    </div>
                </div>
            </div>


            <div className='set up-and-down'>
                <p className='bold'>transaction history</p>
                <p className='bold'>billing history</p>
                <p className='bold'>account address</p>
            </div>

            <div>
                <div>
                    <span>
                        {/* <span className='align'><SearchIcon/></span> */}
                        <input
                            type="search"
                            className="new"
                            placeholder="Search"
                        />
                    </span>
                    <span>
                        {/* <span><ExpandMoreIcon /></span> */}
                        <input
                            
                            type="search"
                            className="newer"
                            placeholder="Search"
                        ></input>
                    </span>
                </div>
                <table id="table">
                    <thead>
                        <tr id="clients-row">
                            <th>
                            <input type="checkBox"></input></th>
                            <th>transaction id
                                <ArrowDropDownIcon/>
                            {/* <select  
                            >
                            <option value="">All</option>
                            <option value="Approved">Approved</option>
                            <option value="Decline">Decline</option>
                            <option value="Pending Review">Pending Review</option>
                            </select> */}
                            </th>
                            <th>tranaction type <ArrowDropDownIcon/></th>
                            <th>date <ArrowDropDownIcon/></th>
                            <th>amount <ArrowDropDownIcon/></th>
                            <th>payment <ArrowDropDownIcon/></th>
                            <th>status <ArrowDropDownIcon/></th>
                        </tr>
                    </thead>
                    <tbody id="client-data">
                        <tr>
                            <td>
                                <input
                                type="checkbox"
                                disabled
                                className="clients-input"
                                ></input>
                            </td>
                            <td>#7084i</td>
                            <td>reieved token</td>
                            <td>12-jan-2021</td>
                            <td> 5 tokens</td>
                            <td>token wallet</td>
                            <td>succesul</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type="checkbox"
                                disabled
                                className="clients-input"
                                ></input>
                            </td>
                            <td>#7084i</td>
                            <td>reieved token</td>
                            <td>12-jan-2021</td>
                            <td> 5 tokens</td>
                            <td>token wallet</td>
                            <td>succesul</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type="checkbox"
                                disabled
                                className="clients-input"
                                ></input>
                            </td>
                            <td>#7084i</td>
                            <td>reieved token</td>
                            <td>12-jan-2021</td>
                            <td> 5 tokens</td>
                            <td>token wallet</td>
                            <td>succesul</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type="checkbox"
                                disabled
                                className="clients-input"
                                ></input>
                            </td>
                            <td>#7084i</td>
                            <td>reieved token</td>
                            <td>12-jan-2021</td>
                            <td> 5 tokens</td>
                            <td>token wallet</td>
                            <td>succesul</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Three
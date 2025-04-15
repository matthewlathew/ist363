function Ray( {setPage} ) {
    return (
        <div className='homeboxr'>
                <div className="big">
        
        <div className="name">
            <p className="bigtext">
                Ray Tomlinson
            </p>
        </div>

            <div className="pic">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg"/>
            </div>

                <div className="bio">
                        <p class="bigtext">
                            Age:
                        </p>
                    <p>
                        Deceased at 74
                    </p>
                        <p className="bigtext">
                            Known for:
                        </p>
                    <p>
                    Implemented the first email program on the ARPANET system. Previously, mail could be sent only to others who used the same computer. To achieve this, he used the @ sign to separate the user name from the name of their machine.
                    </p>
                </div>
        
                <button onClick={() => setPage('homepage')}>Return to Directory</button>    
        
    </div>
        </div>
    )
}

export default Ray;
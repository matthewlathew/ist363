function Elizabeth( {setPage} ) {
    return (
        <div className='homeboxe'>
                <div className="big">
        
        <div className="name">
            <p className="bigtext">
                Elizabeth J. Feinler
            </p>
        </div>

            <div className="pic">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg"/>
            </div>

                <div className="bio">
                        <p className="bigtext">
                            Age:
                        </p>
                    <p>
                        94
                    </p>
                        <p className="bigtext">
                            Known for:
                        </p>
                    <p>
                        Director of the Network Information Systems Center at the Stanford Research Institute. Her group operated the Network Information Center for the ARPANET as it evolved into the Defense Data Network and the Internet.                    </p>
                </div>
        
                <button onClick={() => setPage('homepage')}>Return to Directory</button>  
        
        
    </div>
        </div>
    )
}

export default Elizabeth;
function Tim( {setPage} ) {
    return (
        <div classname='homeboxt'>
                <div className="big">
        
        <div className="name">
            <p className="bigtext">
                Tim Berners Lee
            </p>
        </div>

            <div className="pic">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/LS3_4919_%28cropped%29.jpg"/>
            </div>

                <div className="bio">
                        <p className="bigtext">
                            Age:
                        </p>
                    <p>
                        69
                    </p>
                        <p className="bigtext">
                            Known for:
                        </p>
                    <p>
                    inventor of the World Wide Web, the HTML markup language, the URL system, and the HTTP With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
        
                <button onClick={() => setPage('homepage')}>Return to Directory</button>    
        
    </div>
        </div>
    )
}

export default Tim;
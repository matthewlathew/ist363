function Homepage ( {setPage} ) {
    return (
        <div className="homebody">
            <h2>
        Internet Pioneers Bios
    </h2>
    <div className="homebigbox">
        <div className="homeboxe" onClick={() => setPage('elizabeth')}>
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg"/>
            </div>
            <p>
                Elizabeth J. Feinler
            </p>
        </div>

        <div className="homeboxt" onClick={() => setPage('tim')}>
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/LS3_4919_%28cropped%29.jpg"/>
            </div>
            <p>
                Tim Berners Lee
            </p>
        </div>

        <div className="homeboxr" onClick={() => setPage('ray')}>
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg"/>
            </div>
            <p>
                Ray Tomlinson
            </p>
        </div>
    </div>
        </div>
    )
};

export default Homepage;
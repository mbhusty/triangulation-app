const Result = ({coordinates}) => {
    return (
        <div className="result-container">
            <div className="result">
                <h2>Result:</h2>
                <p>Latitude: {coordinates.latitude}</p>
                <p>Longitude: {coordinates.longitude}</p></div>
        </div>
    );
};

export default Result;

import React, {useState} from 'react';
import DistanceForm from './components/DistanceForm';
import Result from './components/Result';
import api from './api/triangulation';
import './App.css';

const App = () => {
    const [coordinates, setCoordinates] = useState(null);

    const handleSubmit = (distances) => {
        api.calculateCoordinates(distances)
            .then((coordinates) => {
                setCoordinates(coordinates);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Triangulation App</h1>
            <div className="container">
                <div className="content"><DistanceForm onSubmit={handleSubmit}/></div>
                <div className="content">{coordinates && <Result coordinates={coordinates}/>}</div>
            </div>
        </div>
    );
};

export default App;

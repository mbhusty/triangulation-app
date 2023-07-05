import React, {useState} from 'react';

const DistanceForm = ({onSubmit}) => {
    const [distances, setDistances] = useState({a: 1, b: 1, c: 1});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDistances((prevDistances) => ({
            ...prevDistances,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Проверка на пустые поля
        const inputErrors = {};
        if (distances.a === '') {
            inputErrors.a = 'Please enter a distance for point A.';
        }
        if (distances.b === '') {
            inputErrors.b = 'Please enter a distance for point B.';
        }
        if (distances.c === '') {
            inputErrors.c = 'Please enter a distance for point C.';
        }

        // Проверка на отрицательные числа или ноль
        if (distances.a <= 0) {
            inputErrors.a = 'Distance for point A must be greater than zero.';
        }
        if (distances.b <= 0) {
            inputErrors.b = 'Distance for point B must be greater than zero.';
        }
        if (distances.c <= 0) {
            inputErrors.c = 'Distance for point C must be greater than zero.';
        }
        setErrors(inputErrors);

        // Если нет ошибок, выполнить отправку формы
        if (Object.keys(inputErrors).length === 0) {
            onSubmit(distances);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label>
                Distance from point A: <a target="_blank"
                href="https://www.google.com/maps/place/50%C2%B006'39.2%22N+8%C2%B040'55.7%22E">50.110889, 8.682139</a>
                <input
                    type="number"
                    name="a"
                    min="1"
                    value={distances.a}
                    onChange={handleChange}
                />
                {errors.a && <span className="error">{errors.a}</span>}
            </label>
            <label>
                Distance from point B: <a target="_blank"
                href="https://www.google.com/maps/place/39%C2%B002'53.2%22N+77%C2%B028'22.1%22W">39.048111,
                -77.472806</a>
                <input
                    type="number"
                    name="b"
                    min="1"
                    value={distances.b}
                    onChange={handleChange}
                />
                {errors.b && <span className="error">{errors.b}</span>}
            </label>
            <label>
                Distance from point C: <a target="_blank"
                href="https://www.google.com/maps/place/45%C2%B050'56.8%22N+119%C2%B042'50.4%22W">45.849100,
                -119.714000</a>
                <input
                    type="number"
                    name="c"
                    min="1"
                    value={distances.c}
                    onChange={handleChange}
                />
                {errors.c && <span className="error">{errors.c}</span>}
            </label>
            <button type="submit">Calculate</button>
        </form>
    );
};

export default DistanceForm;

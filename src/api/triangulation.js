export const calculateCoordinates = (distances) => {
    return fetch('http://fb7920vh.bget.ru/api/calculate.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(distances),
    })
        .then((response) => response.json())
        .then((data) => data.coordinates);
};

export default {
    calculateCoordinates,
};

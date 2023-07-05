<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

// Координаты опорных точек
$points = [
    ['latitude' => 50.110889, 'longitude' => 8.682139],
    ['latitude' => 39.048111, 'longitude' => -77.472806],
    ['latitude' => 45.849100, 'longitude' => -119.714000],
];

// Расчет координат искомой точки
$coordinates = [
    'latitude' => ($points[0]['latitude'] * $data['a'] + $points[1]['latitude'] * $data['b'] + $points[2]['latitude'] * $data['c']) / ($data['a'] + $data['b'] + $data['c']),
    'longitude' => ($points[0]['longitude'] * $data['a'] + $points[1]['longitude'] * $data['b'] + $points[2]['longitude'] * $data['c']) / ($data['a'] + $data['b'] + $data['c']),
];

echo json_encode(['coordinates' => $coordinates]);

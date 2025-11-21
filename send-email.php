<?php
header('Content-Type: application/json');

// Permitir somente POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
    exit;
}

// Ler JSON do body
$data = json_decode(file_get_contents('php://input'), true);

// Validação inicial
if (!$data || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode(["error" => "Dados inválidos"]);
    exit;
}

$email = strtolower(trim($data['email']));

// -----------------------------
// CHECAR DUPLICIDADE
// -----------------------------
$storagePath = __DIR__ . '/storage/submissions.json';

// Se o arquivo não existir, cria
if (!file_exists($storagePath)) {
    file_put_contents($storagePath, json_encode([]));
}

// Lê registros existentes
$submissions = json_decode(file_get_contents($storagePath), true);

// Se e-mail já existir, bloquear
foreach ($submissions as $entry) {
    if ($entry['email'] === $email) {
        echo json_encode([
            "duplicate" => true,
            "message" => "Você já enviou uma solicitação anteriormente."
        ]);
        exit;
    }
}

// Adicionar novo envio ao histórico
$submissions[] = [
    "email" => $email,
    "name" => $data["name"],
    "company" => $data["company"],
    "phone" => $data["phone"],
    "problem" => $data["problem"],
    "timestamp" => time()
];

// Salvar no JSON
file_put_contents($storagePath, json_encode($submissions, JSON_PRETTY_PRINT));


// -----------------------------
// ENVIAR E-MAIL VIA RESEND
// -----------------------------
$apiKey = "re_GfiCxFVH_anEsQJwcRsAV1qL64dienRf9"; // <- coloque aqui sua API Key real

$payload = [
    "from" => "Agendamentos BAS3 <contato@somosbas3.com.br>",
    "to" => ["contato@somosbas3.com.br"],
    "subject" => "Novo Agendamento de Demonstração",
    "html" => "
        <h2>Novo Pedido de Demonstração</h2>
        <p><strong>Nome:</strong> {$data['name']}</p>
        <p><strong>Email:</strong> {$data['email']}</p>
        <p><strong>Empresa:</strong> {$data['company']}</p>
        <p><strong>Telefone:</strong> " . ($data['phone'] ?? "Não informado") . "</p>
        <p><strong>Problema/Necessidade:</strong> {$data['problem']}</p>
    "
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.resend.com/emails");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $apiKey",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Se falhou enviar e-mail
if ($httpCode !== 200 && $httpCode !== 202) {
    http_response_code(500);
    echo json_encode(["error" => "Falha ao enviar e-mail", "details" => $response]);
    exit;
}

// Sucesso
echo json_encode(["success" => true]);
exit;
?>

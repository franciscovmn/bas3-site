<?php
// send-email.php

// 1. Configuração de CORS (permite que seu React fale com este PHP)
header("Access-Control-Allow-Origin: *"); // Em produção, troque '*' por 'https://www.somosbas3.com.br'
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 2. Tratar requisições OPTIONS (pre-flight do navegador)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 3. Apenas aceita POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
    exit;
}

// --- CONFIGURAÇÃO ---
// COLOQUE SUA CHAVE DO RESEND AQUI DENTRO DAS ASPAS
$resendApiKey = "re_GfiCxFVH_anEsQJwcRsAV1qL64dienRf9"; 
$emailTo = "contato@somosbas3.com.br";
$emailFrom = "BAS3 Site <onboarding@resend.dev>"; // Ou seu domínio verificado no Resend
// ---------------------

// 4. Ler o JSON enviado pelo React
$input = file_get_contents("php://input");
$data = json_decode($input, true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$company = $data['company'] ?? '';
$phone = $data['phone'] ?? '';
$problem = $data['problem'] ?? '';

// 5. Validação simples
if (!$name || !$email || !$company || !$problem) {
    http_response_code(400);
    echo json_encode(["error" => "Dados incompletos"]);
    exit;
}

// 6. Montar o corpo do e-mail (HTML)
$htmlContent = "
<div style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <h2>Nova Solicitação de Demo - BAS3</h2>
    <hr>
    <p><strong>Nome:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Empresa:</strong> $company</p>
    <p><strong>Telefone:</strong> $phone</p>
    <br>
    <h3>Desafio:</h3>
    <p style='background: #f4f4f4; padding: 15px; border-radius: 5px;'>" . nl2br(htmlspecialchars($problem)) . "</p>
</div>
";

// 7. Enviar para o Resend usando cURL
$url = "https://api.resend.com/emails";
$postData = json_encode([
    "from" => $emailFrom,
    "to" => [$emailTo],
    "reply_to" => $email,
    "subject" => "Nova Demo Solicitada: $company",
    "html" => $htmlContent
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $resendApiKey",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// 8. Retornar resposta para o React
if ($httpCode >= 200 && $httpCode < 300 && !$curlError) {
    echo json_encode(["success" => true, "data" => json_decode($response)]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Falha ao enviar e-mail", "details" => $response, "curl_error" => $curlError]);
}
?>
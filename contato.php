<?php

/*
|--------------------------------------------------------------------------
| Configuração inicial
|--------------------------------------------------------------------------
*/

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit;
}

date_default_timezone_set("America/Sao_Paulo");

$destinoContato = "site@viavoz.com";
$destinoCompliance = "compliance@viavoz.com";

/*
|--------------------------------------------------------------------------
| Funções auxiliares
|--------------------------------------------------------------------------
*/

function limparCampo($valor): string
{
    return trim(strip_tags($valor ?? ""));
}

function limparCabecalho($valor): string
{
    return str_replace(
        ["\r", "\n", "%0a", "%0d"],
        "",
        $valor ?? ""
    );
}

function escaparHtml($valor): string
{
    return htmlspecialchars(
        $valor ?? "",
        ENT_QUOTES | ENT_SUBSTITUTE,
        "UTF-8"
    );
}

function valorOuPadrao(
    string $valor,
    string $padrao = "Não informado"
): string {
    return $valor !== ""
        ? escaparHtml($valor)
        : escaparHtml($padrao);
}

function formatarMensagem(string $mensagem): string
{
    return nl2br(escaparHtml($mensagem));
}

function formatarTelefoneLink(string $telefone): string
{
    return preg_replace("/[^0-9+]/", "", $telefone);
}

function codificarAssunto(string $assunto): string
{
    if (function_exists("mb_encode_mimeheader")) {
        return mb_encode_mimeheader(
            $assunto,
            "UTF-8",
            "B",
            "\r\n"
        );
    }

    return $assunto;
}

/*
|--------------------------------------------------------------------------
| Dados recebidos
|--------------------------------------------------------------------------
*/

$tipo = limparCampo($_POST["tipo"] ?? "contato");

$nome = limparCampo($_POST["nome"] ?? "");
$email = limparCampo($_POST["email"] ?? "");
$empresa = limparCampo($_POST["empresa"] ?? "");
$telefone = limparCampo($_POST["telefone"] ?? "");
$assunto = limparCampo($_POST["assunto"] ?? "");
$mensagem = limparCampo($_POST["mensagem"] ?? "");

$tipo = $tipo === "compliance"
    ? "compliance"
    : "contato";

$dataEnvio = date("d/m/Y");
$horaEnvio = date("H:i");

/*
|--------------------------------------------------------------------------
| Validação
|--------------------------------------------------------------------------
*/

if ($mensagem === "") {
    header(
        "Location: index.html?envio=erro&tipo=" .
        urlencode($tipo) .
        "#contato"
    );
    exit;
}

if ($assunto === "") {
    $assunto = $tipo === "compliance"
        ? "Comunicação recebida"
        : "Contato pelo site";
}

if ($tipo === "contato") {
    if ($nome === "" || $email === "") {
        header(
            "Location: index.html?envio=erro&tipo=contato#contato"
        );
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header(
            "Location: index.html?envio=email-invalido&tipo=contato#contato"
        );
        exit;
    }
}

/*
|--------------------------------------------------------------------------
| Preparação dos dados
|--------------------------------------------------------------------------
*/

$nomeHtml = valorOuPadrao($nome);
$emailHtml = valorOuPadrao($email);
$empresaHtml = valorOuPadrao(
    $empresa,
    $tipo === "compliance"
        ? "Não informado"
        : "Não informada"
);
$telefoneHtml = valorOuPadrao($telefone);
$assuntoHtml = escaparHtml($assunto);
$mensagemHtml = formatarMensagem($mensagem);

$emailValido = $email !== "" &&
    filter_var($email, FILTER_VALIDATE_EMAIL);

$telefoneLink = formatarTelefoneLink($telefone);

if ($emailValido) {
    $emailHtml = sprintf(
        '<a href="mailto:%s" style="color:#1f3f74;text-decoration:none;font-weight:700;">%s</a>',
        escaparHtml($email),
        escaparHtml($email)
    );
}

if ($telefone !== "" && $telefoneLink !== "") {
    $telefoneHtml = sprintf(
        '<a href="tel:%s" style="color:#1f3f74;text-decoration:none;font-weight:700;">%s</a>',
        escaparHtml($telefoneLink),
        escaparHtml($telefone)
    );
}

/*
|--------------------------------------------------------------------------
| Layout de contato
|--------------------------------------------------------------------------
*/

if ($tipo === "contato") {
    $destino = $destinoContato;

    $tituloEmail =
        "Contato pelo site - " .
        limparCabecalho($assunto);

    $nomeRemetente = "Site VIAVOZ";
    $emailRemetente = "site@viavoz.com";

    $corpo = '
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo contato pelo site</title>
</head>

<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;color:#26354d;">

<table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background:#eef2f7;"
>
    <tr>
        <td align="center" style="padding:32px 14px;">

            <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                    max-width:680px;
                    background:#ffffff;
                    border-radius:20px;
                    overflow:hidden;
                    box-shadow:0 18px 45px rgba(20,36,64,0.12);
                "
            >
                <tr>
                    <td
                        style="
                            background:#1f3f74;
                            padding:34px 38px;
                            color:#ffffff;
                        "
                    >
                        <div
                            style="
                                font-size:30px;
                                line-height:1;
                                font-weight:800;
                                letter-spacing:-1px;
                                margin-bottom:12px;
                            "
                        >
                            VIAVOZ
                        </div>

                        <div
                            style="
                                font-size:13px;
                                font-weight:700;
                                letter-spacing:1.5px;
                                text-transform:uppercase;
                                opacity:0.82;
                                margin-bottom:8px;
                            "
                        >
                            Formulário institucional
                        </div>

                        <h1
                            style="
                                margin:0;
                                font-size:25px;
                                line-height:1.25;
                                font-weight:700;
                            "
                        >
                            Novo contato recebido pelo site
                        </h1>
                    </td>
                </tr>

                <tr>
                    <td style="padding:36px 38px;">

                        <p
                            style="
                                margin:0 0 24px;
                                font-size:15px;
                                line-height:1.7;
                                color:#5b6474;
                            "
                        >
                            Uma nova mensagem foi enviada através do formulário
                            institucional da VIAVOZ.
                        </p>

                        <h2
                            style="
                                margin:0 0 16px;
                                color:#1f3f74;
                                font-size:15px;
                                letter-spacing:1px;
                                text-transform:uppercase;
                            "
                        >
                            Dados do contato
                        </h2>

                        <table
                            role="presentation"
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            style="
                                border-collapse:separate;
                                border-spacing:0;
                                border:1px solid #dfe7f2;
                                border-radius:12px;
                                overflow:hidden;
                            "
                        >
                            <tr>
                                <td style="' . estiloRotulo() . '">Nome</td>
                                <td style="' . estiloValor() . '">' . $nomeHtml . '</td>
                            </tr>

                            <tr>
                                <td style="' . estiloRotulo() . '">E-mail</td>
                                <td style="' . estiloValor() . '">' . $emailHtml . '</td>
                            </tr>

                            <tr>
                                <td style="' . estiloRotulo() . '">Empresa</td>
                                <td style="' . estiloValor() . '">' . $empresaHtml . '</td>
                            </tr>

                            <tr>
                                <td style="' . estiloRotulo() . '">Telefone</td>
                                <td style="' . estiloValor() . '">' . $telefoneHtml . '</td>
                            </tr>

                            <tr>
                                <td style="' . estiloRotulo(true) . '">Assunto</td>
                                <td style="' . estiloValor(true) . '">' . $assuntoHtml . '</td>
                            </tr>
                        </table>

                        <h2
                            style="
                                margin:30px 0 14px;
                                color:#1f3f74;
                                font-size:15px;
                                letter-spacing:1px;
                                text-transform:uppercase;
                            "
                        >
                            Mensagem
                        </h2>

                        <div
                            style="
                                padding:22px 24px;
                                background:#f6f8fb;
                                border-left:5px solid #1f3f74;
                                border-radius:10px;
                                font-size:15px;
                                line-height:1.8;
                                color:#26354d;
                                word-break:break-word;
                            "
                        >
                            ' . $mensagemHtml . '
                        </div>

                    </td>
                </tr>

                <tr>
                    <td
                        style="
                            padding:22px 38px;
                            background:#f5f7fa;
                            border-top:1px solid #e2e8f0;
                            color:#758095;
                            font-size:12px;
                            line-height:1.6;
                        "
                    >
                        <strong style="color:#1f3f74;">
                            VIAVOZ Projetos
                        </strong><br>

                        Mensagem enviada automaticamente pelo formulário do site.<br>

                        Recebida em ' . escaparHtml($dataEnvio) . ',
                        às ' . escaparHtml($horaEnvio) . '.
                    </td>
                </tr>
            </table>

        </td>
    </tr>
</table>

</body>
</html>';
}

/*
|--------------------------------------------------------------------------
| Layout de Compliance
|--------------------------------------------------------------------------
*/

else {
    $destino = $destinoCompliance;

    $tituloEmail =
        "CANAL DE COMPLIANCE - NOVA COMUNICAÇÃO";

    $nomeRemetente = "Canal de Compliance VIAVOZ";
    $emailRemetente = "compliance@viavoz.com";

    $corpo = '
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova comunicação de Compliance</title>
</head>

<body style="margin:0;padding:0;background:#eef1f5;font-family:Arial,Helvetica,sans-serif;color:#26354d;">

<table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background:#eef1f5;"
>
    <tr>
        <td align="center" style="padding:32px 14px;">

            <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                    max-width:680px;
                    background:#ffffff;
                    border-radius:20px;
                    overflow:hidden;
                    box-shadow:0 18px 45px rgba(20,36,64,0.12);
                "
            >
                <tr>
                    <td
                        style="
                            background:#24324a;
                            padding:34px 38px;
                            color:#ffffff;
                            border-top:6px solid #a9323a;
                        "
                    >
                        <div
                            style="
                                font-size:13px;
                                font-weight:700;
                                letter-spacing:1.6px;
                                text-transform:uppercase;
                                color:#e9c4c7;
                                margin-bottom:10px;
                            "
                        >
                            Comunicação confidencial
                        </div>

                        <h1
                            style="
                                margin:0;
                                font-size:26px;
                                line-height:1.25;
                                font-weight:700;
                            "
                        >
                            Canal de Compliance VIAVOZ
                        </h1>

                        <p
                            style="
                                margin:12px 0 0;
                                color:rgba(255,255,255,0.8);
                                font-size:14px;
                                line-height:1.6;
                            "
                        >
                            Uma nova comunicação foi registrada pelo canal institucional.
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding:36px 38px;">

                        <div
                            style="
                                margin-bottom:28px;
                                padding:18px 20px;
                                background:#fff7f7;
                                border:1px solid #efd4d6;
                                border-left:5px solid #a9323a;
                                border-radius:10px;
                                color:#6e2c32;
                                font-size:13px;
                                line-height:1.65;
                            "
                        >
                            <strong>
                                Tratamento restrito e confidencial
                            </strong><br>

                            Esta comunicação deve ser acessada exclusivamente
                            pelas pessoas autorizadas no Programa de Compliance
                            da VIAVOZ.
                        </div>

                        <h2
                            style="
                                margin:0 0 16px;
                                color:#24324a;
                                font-size:15px;
                                letter-spacing:1px;
                                text-transform:uppercase;
                            "
                        >
                            Identificação informada
                        </h2>

                        <table
                            role="presentation"
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            style="
                                border-collapse:separate;
                                border-spacing:0;
                                border:1px solid #dfe4eb;
                                border-radius:12px;
                                overflow:hidden;
                            "
                        >
                            <tr>
                                <td style="' . estiloRotuloCompliance() . '">Nome</td>
                                <td style="' . estiloValor() . '">' . $nomeHtml . '</td>
                            </tr>

                            <tr>
                                <td style="' . estiloRotuloCompliance() . '">E-mail</td>
                                <td style="' . estiloValor() . '">' . $emailHtml . '</td>
                            </tr>

                            <tr>
                                <td style="' . estiloRotuloCompliance() . '">Empresa ou vínculo</td>
                                <td style="' . estiloValor() . '">' . $empresaHtml . '</td>
                            </tr>

                            <tr>
                                <td style="' . estiloRotuloCompliance(true) . '">Telefone</td>
                                <td style="' . estiloValor(true) . '">' . $telefoneHtml . '</td>
                            </tr>
                        </table>

                        <h2
                            style="
                                margin:30px 0 14px;
                                color:#24324a;
                                font-size:15px;
                                letter-spacing:1px;
                                text-transform:uppercase;
                            "
                        >
                            Assunto
                        </h2>

                        <div
                            style="
                                padding:17px 20px;
                                background:#f5f7fa;
                                border-radius:10px;
                                color:#26354d;
                                font-size:15px;
                                line-height:1.6;
                                font-weight:700;
                            "
                        >
                            ' . $assuntoHtml . '
                        </div>

                        <h2
                            style="
                                margin:30px 0 14px;
                                color:#24324a;
                                font-size:15px;
                                letter-spacing:1px;
                                text-transform:uppercase;
                            "
                        >
                            Relato
                        </h2>

                        <div
                            style="
                                padding:24px;
                                background:#f6f8fb;
                                border-left:5px solid #a9323a;
                                border-radius:10px;
                                font-size:15px;
                                line-height:1.8;
                                color:#26354d;
                                word-break:break-word;
                            "
                        >
                            ' . $mensagemHtml . '
                        </div>

                    </td>
                </tr>

                <tr>
                    <td
                        style="
                            padding:22px 38px;
                            background:#f4f6f8;
                            border-top:1px solid #e1e6ec;
                            color:#758095;
                            font-size:12px;
                            line-height:1.6;
                        "
                    >
                        <strong style="color:#24324a;">
                            Canal de Compliance VIAVOZ
                        </strong><br>

                        Comunicação recebida em ' . escaparHtml($dataEnvio) . ',
                        às ' . escaparHtml($horaEnvio) . '.<br>

                        Nenhum endereço IP ou dado técnico de navegação foi
                        inserido neste e-mail.
                    </td>
                </tr>
            </table>

        </td>
    </tr>
</table>

</body>
</html>';
}

/*
|--------------------------------------------------------------------------
| Estilos auxiliares das tabelas
|--------------------------------------------------------------------------
*/

function estiloRotulo(bool $ultimo = false): string
{
    return
        "width:145px;" .
        "padding:15px 18px;" .
        "background:#f5f8fc;" .
        "color:#1f3f74;" .
        "font-size:13px;" .
        "font-weight:700;" .
        "vertical-align:top;" .
        ($ultimo ? "" : "border-bottom:1px solid #dfe7f2;");
}

function estiloRotuloCompliance(bool $ultimo = false): string
{
    return
        "width:145px;" .
        "padding:15px 18px;" .
        "background:#f5f6f8;" .
        "color:#3b4658;" .
        "font-size:13px;" .
        "font-weight:700;" .
        "vertical-align:top;" .
        ($ultimo ? "" : "border-bottom:1px solid #dfe4eb;");
}

function estiloValor(bool $ultimo = false): string
{
    return
        "padding:15px 18px;" .
        "background:#ffffff;" .
        "color:#26354d;" .
        "font-size:14px;" .
        "line-height:1.55;" .
        "vertical-align:top;" .
        "word-break:break-word;" .
        ($ultimo ? "" : "border-bottom:1px solid #dfe7f2;");
}

/*
|--------------------------------------------------------------------------
| Cabeçalhos do e-mail
|--------------------------------------------------------------------------
*/

$headers = [];

$headers[] =
    "From: " .
    limparCabecalho($nomeRemetente) .
    " <" .
    limparCabecalho($emailRemetente) .
    ">";

$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=UTF-8";
$headers[] = "Content-Transfer-Encoding: 8bit";
$headers[] = "X-Mailer: PHP/" . phpversion();

if ($emailValido) {
    $headers[] =
        "Reply-To: " .
        limparCabecalho($nome !== "" ? $nome : $email) .
        " <" .
        limparCabecalho($email) .
        ">";
}

/*
|--------------------------------------------------------------------------
| Envio
|--------------------------------------------------------------------------
*/

$enviado = mail(
    $destino,
    codificarAssunto($tituloEmail),
    $corpo,
    implode("\r\n", $headers)
);

/*
|--------------------------------------------------------------------------
| Redirecionamento
|--------------------------------------------------------------------------
*/

if ($enviado) {
    header(
        "Location: index.html?envio=sucesso&tipo=" .
        urlencode($tipo) .
        "#contato"
    );
    exit;
}

header(
    "Location: index.html?envio=erro&tipo=" .
    urlencode($tipo) .
    "#contato"
);
exit;
?>
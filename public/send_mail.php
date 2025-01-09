<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'paolotronciabmed@gmail.com';
    $subject = 'Nuovo messaggio dal form';
    $message = 'Nome: ' . $_POST['name'] . "\n";
    $message .= 'Email: ' . $_POST['email'] . "\n";
    $message .= 'Messaggio: ' . $_POST['message'] . "\n";
    $headers = 'From: noreply@example.com' . "\r\n" .
               'Reply-To: noreply@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo 'Mail inviata con successo';
    } else {
        http_response_code(500);
        echo 'Errore durante l\'invio della mail';
    }
}


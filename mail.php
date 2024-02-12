<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    // Другие поля формы

    $to = "kushnirartiom17.06@gmail.com";
    $subject = "Новая форма от $name";
    $message = "Имя: $name\nEmail: $email\n"; // Добавьте остальные поля

    // Отправка почты
    mail($to, $subject, $message);

    // Опционально: перенаправление на другую страницу после отправки формы
    header("Location: thank_you_page.html");
    exit();
}
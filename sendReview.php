<?php
	 $to = 'narek1110@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
     $subject = 'Отзыв'; //Загаловок сообщения
     $fio = htmlspecialchars($_POST["fio"]);
	 $review = htmlspecialchars($_POST["review"]);
	 $message = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$fio.'</p>
                        <p>Отзыв: '.$review.'</p>
                    </body>
                </html>';
     $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
     mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>
<?php
	 $to = 'narek1110@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
     $subject = 'Заказ'; //Загаловок сообщения
     $fio = htmlspecialchars($_POST["fio"]);
	 $phone = htmlspecialchars($_POST["phone"]);
	 $date = htmlspecialchars($_POST["date"]);
	 $additional = htmlspecialchars($_POST["additional"]);
	 $message = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$fio.'</p>
                        <p>Телефон: '.$phone.'</p>
						<p>Желанное время звонка: '.$date.'</p>  
						<p>Дополнительная информация: '.$additional.'</p>  
                    </body>
                </html>';
     $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
     mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>
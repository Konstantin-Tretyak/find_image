    ///Запрос на сервер
    var xhr = ajax('https://kde.link/test/get_field_size.php');

    ///Ожидание отклика от сервера
    xhr.onreadystatechange = function() 
    {
        if (xhr.readyState != 4) return;

        var size = JSON.parse(xhr.responseText);

        create_field(size['width'], size['height']);
    }

     ///Событие нажатие
    document.onclick = function(event)
    {
        var target = event.target;

        while (target != document)
        {
            if (target.className == "data_img")
            {
                if (order_images_clicked[target.id])
                    return;
                ///Увеличение количества попыток
                click_count++;
                ///Отображение количества попыток
                click_page_number.innerHTML = click_count;

                ///Изображение становится видимым
                target.style.opacity = "1.0";

                ///Проверка - был ли первый клик
                if (isNumeric(image_id_compare))
                {
                    ///Сравнение названий изображений первого и второго клика
                    if (order_images[image_id_compare] != order_images[target.id])
                    {
                        alert("Картинки не подходят");

                        ///Изображения исчезают из виду
                        var img = document.getElementsByClassName('data_img');
                        img[image_id_compare].style.opacity = "0.0";
                        img[target.id].style.opacity = "0.0";

                        ///Стирание id нажатия
                        order_images_clicked[image_id_compare] = undefined;
                        order_images_clicked[target.id] = undefined;

                        ///Стирание id старого сравнения
                        image_id_compare = undefined;

                        return;
                    }
                    else
                    {
                        //Увеличение и показ количества угадываний. Если кол-во угадываний и пар равны - то сообщение о победе
                        guessing_count++;
                        if (variations == guessing_count)
                            alert("Вы выиграли");
                            gues_page_number.innerHTML = guessing_count;
                    }
                    
                    ///Стирание id старого сравнения
                    image_id_compare = undefined;
                }
                else
                    ///Запоминание id нажатого изображения
                    image_id_compare = target.id;

                ///Запоминание того, что изображение уже было нажато
                order_images_clicked[target.id] = true;
            }

            ///Перейти к родительскому узлу(элементу)
            target = target.parentNode;
        }
    }
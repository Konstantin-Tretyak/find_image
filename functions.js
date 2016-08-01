///Функция для XMLHttpRequest
    function ajax(url)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.send(null);

        return xhr;
    }
    ///end Функция для XMLHttpRequest

    ///Создание поля игры
    function create_field(width, height)
    {
        var field_size = width * height;
        variations = field_size/2;
        create_image_order(variations);

        for (var i=0; i<height; i++)
        {
            var game_field_li = document.createElement('li');
            game_field.appendChild(game_field_li);

            var data_ul = document.createElement('ul');
            game_field_li.appendChild(data_ul);

            for (var j=0; j<width; j++)
            {
                var data_li = document.createElement('li');
                data_ul.appendChild(data_li);

                var data_img = document.createElement('img');
                data_li.appendChild(data_img);
                data_img.setAttribute('src', order_images[i*width + j]);
                
                setClass();
                setId();
            }
        }
        
        ///Задавание классов для элементов
        function setClass()
        {
            game_field_li.setAttribute('class', "game_field_li");
            data_ul.setAttribute('class', "data_ul");
            data_li.setAttribute('class', "data_li");
            data_img.setAttribute('class', "data_img");
        }

        ///установка id ля изображений
        function setId()
        {
            data_img.setAttribute('id', i*width + j);
        }
    }

    ///Создание массива изображений для поля
    function create_image_order(size)
    {
        if ( images.length < size)
            for(var i=0; i < Math.floor( size/images.length); i++)
                order_images = order_images.concat(images);

        if ( size === images.length )
            order_images = order_images.concat( images.slice(0, images.length) );
        else
            order_images = order_images.concat( images.slice(0, size%images.length) );
        
        order_images = order_images.concat(order_images);

        return order_images.sort(sortRandom);
    }

    ////Проверка на число
    function isNumeric(n)
    {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    ///Для случайной сортировки
    function sortRandom(a, b)
    {
        return Math.random() - 0.5;
    }


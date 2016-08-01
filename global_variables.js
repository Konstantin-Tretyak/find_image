    ///massive images with random order
    var order_images = [];
    ///clicked or no for every image
    var order_images_clicked = [];

    var clicked_flag = false;

    ///id переменной, которая будет использоваться для сравнения со вторым изображением
    var image_id_compare;

    ///Сколько раз угадал пользователь
    var guessing_count = 0;

    ///Колчество кликов
    var click_count = 0;

    //Переменная для 
    var variations = 0;

    ///Получение элемента, который будет отображать количество угадываний
    var gues_page_number = document.getElementsByClassName('guessing_count')[0];

    ///Получение элемента, который будет отображать количество попыток(кликов по не действительным картинкам)
    var click_page_number = document.getElementsByClassName('click_count')[0];

    ///Изображения
    var images = [
        "https://kde.link/test/0.png",
        "https://kde.link/test/1.png",
        "https://kde.link/test/2.png",
        "https://kde.link/test/3.png",
        "https://kde.link/test/4.png",
        "https://kde.link/test/5.png",
        "https://kde.link/test/6.png",
        "https://kde.link/test/7.png",
        "https://kde.link/test/8.png",
        "https://kde.link/test/9.png"
    ];

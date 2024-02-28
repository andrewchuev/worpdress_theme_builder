<?php
/**
 * Template name: Home
 */

get_header();
?>

    <main id="primary" class="site-main">

        <div class="container mx-auto px-4 py-8 bg-amber-300">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <h1 class="text-2xl font-bold mb-2">Заголовок первого уровня</h1>
                    <p class="text-base text-gray-700">
                        Здесь идет текстовое описание, которое детально описывает содержание вашего вебсайта или конкретного раздела. Это описание должно быть
                        информативным и привлекать внимание пользователя.
                    </p>
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <img src="https://ncube.local/wp-content/uploads/2024/02/waterfall-2.jpg" alt="Описание изображения" class="max-w-full h-auto rounded-lg shadow-lg">
                </div>
            </div>
        </div>


    </main><!-- #main -->

<?php

get_footer();

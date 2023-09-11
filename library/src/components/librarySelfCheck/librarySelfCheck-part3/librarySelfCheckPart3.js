console.log(`
Привет!) Я ещё доделываю работу и надеюсь на твоё понимание) На текщий момент готово: карусель в about.

      **ТЗ** 
https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part3.md

            **Форма для проверки** 
https://rolling-scopes-school.github.io/checklist/


**Ваша оценка - 25 балла** 

#### Отзыв по пунктам ТЗ:

#####**Не выполненные/не засчитанные пункты:**
======================================================
1) "Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления.

2) На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие.

3) Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца.

4) Во время анимаций высота блока Favorites не должна меняться.

5) ❗Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites.

6) В блоке Favorites все кнопки должны иметь имя Buy, а не Own.

7) Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой.

8) На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации.

9) То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации.

10) Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации.

11) Дизайн модального окна соответствует макету.

12) При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password.

13) При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER.

14) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).

15) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.

16) В данном случае, ограничения по полям - все поля должны быть не пустыми.

17) Пароль должен быть не короче 8 символов.

18) В поле E-mail должна быть валидация типа email.

19) Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя.

20) Иконка пользователя меняется на заглавные буквы имени.

21) Отображение страницы приходит в состояние после авторизации (этап 4).

22) Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа.

23) Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд.

24) Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются.

25) Дизайн модального окна соответствует макету.

26) При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password.

27) При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN.

28) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).

29) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.

30) Для авторизации все поля должны быть не пустыми.

31) Пароль должен быть не короче 8 символов.

32) Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN.

33) При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title).

34) Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой.

35) На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации.

36) То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна.

37) Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля.

38) ❗Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер.

39) Нажатие на кнопку My Profile открывает модальное окно MY PROFILE.

40) Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1.

41) Дизайн модального окна соответствует макету.

42) Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию.

43) Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16.

44) Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена.

45) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения).

46) При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается.

47) При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD.

48) При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле.

49) Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен

50) ❗Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще.

51) Дизайн модального окна соответствует макету.

52) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается.

53) Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми.

54) Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет.

55) Expiration code содержит 2 поля с ограничением в 2 цифры.

56) CVC должен содержать 3 цифры.

57) При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account.

#####**Выполненные пункты:**
=====================================================
1) Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания.

2) На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева.

3) Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная.

4) Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии.

5) На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5.

6) Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. 
`)
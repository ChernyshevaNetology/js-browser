const container = document.querySelector('.counters');


/**
 * Функция для создания разметки
 * счетчика - мы ж не будем в html 100 штук вставлть
 * js позволяет это сделать быстрее
 */
const renderCounterHtml = () => {
   const counter = document.createElement('div');
   counter.classList.add('counter');
   counter.textContent = '0';
   return counter;
}

/**
 *  рендерим на странице 100 счетчиков
 */
for (let i = 1; i < 100; i++) {
    container.appendChild(renderCounterHtml())
}

/**
 * Получаем все счетчики, именно после создания - если сделать это выше, будет ошибка
 * так как их еще не будет на странице
 */
const counters = document.querySelectorAll('.counter');


/**
 * Простейшая функция, которая увеличивает счетчик при клике на 1
 * в качестве аргумента принимает счетчик, на котором происходит клик
 */
const handleIncrementCounter = (cnt) => {
    /**
     * здесь пока нет замыкания и переменная
     * initialCount будет одна на все 100 счетчиков
     * нам надо это исправить и через замыкание сделать
     * чтобы на каждый счетчик создавалась сввоя переменная
     * и она бы сохранялась индивидуально для каждого счетчика
     * это классическпий пример функцию надо дописать
     */
    let initialCount = 0;
        ++initialCount;
        cnt.textContent = initialCount;
        console.log('initialCount', initialCount);
        console.log('cnt', cnt);
        return initialCount;

}

counters.forEach((cnt) => {
    /**
     * Здесь нужно создать инстанс функции и передать ее в каунтер, их может быть 1000, а функция одна на всех!
     */
    cnt.addEventListener('click', () => handleIncrementCounter(cnt));

    /**
     *  Если сейчас посмотришь в консоле, что происходит, то каунтер увеличивается
     *  на 1 и все, так и остается, так как после return функция забывает и обнуляет все переменные
     */


    /**
     *  идем циклом по всем счетчикам на странице
     *  и на каждый навешиываем через замыкание функцию по увеличению
     *  счетчика на 1
     */
});
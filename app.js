let optional = document.querySelectorAll('.user-optional')
let userResult = document.querySelector('.user-result_item')
let gptResult = document.querySelector('.gpt-result_item')
let result = document.querySelector('.result-text')

// Проходимся по всей выборке
for (let i = 0; i < optional.length; i++) {
    optional[i].addEventListener('click', ()=> {
        // При клике по любому из  optional[i] удаляем класс active у всех элементом
        for (let j = 0; j < optional.length; j++){
            optional[j].classList.remove('active')
        }
        // Добавляем класс active элементу по которому мы кликаем
        optional[i].classList.add('active')

        // Меняем userResult при клике по любой картинке 
        userResult.src = optional[i].src;
        
        // Получаем рандомное число от 0 до 3
        let randomNumber = Math.floor(Math.random() * 3);
        
        // Создаём ряд возможных значений GptResult
        let gptImages = ['./img/rock.png','./img/scissors.png','./img/paper.png'];

        // Меняем gptResult на рандомную картинку из ряда выше
        gptResult.src = gptImages[randomNumber]

        // Каждому элменту задаём значение в буквах
        let userValue = ['R', 'S', 'P'][i]

        // Каждому элменту задаём значение в буквах
        let gptValue = ['R', 'S', 'P'][randomNumber]

        console.log(userValue, gptValue);

        // Создаём объект в который пропишем всевозможные варианты событий
        let outComes = {
            RR: 'Ничья',
            RS: 'Пользователь',
            RP: 'GPT',

            SR: 'GPT',
            SS: 'Ничья',
            SP: 'Пользователь',

            PR: 'Пользователь',
            PS: 'GPT',
            PP: 'Ничья',
        }
        
        // Записываем значения и сопостовляем с outComes
        let outComeValue  = outComes[userValue + gptValue];
        console.log(outComeValue);

        console.log(result.innerHTML);
        result.innerHTML = outComeValue
    })
}

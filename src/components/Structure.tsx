const Structure = () => {
  return (
    <div className="h-full w-full bg-bg-4 text-black flex justify-center items-center py-16">
      <div className="w-[1200px] h-full">
        <div className="flex flex-row justify-between gap-x-10 my-4">
          <h1 className="block text-black font-black px-4 py-2 rounded-lg text-2xl">
            Структура веб-приложения{" "}
            <span className="bg-gradient-to-r from-[#20d0d9] to-[#ef6e28] bg-clip-text text-transparent">
              &quot;SoulFlare&quot;
            </span>
          </h1>
          <button className="block bg-primary text-white px-4 py-2 rounded-lg">
            Open in Figma
          </button>
        </div>
        <div className="flex flex-wrap w-full gap-4 mt-8">
          <div className="block px-8 py-6 bg-gradient-to-r from-[#d4eaf7] to-[#b6ccd8] to-80% rounded-lg flex-grow shadow-md">
            <h3 className="text-lg font-semibold text-silver mb-4">
              Главная страница
            </h3>
            <ul className="list-disc list-outside text-silver text-sm font-thin">
              <li>
                <h4>Компонент Приветствия:</h4>
                <ul className="list-none">
                  <li>
                    - Описание целей проекта &quot;SoulFlare&quot; и
                    приветственное сообщение.
                  </li>
                  <li> - Кнопка для регистрация и входа.</li>
                </ul>
              </li>
              <li>
                <h4>Компонент Список Тестирования:</h4>
                <ul className="list-none">
                  <li>- Краткое описание тестирования.</li>
                  <li>- Список доступных тестов.</li>
                  <li>- Кнопка для перехода к тесту.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="block bg-gradient-to-r from-[#d4eaf7] to-[#b6ccd8] to-80% rounded-lg flex-grow px-8 py-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-silver">
              Страница тестирования
            </h3>
            <ul className="list-disc list-outside text-silver text-sm">
              <li>
                <h4>Компонент начало тестирования:</h4>
                <ul className="list-none">
                  <li>- Описание теста с изображениями и кратким описанием.</li>
                  <li>
                    - Кнопка &quot;Начать тест&quot; для начало конкретного
                    теста.
                  </li>
                </ul>
              </li>
              <li>
                <h4>Компонент Процесса Тестирования:</h4>
                <ul className="list-none">
                  <li>
                    - Интерактивный интерфейс с вопросами и вариантами ответов.
                  </li>
                  <li>
                    - Полоса прогресса и кнопка &quot;Завершить тест&quot; после
                    последнего вопроса.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="block px-8 py-6 shadow-md bg-gradient-to-r from-[#d4eaf7] to-[#b6ccd8] to-80% rounded-lg flex-grow">
            <h3 className="text-lg font-semibold text-silver mb-4">
              Результат
            </h3>
            <ul className="list-disc list-outside text-silver text-sm">
              <li>
                <h4>Компонент Детального Анализа:</h4>
                <ul className="list-none">
                  <li>- Информация о каждом аспекте личности пользователя.</li>
                  <li>- Графики, диаграммы и текстовые пояснения.</li>
                </ul>
              </li>
              <li>
                <h4>Компонент Сохранения Результатов:</h4>
                <ul className="list-none">
                  <li>
                    - Опция сохранения результатов теста (Social Network).
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="block px-8 py-6 shadow-md bg-gradient-to-r from-[#d4eaf7] to-[#b6ccd8] to-80% rounded-lg flex-grow">
            <h3 className="text-lg font-semibold text-silver mb-4">
              Личный кабинет
            </h3>
            <ul className="list-disc list-outside text-silver text-sm">
              <li>
                <h4>Компонент Обзора Профиля:</h4>
                <ul className="list-none">
                  <li>- Обзор завершенных тестов.</li>
                  <li>- Опция редактирования личных данных и настроек.</li>
                </ul>
              </li>
              <li>
                <h4>Компонент Истории Результатов:</h4>
                <ul className="list-none">
                  <li>
                    - Подробная история прошлых результатов тестов с
                    возможностью просмотра и анализа.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="block px-8 py-6 shadow-md bg-gradient-to-r from-[#d4eaf7] to-[#b6ccd8] to-80% rounded-lg flex-grow">
            <h3 className="text-lg font-semibold text-silver mb-4">
              Аутентификация
            </h3>
            <ul className="list-disc list-outside text-silver text-sm">
              <li>
                <h4>Компонент Форм Входа и Регистрации:</h4>
                <ul className="list-none">
                  <li>
                    - Формы для входа пользователя и создания новой учетной
                    записи.
                  </li>
                  <li>
                    - Ссылки для восстановления пароля и дополнительных опций.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="block px-8 py-6 shadow-md bg-gradient-to-r from-[#d4eaf7] to-[#b6ccd8] to-80% rounded-lg flex-grow">
            <h3 className="text-lg font-semibold text-silver mb-4">
              Страница Связи
            </h3>
            <ul className="list-disc list-outside text-silver text-sm">
              <li>
                <h4>Компонент Формы Обратной Связи:</h4>
                <ul className="list-none">
                  <li>- Форма для отправки сообщений и вопросов.</li>
                  <li>- Контактная информация для оперативной поддержки.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="block px-8 py-6 shadow-md bg-gradient-to-r from-[#d4eaf7] to-[#b6ccd8] to-80% rounded-lg flex-grow">
            <h3 className="text-lg font-semibold text-silver mb-4">
              Политика Конфиденциальности
            </h3>
            <ul className="list-disc list-outside text-silver text-sm">
              <li>
                <h4>Компонент Текста Политики Конфиденциальности:</h4>
                <ul className="list-none">
                  <li>
                    - Подробная информация о том, как обрабатываются данные
                    пользователей.
                  </li>
                  <li>- Условия использования сервиса.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;

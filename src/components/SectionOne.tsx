import { FC } from "react";
import Image from "next/image";
import { GiGlassHeart } from "react-icons/gi";
import { PiGraphFill } from "react-icons/pi";
import { BsPersonBoundingBox } from "react-icons/bs";
const SectionOne = () => {
  return (
    <section className="flex justify-center items-center flex-col h-screen relative bg-bg-2 text-black">
      <div className="flex flex-col justify-center w-[1200px] h-full">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold">Описание проекта</h1>
          <div className="bg-bg-4 p-4 rounded-xl mt-6 shadow-primary">
            <p className="">
              <span className="text-xl font-black bg-gradient-to-r from-[#20d0d9] to-[#ef6e28] bg-clip-text text-transparent">
                &quot;SoulFlare&quot;
              </span>{" "}
              - это веб-приложение, направленное на помощь пользователям в
              исследовании себя, понимании своей личности и достижении
              личностного роста. &quot;SoulFlare&quot; будет предоставлять
              психологические тесты, анализ результатов, персонализированные
              рекомендации и создавать пространство для самопознания и развития.
            </p>
          </div>
        </div>
        <div className="mt-16 w-full">
          <h1 className="text-center text-3xl font-bold">Что мы предлагаем</h1>
          <div className="flex flex-row gap-[40px] w-full mt-8 relative">
            <div className="bg-bg-4 p-8 rounded-xl w-1/3 flex flex-col justify-start shadow-primary">
              <h3 className="text-lg font-semibold flex items-center">
                <GiGlassHeart className="mr-2 text-primary text-2xl" />
                Исследование души
              </h3>
              <p className="text-silver text-xs mt-2 font-thin">
                SoulFlare предоставляет вам доступ к разнообразным
                психологическим тестам, которые помогут вам углубиться в свою
                личность и открыть новые аспекты вашего &quot;Я&quot;. Мы
                предоставляем широкий каталог тестов, от личностных типов до
                анализа стресса и мотивации.
              </p>
            </div>
            <div className="relative bg-white rounded-xl w-1/3 flex flex-col justify-start after:bg-gradient-to-r after:from-[#20d0d9] after:to-[#ef6e28] after:blur-lg after:-z-10 z-10 after:absolute after:content-['*'] after:-inset-2  after:top-4 after:left-2 after:right-2 after:bottom-1">
              <div className="bg-bg-4 w-full h-full p-8 rounded-xl">
                <h3 className="text-lg font-semibold flex items-center">
                  <PiGraphFill className="mr-2 text-primary text-2xl" />
                  Результаты и советы
                </h3>
                <p className="text-silver text-xs mt-2">
                  После прохождения тестов вы получите подробные результаты и
                  персонализированные рекомендации, созданные на основе ваших
                  ответов. Эти советы помогут вам лучше понять себя и
                  разработать стратегии для улучшения качества жизни.
                </p>
              </div>
            </div>
            <div className="bg-bg-4 p-8 rounded-xl w-1/3 flex flex-col justify-start shadow-third">
              <h3 className="text-lg font-semibold flex items-center">
                <BsPersonBoundingBox className="mr-2 text-primary text-2xl" />
                Личный кабинет
              </h3>
              <p className="text-silver text-xs mt-2">
                Ваш личный кабинет позволит вам отслеживать ваш прогресс,
                сохранять результаты, создавать заметки и настраивать ваш
                профиль.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionOne;

import { FC } from "react";
import Section, { SectionVariants } from "../../components/UI/Section/Section";
import Select from "../../components/UI/Select/Select";
import { BsChevronCompactDown } from "react-icons/bs";

const HomePage: FC = () => {
  return (
    <section className="homePage">
      <section className="introductionSection">
        <div className="introductionText">
          <h2>Игровые задачи</h2>
          <p>
            Вас приветствует команда проекта "Игровые задачи". Добро пожаловать!
          </p>
        </div>
        <div className="iconWrapper">
          <BsChevronCompactDown size={70} className="movingArrow" />
        </div>
      </section>

      <div className="sectionWrapper">
        <Section title="Немного о проекте" variant={SectionVariants.twice}>
          <div className="text">
            Наш проект нацелен на создание{" "}
            <Select variant="underline">сборника</Select> задач для учеников 5-7
            классов. Мы хотим пополнить арсенал преподавателей простым для
            понимания, но, в то же время, хорошо проработанным задачником
          </div>

          <div className="text">
            Разумеется, что на этом поприще мы не первые. Многие авторитетные
            методисты и преподаватели выпусткают свои сборники, что ставит их на
            уровень выше. Хоть они уже и имеют обширную аудиторию, наши
            исследования говорят, что <Select>потребность</Select> у целевой
            аудитории <Select>есть</Select>, и мы всеми силами стремимся её
            удволетворить
          </div>
        </Section>
      </div>

      <div className="sectionWrapper single">
        <Section title="Амбиции" variant={SectionVariants.single}>
          <div>
            Мы упорно работаем над <Select>систематизацией</Select>,
            доступностью для детей и содержимым, чтобы дети легко могли понимать
            и усваивать материал
          </div>
        </Section>
      </div>
    </section>
  );
};

export default HomePage;

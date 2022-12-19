import { FC } from "react";
import Section from "../../components/UI/Section/Section";

const ContactPage: FC = () => {
  return (
    <section className="page contactPage">
      <Section
        sectionTitle="По вопросам сотрудничества"
        className="contactSection"
      >
        <div>
          <b>E-mail:</b> some_e_mail@noprod.com
        </div>
      </Section>

      <Section sectionTitle="Задать свой вопрос" className="contactSection">
        <div>
          <b>E-mail:</b> some_e_mail@noprod.com
        </div>
      </Section>

      <Section sectionTitle="Техническая поддержка" className="contactSection">
        <div>
          <b>E-mail:</b> 3str.webdev@gmail.com
        </div>
        <div>
          <b>Telegram:</b> @serg_3str
        </div>
      </Section>
    </section>
  );
};

export default ContactPage;

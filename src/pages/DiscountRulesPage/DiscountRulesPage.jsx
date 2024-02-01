import { SectionWrap } from "../../components/SharedLayout/SharedLayoutStyled";
import discount from "../../assets/discount.png";
import {
  DiscountDescription,
  DiscountDescriptionImg,
  DiscountDescriptionWrap,
  FaqAnswerText,
  FaqAnswerWrap,
  FaqItem,
  FaqList,
  FaqQuestionText,
} from "./DiscountRulesPageStyled";
import { useState } from "react";

const DiscountRulesPage = () => {
  const [answersVisible, setAnswersVisible] = useState({});

  const toggleAnswerVisibility = (number) => {
    setAnswersVisible((prevState) => ({
      ...prevState,
      [number]: !prevState[number],
    }));
  };

  return (
    <SectionWrap>
      <h4 style={{ fontSize: "var(--fs-md)" }}>Карта знижок</h4>
      <DiscountDescriptionWrap>
        <DiscountDescriptionImg src={discount} alt="discount" />
        <DiscountDescription>
          <h3>Картка для постійних клієнтів</h3>
          <p>
            Здійснюючи покупки в інтернет-магазині Smartstore.com.ua, Ви маєте
            можливість приєднатися до дисконтної програми й купувати
            різноманітні товари за вигідними цінами. Тому досить переплачувати,
            починайте заощаджувати, отримуючи знижки до 20%. Все що потрібно –
            оформити замовлення від 300 грн та отримати картку знижок разом із
            замовленням. З правилами дисконтної програми можна ознайомитись
            нижче.
          </p>
        </DiscountDescription>
      </DiscountDescriptionWrap>
      <FaqList>
        <FaqItem>
          <FaqQuestionText onClick={() => toggleAnswerVisibility(1)}>
            Як отримати картку?
          </FaqQuestionText>

          {answersVisible[1] && (
            <FaqAnswerText>
              Стати власником картки знижок може будь-який роздрібний клієнт
              інтернет-магазину. Для отримання картки необхідно оформити
              замовлення від 300 грн. Ви отримаєте картку разом з вашою
              покупкою.
            </FaqAnswerText>
          )}
        </FaqItem>
        <FaqItem>
          <FaqQuestionText onClick={() => toggleAnswerVisibility(2)}>
            Як активувати картку?
          </FaqQuestionText>
          {answersVisible[2] && <FaqAnswerWrap>Береш і активуеш</FaqAnswerWrap>}
        </FaqItem>
        <FaqItem>
          <FaqQuestionText onClick={() => toggleAnswerVisibility(3)}>
            Як дізнатися розмір знижки?
          </FaqQuestionText>
          {answersVisible[3] && <FaqAnswerWrap>Хз Гуглить нада </FaqAnswerWrap>}
        </FaqItem>

        <FaqItem>
          <FaqQuestionText onClick={() => toggleAnswerVisibility(4)}>
            Як діють знижки?
          </FaqQuestionText>
          {answersVisible[4] && <FaqAnswerText>отак</FaqAnswerText>}
        </FaqItem>
      </FaqList>
    </SectionWrap>
  );
};
// const DiscountRulesPage = () => {
//   const [answersVisible, setAnswersVisible] = useState({});

//   const toggleAnswerVisibility = (index) => {
//     setAnswersVisible((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <SectionWrap>
//       <h4>Карта знижок</h4>
//       <DiscountDescriptionWrap>
//         {/* ... (existing code) */}
//       </DiscountDescriptionWrap>
//       <FaqList>
//         {faqData.map((faqItem, index) => (
//           <FaqItem key={index}>
//             <FaqQuestionText onClick={() => toggleAnswerVisibility(index)}>
//               {faqItem.question}
//             </FaqQuestionText>

//             {answersVisible[index] && (
//               <FaqAnswerText>{faqItem.answer}</FaqAnswerText>
//             )}
//           </FaqItem>
//         ))}
//       </FaqList>
//     </SectionWrap>
//   );
// };

// const faqData = [
//   {
//     question: "Як отримати картку?",
//     answer:
//       "Стати власником картки знижок може будь-який роздрібний клієнт інтернет-магазину. Для отримання картки необхідно оформити замовлення від 300 грн. Ви отримаєте картку разом з вашою покупкою.",
//   },
//   {
//     question: "Як отримати картку?",
//     answer:
//       "Стати власником картки знижок може будь-який роздрібний клієнт інтернет-магазину. Для отримання картки необхідно оформити замовлення від 300 грн. Ви отримаєте картку разом з вашою покупкою.",
//   },
//   // Add more FAQ items here...
// ];

export default DiscountRulesPage;

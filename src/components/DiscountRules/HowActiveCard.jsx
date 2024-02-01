import { FaqAnswerWrap } from '../../pages/DiscountRulesPage/DiscountRulesPageStyled';
import { AnswerWrap, Item, Step, Text } from './DiscountRulesComponentStyled';

const HowActiveCard = () => {
  return (
    <FaqAnswerWrap>
      <AnswerWrap>
        <h4>Самостійно</h4>
        <ul>
          <Item>
            <Step>1</Step>
            <Text>Зареєструйтесь в інтернет-магазині SmartStore</Text>
          </Item>
          <Item>
            <Step>2</Step>
            <Text>Перейдіть до розділу особистого акаунту «Мої знижки».</Text>
          </Item>
          <Item>
            <Step>3</Step>
            <Text>Додайте картку знижок, ввівши номер вашої картки.</Text>
          </Item>
          <Item>
            <Step>4</Step>
            <Text>
              Персональні знижки будуть доступні відразу після активації.
            </Text>
          </Item>
        </ul>
      </AnswerWrap>

      <AnswerWrap>
        <h4>За допомогою менеджера</h4>
        <ul>
          <Item>
            <Step>1</Step>
            <Text>
              Зателефонуйте до інтернет-магазину Trofey.ua по одному з
              контактних телефонів.
            </Text>
          </Item>

          <Item>
            <Step>2</Step>
            <Text>
              Повідомте менеджеру номер вашої картки знижок для активації по
              телефону.
            </Text>
          </Item>

          <Item>
            <Step>3</Step>
            <Text>
              Увійдіть в особистий акаунт, використовуючи номер телефону й
              пароль, отриманий в смс, або встановлений вами особисто.
            </Text>
          </Item>

          <Item>
            <Step>4</Step>
            <Text>
              Персональні знижки будуть доступні відразу після активації.
            </Text>
          </Item>
        </ul>
      </AnswerWrap>
    </FaqAnswerWrap>
  );
};

export default HowActiveCard;

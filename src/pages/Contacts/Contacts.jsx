import {
  ContainerContact,
  TextElement,
  TitleElement,
  ElementList,
  Element,
} from './Contacts.styled';
import FormDialog from '../../components/SendMail/FormDialog.jsx';
import MyComponent from 'components/CallCenter/CallCenter.jsx';
const Contacts = () => {
  return (
    <>
      <ContainerContact>
        <div>
          <TitleElement>
            Get in touch with our friendly support team.
          </TitleElement>
          <TextElement>
            Our busineess hours 9AM - 6PM. Monday - Friday
          </TextElement>
        </div>
        <ElementList>
          <Element>
            <h3>Email support</h3>
            <p>
              Prefer to email ? Send us en email and we will get back to you
              soon.
            </p>
            <FormDialog />
          </Element>
          <Element>
            <h3>Call center</h3>
            <p>
              Our call center is open 24/7, 150+ employees are waiting for your
              call.
            </p>
            <MyComponent />
          </Element>
        </ElementList>
      </ContainerContact>
    </>
  );
};

export default Contacts;

import { FeedbackSection } from './Phonebook.styled';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormStyled = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  margin-right: auto;
  width: 100%;
  justify-content: space-around;

  input {
    width: 100%;
    font-size: 16px;
    ${'' /* margin-bottom: 30px; */}
  }
  .radio {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  & .error {
    color: tomato;
    font-size: 34px;
  }
`;

const schema = Yup.object().shape({
  name: Yup.string('No letters')
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  phone: Yup.number('Invalid number').required('Required'),
});

const Phonebook = ({ addContact }) => {
  const handleSubmit = ({ name, phone }, { resetForm }) => {
    addContact({ name, phone });
    console.log(999);
    resetForm();
  };

  return (
    <FeedbackSection>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          // data: 'true',
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormStyled>
          {/* <div className="radio" role="group" aria-labelledby="my-radio-group">
            <label>
              default
              <Field type="radio" name="data" value="true" />
            </label>
            <label>
              empty
              <Field type="radio" name="data" value="false" />
            </label>
          </div> */}

          <div className="form-labels">
            <label className="form-label" htmlFor="name">
              Name*
              <Field
                id="name"
                name="name"
                // type="text"
                placeholder="James ..."
              />
              <ErrorMessage component="span" name="name" className="error" />
            </label>
            <label className="form-label" htmlFor="phone">
              Number*
              <Field
                id="phone"
                type="text"
                name="phone"
                placeholder="+38 (095) 888 88 88"
              />
              <ErrorMessage name="number" component="span" className="error" />
            </label>
          </div>
          <button type="submit" className="btn">
            Add contact
          </button>
        </FormStyled>
      </Formik>
    </FeedbackSection>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  addContact: PropTypes.func,
  // handleFormData: PropTypes.func,
};

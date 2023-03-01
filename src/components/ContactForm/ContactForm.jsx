import React from "react";
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Form, FormField} from "./ContactForm.styled";


const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
        })
        .required('Required'),
    number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, {
          message:
            "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
          excludeEmptyString: true,
        }
      )
      .required('Required'),
 });


export const ContactForm = ({onLeaveContact}) => {

    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={ContactSchema}
            onSubmit={onLeaveContact}>
            <Form>
                <FormField>
                    Name
                    <Field type="text" name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                    <ErrorMessage name="name" component="div"/>
                </FormField>
                <FormField>
                    Number
                    <Field type="tel" name="number" />
                    <ErrorMessage name="number" component="div" />
                </FormField>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>)
}

ContactForm.propTypes = {
  onLeaveContact: PropTypes.func.isRequired,
};
import React from "react";
import { Formik, Form, Field } from "formik";
import Section from "../components/UI/Section";
import FormFieldUI from "../components/UI/FormFieldUI";

interface FormProps {
    alias: string;
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const initialValues: FormProps = { alias: "", email: "", password: "" };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormFieldUI>
                            <label htmlFor="alias">Pseudonyme</label>
                            <Field id="alias" name="alias" placeholder="Pseudonyme" />
                        </FormFieldUI>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="Email" type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Mot de passe"
                                type="password"
                            />
                        </div>
                        <button
                            className="`w-fit rounded-md font-bold text-sm py-2 px-4 transition-colors ease-in-out delay-50
                text-lg text-lightWhite bg-lightPurple dark:text-lightWhite dark:bg-darkPurple"
                            type="submit"
                            disabled={isSubmitting}>
                            Envoyer
                        </button>
                    </Form>
                )}
            </Formik>
        </Section>
    );
};

export default SignIn;

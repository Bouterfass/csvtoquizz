import React from "react";
import { Formik, Form, Field } from "formik";
import Section from "../components/UI/Section";
import FormFieldUI from "../components/UI/FormFieldUI";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/users/users";

interface FormProps {
    username: string;
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const initialValues: FormProps = { username: "", email: "", password: "" };

    const mutation = useMutation({
        mutationFn: async (values: FormProps) => {
            createUser(values)
        },
        onSuccess: data => {
            console.log("Success ", data);
            alert("Formulaire soumis avec succès")
        },
        onError: error => {
            console.log("Erreur ", error);
            alert("Une erreur est survenue lros de l'envoi du formulaire")
            
        }
    })


    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    mutation.mutate(values)
                    actions.setSubmitting(false);
                   
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormFieldUI>
                            <label htmlFor="username">Pseudonyme</label>
                            <Field id="username" name="username" placeholder="Pseudonyme" />
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

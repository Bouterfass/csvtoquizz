import React from "react";
import { Formik, Form, Field } from "formik";
import Section from "../components/UI/Section";
import FormFieldUI from "../components/UI/FormFieldUI";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/users/users";
import * as Yup from 'yup';

interface FormProps {
  username: string;
  email: string;
  password: string;
}



const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, 'Le pseudonyme doit contenir au moins 3 caractères.')
        .max(30, 'Le pseudonyme doit contenir maximum 30 caractères.')
        .required('Le pseudonyme est requis.'),
    email: Yup.string()
        .email('L\'email doit être valide.')
        .required('L\'email est requis.'),
    password: Yup.string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères.')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            'Le mot de passe doit contenir au moins une lettre, un chiffre et un caractère spécial (@$!%*?&).'
        )
        .required('Le mot de passe est requis.'),
});

const SignIn: React.FC = () => {
  const initialValues: FormProps = {
    username: "Bondold",
    email: "cefyou28@gmail.com",
    password: "Hello@123",
  };

  const mutation = useMutation({
    mutationFn: async (values: FormProps) => {
      createUser(values);
    },
    onSuccess: (data) => {
      console.log("Success ", data);
      console.log("Inscription envoyée.");
    },
    onError: (error: any) => {
      // Vérifie et affiche les erreurs du serveur
      console.log("errorrr", error);
      
      if (error?.data?.errors) {
        const errors = error.data.errors;
        console.table(errors);
      } else {
        console.log("erreur inconnue");
      }
    },
  });

  return (
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          mutation.mutate(values);
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="w-[30%] p-12 flex flex-col items-center space-y-4 border-solid border-2 border-lightPurple">
            <div className="w-[50%]">
              <FormFieldUI>
                <label htmlFor="username">Pseudonyme</label>
                <Field id="username" name="username" placeholder="pseudonyme" />
                {errors.username && touched.username && (
                    <div className="text-xs text-error">{errors.username}</div>
                )}
              </FormFieldUI>
              <FormFieldUI>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                />
                 {errors.email && touched.email && (
                    <div className="text-xs text-error">{errors.email}</div>
                )}
              </FormFieldUI>
              <FormFieldUI>
                <label htmlFor="password">Mot de passe</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="mot de passe"
                  type="password"
                />
                  {errors.password && touched.password && (
                    <div className="text-xs text-error">{errors.password}</div>
                )}
              </FormFieldUI>
              <button
                className="`w-16 rounded-md font-bold text-sm my-2 py-2 px-4 transition-colors ease-in-out delay-50
                            text-lg text-lightWhite bg-lightPurple dark:text-lightWhite dark:bg-darkPurple"
                type="submit"
                disabled={isSubmitting}
              >
                Envoyer
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;

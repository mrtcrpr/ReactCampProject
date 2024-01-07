import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = {
    title: "",
    price: "",
  };
  const schema = Yup.object({
    title: Yup.string().required("Ürün adı zorunlu"),
    price: Yup.number().required("Ürün fiyatı zorunlu"),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        //onsubmit tek elemanı(function) olan obje ister
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="title" placeholder="Ürün adı" />
          <KodlamaIoTextInput name="price" placeholder="Ürün fiyatı" />
          {/* 
          <FormField>
            <Field name="title" placeholder="Ürün adı"></Field>
            <ErrorMessage
              name="title"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="price" placeholder="Ürün fiyatı"></Field>
            <ErrorMessage
              name="price"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> */}
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </>
  );
}

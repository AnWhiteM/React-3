import { Formik, Form, Field } from "formik"
export const SearchBox = ({ handleSearch }) => {
    return(
        <div>
        <h2>Search Contacts</h2>
        <Formik
          initialValues={{ searchQuery: '' }}
          onSubmit={(values, { setSubmitting }) => {
            handleSearch(values.searchQuery);
            setSubmitting(false);
          }}
        >
          <Form>
            <Field type="text" name="searchQuery" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </div>

    );

}
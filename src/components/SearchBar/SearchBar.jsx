import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiSliders } from 'react-icons/fi';

import styles from './SearchBar.module.css';

const defaultValues = {
  query: '',
  language: '',
  primary_release_year: '',
  include_adult: false,
};

const langs = [
  { value: '', label: 'All Languages' },
  { value: 'en-US', label: 'English (US)' },
  { value: 'uk-UA', label: 'Ukrainian (Ukraine)' },
  { value: 'es-ES', label: 'Spanish (Spain)' },
  { value: 'fr-FR', label: 'French (France)' },
  { value: 'de-DE', label: 'German (Germany)' },
];

function SearchBar({ values, isLoading, onSearch }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSubmit = values => {
    values.query = values.query.trim();
    if (!values.query) {
      toast.error('Please enter a search query');
      return;
    }
    onSearch(values);
    // actions.resetForm();
  };

  const initValues = {
    ...defaultValues,
    ...values,
  };

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit}>
      <Form
        className={clsx(styles.searchForm, {
          [styles.filtersVisible]: isFilterOpen,
        })}
      >
        <div className={styles.inputWrapper}>
          <Field
            type="text"
            name="query"
            className={styles.searchInput}
            placeholder="Search query..."
            disabled={isLoading}
            // autoComplete="off"
            autoFocus
          />

          <button
            type="button"
            className={clsx(styles.toggleFiltersBtn, {
              [styles.active]: isFilterOpen,
            })}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            title="Toggle filters"
          >
            <FiSliders size={20} />
          </button>
        </div>

        <Field
          name="language"
          as="select"
          className={styles.searchSelect}
          disabled={isLoading}
        >
          {langs.map(lang => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </Field>

        <Field
          name="primary_release_year"
          placeholder="Release year"
          type="number"
          className={styles.searchInput}
          disabled={isLoading}
        />

        {/* <Field
          name="include_adult"
          type="checkbox"
          className={styles.searchCheckbox}
          disabled={isLoading}
        /> */}

        <button type="submit" disabled={isLoading} className={styles.searchBtn}>
          Search
        </button>
      </Form>
    </Formik>
  );
}

export default SearchBar;

// import { useState } from 'react';
import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiSliders } from 'react-icons/fi';

import styles from './SearchBar.module.css';

const initialsValues = {
  query: '',
  color: '',
  orientation: '',
  order_by: 'relevant',
};

function SearchBar({ isLoading, onSearch }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSubmit = values => {
    const query = values.query.trim();
    if (!query) {
      toast.error('Please enter a search query');
      return;
    }
    onSearch(values);
    // actions.resetForm();
  };

  return (
    <Formik initialValues={initialsValues} onSubmit={handleSubmit}>
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
            placeholder="Search images..."
            disabled={isLoading}
            autoComplete="off"
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
          name="color"
          as="select"
          className={styles.searchSelect}
          disabled={isLoading}
        >
          <option value="">All Colors</option>
          <option value="black_and_white">Black and White</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
          <option value="magenta">Magenta</option>
          <option value="green">Green</option>
          <option value="teal">Teal</option>
          <option value="blue">Blue</option>
        </Field>

        <Field
          name="orientation"
          as="select"
          className={styles.searchSelect}
          disabled={isLoading}
        >
          <option value="">All Orientations</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </Field>

        <Field
          name="order_by"
          as="select"
          className={styles.searchSelect}
          disabled={isLoading}
        >
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </Field>

        <button type="submit" disabled={isLoading} className={styles.searchBtn}>
          Search
        </button>
      </Form>
    </Formik>
  );
}

export default SearchBar;

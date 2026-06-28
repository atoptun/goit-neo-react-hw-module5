import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Section from '../../components/Section/Section';
import Text from '../../components/Text/Text';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <Section>
      <Container>
        <Heading className={styles._404} tag="p" align="center" bottom={20}>
          404
        </Heading>
        <Text align="center" bottom={20}>
          Page not found
        </Text>
        <Text align="center">
          <Link to="/" className={styles.link}>
            Go to Home Page
          </Link>
        </Text>
      </Container>
    </Section>
  );
}
export default NotFoundPage;

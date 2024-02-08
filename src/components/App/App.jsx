import {
  Profile,
  Container,
  Section,
  Heading,
  Statistics,
  SubHeading,
  TransactionHistory,
  FriendList,
} from 'components';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          1 - Профіль соціальної мережі
        </Heading>
        <Profile {...user} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          2- Секція статистики
        </Heading>
        <SubHeading marginTop="20px" marginBottom="20px">
          2.1 З назвою
        </SubHeading>
        <Statistics title="Upload stats" stats={data} />
        <SubHeading marginTop="20px" marginBottom="20px">
          2.2 Без назви
        </SubHeading>
        <Statistics stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          3 - Список друзів
        </Heading>
        <FriendList friends={friends} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          4 - Історія транзакцій
        </Heading>
        <TransactionHistory transactions={transactions} />
      </Container>
    </Section>
  );
};

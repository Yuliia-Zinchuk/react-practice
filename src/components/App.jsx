import { User } from './User/User';
import { UsersList } from '../UserList/UsersList';
import { users } from 'data/users';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="userslist">
        <UsersList users={users} />
      </Section>
    </>
  );
};

// export const App = () => {
//   return (
//     <>
//       <Section>
//         <User user={users[0]} />
//       </Section>
//       <Section title="userslist">
//         <UserList users={users} />
//       </Section>
//     </>
//   );
// };

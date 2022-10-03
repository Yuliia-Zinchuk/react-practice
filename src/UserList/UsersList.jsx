import { User } from 'components/User/User';
export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <User user={user} />
          </li>
        );
      })}
    </ul>
  );
};

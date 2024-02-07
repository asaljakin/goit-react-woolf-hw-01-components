import { GenerateFriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendList } from './FriendList.styled';

export const GenerateFriendList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <GenerateFriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></GenerateFriendListItem>
        );
      })}
    </FriendList>
  );
};

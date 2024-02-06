import {
  CardStatistics,
  Label,
  List,
  ListItem,
  Percentage,
  Title,
} from './Statistics.styled';

export const GenerateStatistics = ({ title, stats }) => {
  return (
    <CardStatistics>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </ListItem>
          );
        })}
      </List>
    </CardStatistics>
  );
};

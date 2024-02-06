import { randomColorRGBA } from 'components/helper';
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
          const bgColor = randomColorRGBA(0.6);
          return (
            <ListItem key={id} bgColor={bgColor}>
              <Label>{label}</Label>
              <Percentage>{percentage + '%'}</Percentage>
            </ListItem>
          );
        })}
      </List>
    </CardStatistics>
  );
};

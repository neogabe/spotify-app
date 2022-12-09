import { StyledRangeButtons } from '../styles';

const TimeRangeButtons = ({ activeRange, setActiveRange }) => (
  <StyledRangeButtons>
    <li>
      <button
        className={activeRange === 'short' ? 'active' : ''}
        onClick={() => setActiveRange('short')}
      >
        Deste mês
      </button>
    </li>
    <li>
      <button
        className={activeRange === 'medium' ? 'active' : ''}
        onClick={() => setActiveRange('medium')}
      >
        Dos últimos 6 meses
      </button>
    </li>
    <li>
      <button
        className={activeRange === 'long' ? 'active' : ''}
        onClick={() => setActiveRange('long')}
      >
        De todos os tempos
      </button>
    </li>
  </StyledRangeButtons>
);

export default TimeRangeButtons;

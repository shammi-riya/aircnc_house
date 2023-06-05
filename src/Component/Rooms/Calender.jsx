import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'

const Calender = () => {
    return (
        <DateRange
        rangeColors={['#262626']}
        date={new Date()}
        direction='vertical'
        showDateDisplay={false}
        minDate={new Date()}
      />
    );
};

export default Calender;
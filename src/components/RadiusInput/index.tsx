import './styles.css';
import { setByAmount } from '@store/slices/radiusSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';

const InputRadius = () => {
  const dispatch = useAppDispatch();
  const radius = useAppSelector((state) => state.radius.value)/1000
  

  function handleOnInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value.replace(/\D/g, '');
    const maxLength = 4;
    const truncatedValue = inputValue.slice(0, maxLength);
    const parsedValue = parseInt(truncatedValue);

    if (!isNaN(parsedValue) && parsedValue > 0) {
      dispatch(setByAmount(parsedValue * 1000));
    }
  }

  return (
    <div className="radius-input-container">
      <input
        value={radius}
        onChange={handleOnInputChange}
        type="text"
        className="radius-input"
      />
      <span className="radius-measure-text">км</span>
    </div>
  );
};

export default InputRadius;

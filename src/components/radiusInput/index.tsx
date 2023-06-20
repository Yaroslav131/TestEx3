import "./styles.css"
import { setByAmount } from '../../store/slices/radiusSlice'
import { useAppDispatch } from "../../store/hooks";

function inputRadius() {
    const dispatch = useAppDispatch()

    function handleOnInputChange(event: any) {
        const inputValue = event.target.value.replace(/\D/g, '');
        const maxLength = 4;
        const truncatedValue = inputValue.slice(0, maxLength);
        const parsedValue = parseInt(truncatedValue);

        if (parsedValue > 0) {
            dispatch(setByAmount(inputValue * 1000));
        }
    }

    return (
        <div className="radius-input-container">
            <input onChange={handleOnInputChange}
                type="text" className="radius-input" />
            <span className="radius-measure-text">км</span>
        </div>
    );
}

export default inputRadius;
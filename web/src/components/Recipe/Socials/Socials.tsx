import './Socials.scss'
import CONSTANTS from '../../../constants';
import { useContext } from 'react';
import { AppContext } from '../../../store/context';

export const Socials = () => {
  const { state } = useContext(AppContext);
  const { data } = state.recipe;

  return (
    <div className="social">
      {CONSTANTS.SOCIALS.map((item) => {
        return (
          <span
            key={item}
            onClick={() => console.log(`some handler for ${item} buttons for id: ${data?.id}`)}
            className={`social-item social-item_${item}`}
          />
        );
      })}
    </div>
  )
}

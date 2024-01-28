import { Card as ICard, CardType } from '../../interfaces';
import style from './Card.module.css';

const Card = ({ card, onClick, isCleared }: { card: ICard; onClick: VoidFunction; isCleared: boolean }) => {
  const cardType = (() => {
    switch (card.type) {
      case CardType.CLUB:
        return '♣️';
      case CardType.DIAMOND:
        return '♦️';
      case CardType.HEART:
        return '♥️';
      case CardType.SPADE:
        return '♠️';
      default:
        return;
    }
  })();

  return (
    <div onClick={onClick} className={style.dimension}>
      <div className={`${style.card}${card.isFlipped ? ` ${style.flipped}` : ''}${isCleared ? ` ${style.isCleared}` : ''}`}>
        <div className={style.back}>{cardType}</div>
        <div className={style.front}></div>
      </div>
    </div>
  );
};

export default Card;

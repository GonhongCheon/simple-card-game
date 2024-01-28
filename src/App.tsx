import { useEffect, useState } from 'react';
import { Card as ICard, CardType } from './interfaces';
import Card from './components/Card/Card.tsx';
import Container from './components/Container';

const defaultCards: ICard[] = [
  {
    type: CardType.CLUB,
    isFlipped: false,
  },
  {
    type: CardType.CLUB,
    isFlipped: false,
  },
  {
    type: CardType.DIAMOND,
    isFlipped: false,
  },
  {
    type: CardType.DIAMOND,
    isFlipped: false,
  },
  {
    type: CardType.SPADE,
    isFlipped: false,
  },
  {
    type: CardType.SPADE,
    isFlipped: false,
  },
  {
    type: CardType.HEART,
    isFlipped: false,
  },
  {
    type: CardType.HEART,
    isFlipped: false,
  },
];

const shuffle = (cards: ICard[]) => {
  const copyCards = [...cards];
  return Array.from({ length: copyCards.length }).map(() => copyCards.splice(Math.random() * copyCards.length, 1)[0]);
};

function App() {
  const [cards, setCards] = useState(shuffle(defaultCards));
  const [prevType, setPrevType] = useState<CardType | null>(null);
  const [isCleared, setIsCleared] = useState(false);

  const onClickCard = (targetIndex: number) => {
    const { type: clickedCardType, isFlipped: clickedCardIsFlipped } = cards[targetIndex];
    if (clickedCardIsFlipped) return;
    const flipClickedCard = () => {
      setCards(
        cards.map((card, index) => ({
          ...card,
          isFlipped: targetIndex === index ? !card.isFlipped : card.isFlipped,
        })),
      );
    };

    if (!prevType) {
      flipClickedCard();
      setPrevType(clickedCardType);
      return;
    }

    if (prevType !== clickedCardType) {
      setCards(
        cards.map(card => ({
          ...card,
          isFlipped: false,
        })),
      );

      setPrevType(null);
      return;
    }

    flipClickedCard();
    setPrevType(null);
  };

  useEffect(() => {
    if (cards.every(({ isFlipped }) => isFlipped)) setIsCleared(true);
  }, [cards, setIsCleared]);

  return (
    <Container>
      {cards.map((card, index) => (
        <Card isCleared={isCleared} onClick={() => onClickCard(index)} card={card} key={index} />
      ))}
    </Container>
  );
}

export default App;

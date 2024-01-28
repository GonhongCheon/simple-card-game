export enum CardType {
  HEART = 'HEART',
  CLUB = 'CLUB',
  DIAMOND = 'DIAMOND',
  SPADE = 'SPADE',
}

export interface Card {
  type: CardType;
  isFlipped: boolean;
}

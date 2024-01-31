import { ICard } from '../../models/ICard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
  cards: ICard[];
  isLoading: boolean;
  error: string;
  originalCards: ICard[];
}

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: '',
  originalCards: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardsFetching(state) {
      state.isLoading = true;
    },
    cardsFetchingSuccess(state, action: PayloadAction<ICard[]>) {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
      state.originalCards = action.payload;
    },
    cardsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    toggleLike(state, action: PayloadAction<{ id: number }>) {
      const originalCard = state.originalCards.find((card) => card.id === action.payload.id);

      const currentCard = state.cards.find((card) => card.id === action.payload.id);

      if (originalCard && currentCard) {
        currentCard.isLiked = !currentCard.isLiked;
        originalCard.isLiked = currentCard.isLiked;
      }
    },
  },
});

export const { toggleLike, cardsFetching, cardsFetchingSuccess, cardsFetchingError } = cardSlice.actions;
export default cardSlice.reducer;

import { createAction, props, createReducer, on } from "@ngrx/store";
import { EntityState } from "@ngrx/entity";
import { createSelector } from '@ngrx/store';

//**** ACTIONS ****//
const incrementProps = props()
export const CounterComponentIncrement = createAction("[Counter Component] Increment Count")
export const BComponentIncrement = createAction("[B Component] Increment Count", incrementProps)

const decrementProps = props<{ newCount: number;}>()
export const CounterComponentDecrement = createAction("[A Component] Decrement Count", decrementProps);

export const Reset = createAction(`Reset Count`);

export interface State extends EntityState<{}> {
  count: number | null;
}

//**** REDUCERS *****//
export const initialState = { count: 0 };
export const countReducer = createReducer(
  initialState,
  on(CounterComponentIncrement,
     BComponentIncrement, 
     (state: State) => ({count: state.count + 1})
  ),
  on(CounterComponentDecrement, (state: State, { newCount }) => ({
    count: state.count - 1
  })),
  on(Reset, () => initialState)
);

//**** SELECTORS *****//
export const selectCount = (state: any) => state.count.count;

import * as React from 'react';
import { AppState } from "./configureStore";

export function AppComponent(state: AppState) {
  return (
    <div>
      {state.chatSession == null ? 'Please, log in!' : state.chatSession.user.name}
    </div>
  );
}
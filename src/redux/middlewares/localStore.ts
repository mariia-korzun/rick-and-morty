import { Middleware, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";


export const storeMiddleware: Middleware =
  (api: MiddlewareAPI<AppDispatch, RootState>) =>
    (next: AppDispatch) =>
      (action: PayloadAction<string>) => {
        const result = next(action);

        if (action.type.includes("characters")) {
          const { characters } = api.getState();
          localStorage.setItem("characters", JSON.stringify(characters.characters));
        }

        return result;
      };

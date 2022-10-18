import { createSelector, select } from "@ngrx/store";
import { AppState } from '../app.state';
import { AssetState } from "./userAssets.reducer";

export const selectAssets = (state: AppState) => state.assetsInfo;
export const selectAssetsList = createSelector(
    selectAssets,
    (state: AssetState) => state.assetsList
);

import { createFeatureSelector } from '@ngrx/store';
import {
    StateSalesTeam,
    StateSalesTeamBin,
    FeatureKey_SalesTeam,
    FeatureKey_SalesTeamBin
} from '../reducers';

export const selectSalesTeamsState = createFeatureSelector
    <StateSalesTeam>(FeatureKey_SalesTeam);
export const selectSalesTeamBinsState = createFeatureSelector
    <StateSalesTeamBin>(FeatureKey_SalesTeamBin);

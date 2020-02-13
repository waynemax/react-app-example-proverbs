import {memo} from 'react';
import {connect} from 'react-redux';
import * as CONSTANTS from './constants';
import * as proverbsActions from './actions/proverbs';
import * as categoriesActions from './actions/categories';
import * as uniqueActions from './actions/unique';
import * as feedActions from './actions/feed';
import * as topActions from './actions/top';
import * as favesActions from './actions/faves';

export default function getWithState(caseName, caseClass) {
  let mapState2Props = state => ({...state}),
    mapDispatch2Props = {};

  switch (caseName) {
    case CONSTANTS.CLASS_CATEGORIES:
      mapState2Props = ({categories}) => {
        return {...categories}
      };

      mapDispatch2Props = {
        loadCategories: categoriesActions.loadCategories
      };
      break;
    case CONSTANTS.CLASS_SEARCH:
      mapState2Props = (state) => {
        return {}
      };

      mapDispatch2Props = (dispatch) => {
        return {
          searchProverbs: proverbsActions.searchProverbs
        }
      };
      break;
    case CONSTANTS.CLASS_MAINPAGE:
      mapState2Props = ({unique}) => {
        return {...unique}
      };

      mapDispatch2Props = {
        loadUnique: uniqueActions.loadUnique
      };
      break;
    case CONSTANTS.CLASS_FEED:
      mapState2Props = ({feed}) => {
        return {...feed}
      };

      mapDispatch2Props = {
        loadProverbs: feedActions.loadProverbs,
        appendProverbs: feedActions.appendProverbs,
      };
      break;
    case CONSTANTS.CLASS_TOP:
      mapState2Props = ({top}) => {
        return {...top}
      };

      mapDispatch2Props = {
        loadTopProverbs: topActions.loadTopProverbs
      };
      break;
    case CONSTANTS.CLASS_FAVES:
      mapState2Props = ({faves}) => {
        return {...faves}
      };

      mapDispatch2Props = {
        loadFavesProverbs: favesActions.loadFavesProverbs,
        appendFavesProverbs: favesActions.appendFavesProverbs,
      };
      break;
    default: break;
  }
  return connect(mapState2Props, mapDispatch2Props)(memo(caseClass));
}
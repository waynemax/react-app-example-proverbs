import React from 'react';
import storeUtils from '../../storeUtils';
import * as CONSTANTS from "../../constants";
import BaseScreen from "../BaseScreen";
import Pagination from "../../hoc/Pagination";
import IsEmptyHandler from "../../hoc/IsEmptyHandler";
import Loading from "../../components/ui/Loading";
import FaveItem from "./components/FaveItem";

class Faves extends BaseScreen {
  get isLoading() {
    return !!this.props.loadingStatus['defaultFaves'];
  }

  render() {
    if (this.isLoading) {
      return <Loading />
    }

    return <IsEmptyHandler
      counter={this.props.faves.count}
      showCounter={true}
      counterText="Избранное"
    /**/>
      <Pagination
        hasNext={this.props.faves.hasNext}
        loadingStatus={this.props.loadingStatus['appendFaves'] === CONSTANTS.LOADING_STATUS_IN_PROCESS}
        loadingMore={this.__append}
      >
        {this.props.faves.items.map(item => <FaveItem
          key={item.id}
          {...item}
        />)}
      </Pagination>
    </IsEmptyHandler>
  }

  __append = () => {
    this.props.appendFavesProverbs();
  };

  __load = (section = null) => {
    switch (section || this.props.routerParams.section) {
      default:
        this.props.loadFavesProverbs();
        break;
    }
  };
}

export default storeUtils(CONSTANTS.CLASS_FAVES, Faves);
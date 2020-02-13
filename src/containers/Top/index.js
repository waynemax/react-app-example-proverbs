import React from 'react';
import storeUtils from '../../storeUtils';
import * as CONSTANTS from "../../constants";
import BaseScreen from "../BaseScreen";
import IsEmptyHandler from "../../hoc/IsEmptyHandler";
import Loading from "../../components/ui/Loading";
import TopItem from "./components/TopItem";

class Top extends BaseScreen {
  get isLoading() {
    return !!this.props.loadingStatus['defaultTop'];
  }

  render() {
    if (this.isLoading) {
      return <Loading />
    }

    this.props.top.items.sort((a, b) => a.count_faves < b.count_faves ? 1 : -1);
    return <IsEmptyHandler
      counter={this.props.top.count}
      showCounter={true}
      counterText="Топ популярных"
    >
      {this.props.top.items.map((item, i) => <TopItem
        iterator={i}
        key={item.id}
        {...item}
      />)}
    </IsEmptyHandler>
  }

  __load = (section = null) => {
    switch (section || this.props.routerParams.section) {
      default:
        this.props.loadTopProverbs();
        break;
    }
  };
}

export default storeUtils(CONSTANTS.CLASS_TOP, Top);
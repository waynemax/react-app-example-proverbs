import React from 'react';
import storeUtils from '../../storeUtils';
import * as CONSTANTS from "../../constants";
import BaseScreen from "../BaseScreen";
import UniqueItem from "./components/UniqueItem";
import IsEmptyHandler from "../../hoc/IsEmptyHandler";
import Loading from "../../components/ui/Loading";

class Unique extends BaseScreen {
  get isLoading() {
    return !!this.props.loadingStatus['defaultUnique'];
  }

  render() {
    if (this.isLoading) {
      return <Loading />
    }

    return <div>
      <IsEmptyHandler
        counter={this.props.unique.response.count}
        text="Больше ничего не найдено"
        showCounter={true}
        counterText="Случайная запись из"
      >
        {this.props.unique.response.items.map(item => <UniqueItem
          key={item.id}
          loadUnique={this.props.loadUnique}
          {...item}
        />)}
      </IsEmptyHandler>
    </div>
  }

  __load = (section = null) => {
    switch (section || this.props.routerParams.section) {
      default:
        this.props.loadUnique();
        break;
    }
  };
}

export default storeUtils(CONSTANTS.CLASS_MAINPAGE, Unique);
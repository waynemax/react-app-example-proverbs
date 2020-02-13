import React from 'react';
import storeUtils from '../../storeUtils';
import * as CONSTANTS from "../../constants";
import BaseScreen from "../BaseScreen";
import ProverbItem from "../../components/ProverbItem";
import Input from "../../components/ui/Input";
import Loading from "../../components/ui/Loading";
import Pagination from "../../hoc/Pagination";
import IsEmptyHandler from "../../hoc/IsEmptyHandler";

import './feed.less';

class Feed extends BaseScreen {
  get isLoading() {
    return !!this.props.loadingStatus['defaultFeed'];
  }

  state = {
    query: ""
  };

  render() {
    if (this.isLoading) {
      return <Loading />
    }
    return <div>
      <div>
        <Input
          classNameWrapper="Search__input"
          placeholder="Поиск..."
          value={this.state.query}
          onTextChange={(e) => {
            this.setState({
              query: e
            }, () => {
              this.__loadProverbs();
            });
          }}
        />
      </div>
      <IsEmptyHandler
        counter={this.props.feed.count}
        text="Больше ничего не найдено"
        showCounter={true}
        counterText="Лента"
      >
        <Pagination
          hasNext={this.props.feed.hasNext}
          loadingStatus={this.props.loadingStatus['appendFeed'] === CONSTANTS.LOADING_STATUS_IN_PROCESS}
          loadingMore={this.__append}
        >
          {this.props.feed.items.map(item => <ProverbItem
            key={item.id}
            append={this.props.appendProverbs}
            {...item}
          />)}
        </Pagination>
      </IsEmptyHandler>
    </div>
  }

  __append = () => {
    this.props.appendProverbs({query: this.state.query});
  };

  __loadProverbs = () => {
    this.props.loadProverbs({query: this.state.query});
  };

  __load = (section = null) => {
    switch (section || this.props.routerParams.section) {
      default:
        this.__loadProverbs();
        break;
    }
  };
}

export default storeUtils(CONSTANTS.CLASS_FEED, Feed);
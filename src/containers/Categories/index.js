import React from 'react';
import BaseScreen from "../BaseScreen";
import storeUtils from '../../storeUtils';
import * as CONSTANTS from '../../constants';


class Categories extends BaseScreen {
  get isLoading() {
    return !!this.props.loadingStatus['defaultCategories'];
  }

  render() {
    if (this.isLoading) {
      return 'Loading...';
    }

    return <div>
      Categories
      <div>
        { this.props.categories.response.count > 0 &&
          this.props.categories.response.items.map(item => {
            return <div key={Math.random()}>
                {item.name}
            </div>
          })
        }
      </div>
    </div>
  }

  __load = (section = null) => {
    switch (section || this.props.routerParams.section) {
      default:
        this.props.loadCategories();
        break;
    }
  };
}

export default storeUtils(CONSTANTS.CLASS_CATEGORIES, Categories);
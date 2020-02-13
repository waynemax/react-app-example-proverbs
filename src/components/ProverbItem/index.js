import './proverbItem.less';

import React from 'react';
import * as proverbsActions from '../../actions/proverbs';
import SVG from 'react-inlinesvg';
import ShowContent from '../../hoc/ShowContent';
import IsVisible from 'react-is-visible'
import classNames from 'classnames';
import onTap from 'react-tap-or-click'

class ProverbItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = {...this.props};
    this.state = {
      has_in_faves: this.item.has_in_faves,
      has_like: this.item.has_like,
      has_view: false,
      count_likes: this.item.count_likes,
      count_views: this.item.count_views,
      count_faves: this.item.count_faves,
      queryStateLikes: false,
      queryStateFaves: false,
      queryStateViews: false,
      viewedTime: null,
      lastClickTime: 0,
      animate: false,
      blocked: true
    };
  }

  render() {
    return <IsVisible>
      {isVisible => this.__renderProverb(isVisible)}
    </IsVisible>
  }

  __visibleHandler = isVisible => {
    if (isVisible) {
      if (this.state.viewedTime === null) {
        this.setState({
          viewedTime: new Date().getTime()
        });
      }
    } else {
      if (this.state.viewedTime !== null) {
        const difference = new Date().getTime() - this.state.viewedTime;
        if (difference > 5500) {
          this.__addView(this.item.id);
        }
        this.setState({
          viewedTime: null
        });
      }
    }
  };

  __onTapHandler = () => {
    if (this.state.lastClickTime !== null) {
      const difference = new Date().getTime() - this.state.lastClickTime;
      if (difference < 300) {
        if (!this.state.has_like) {
          this.__addLike(this.item.id);
        }
      }
    }
    this.setState({
      lastClickTime: new Date().getTime()
    }, () => {
      console.log(new Date().getTime());
    })
  };

  __renderProverb = isVisible => {
    this.__visibleHandler(isVisible);
    let classnamesProverb = classNames({
      Proverb__item_main: true,
      Proverb__item_active: isVisible
    });

    let body = this.item.body;
    const divider = body.indexOf('-');
    if (divider > -1) {
      const splits = body.split('-');
      if (splits.length === 2 && /[a-zA-Z]/.test(splits[1].trim()[0])) {
        body = <div>
          <div className="splitBold">{splits[0]}</div>
          <div className="splitSecond">{splits[1]}</div>
        </div>
      }
    }

    return <div className={classnamesProverb}>
      <div className="Proverb_item_box">
        <div
          className={`Proverb_item_content_text ${'gradient' + ('' + this.item.id).substr(-2)}`}
          {...onTap(this.__onTapHandler)}
        >
          <span className="gradient_text">
            {body}
          </span>
        </div>

        <div className="Proverb__item_footer">
          <div className="Proverb__item_footer_content">
            <ShowContent showIf={false && !this.state.has_like}>
              <div className="Proverb__item_footer_icon" {...onTap(() => this.__addLike(this.item.id))}>
                <SVG src={require("../../assets/proverbs/likeEmpty.svg")} />
                <span>
                  {this.state.count_likes}
                </span>
              </div>
            </ShowContent>
            <ShowContent showIf={false && this.state.has_like}>
              <div className="Proverb__item_footer_icon active" {...onTap(() => this.__removeLike(this.item.id))}>
                <SVG src={require("../../assets/proverbs/likeFull.svg")} />
                <span>
                  {this.state.count_likes}
                </span>
              </div>
            </ShowContent>
            <ShowContent showIf={!this.state.has_in_faves}>
              <div className="Proverb__item_footer_icon" {...onTap(() => this.__addFave(this.item.id))}>
                <SVG src={require("../../assets/proverbs/faveAdd.svg")} />
                <span>
                  {this.state.count_faves}
                </span>
              </div>
            </ShowContent>
            <ShowContent showIf={this.state.has_in_faves}>
              <div className="Proverb__item_footer_icon active" {...onTap(() => this.__removeFave(this.item.id))}>
                <SVG src={require("../../assets/proverbs/faveOk.svg")} />
                <span>
                  {this.state.count_faves}
                </span>
              </div>
            </ShowContent>
            <ShowContent showIf={!this.state.has_view}>
              <div className="Proverb__item_footer_icon count_views">
                <span>
                  {this.state.count_views}
                </span>
                <SVG src={require("../../assets/proverbs/hide.svg")} />
              </div>
            </ShowContent>
            <ShowContent showIf={this.state.has_view}>
              <div className="Proverb__item_footer_icon active count_views">
                <span>
                  {this.state.count_views}
                </span>
                <SVG src={require("../../assets/proverbs/hideOk.svg")} />
              </div>
            </ShowContent>
          </div>
        </div>
      </div>
      <div className="Proverb_divider">
      </div>
    </div>
  };

  __setQueryProccess = (name, queryState) => {
    this.setState({[name]: queryState});
  };

  __addLike = (subject_id) => {
    if (this.state.queryStateLikes) return;
    this.__setQueryProccess('queryStateLikes', true);

    proverbsActions.addLike({subject_id}).then(data => {
      this.setState({
        has_like: true,
        queryStateLikes: false,
        count_likes: this.state.count_likes + 1
      });
    }).catch(info => console.error(info));
  };

  __removeLike = (subject_id) => {
    if (this.state.queryStateLikes) return;
    this.__setQueryProccess('queryStateLikes', true);

    proverbsActions.removeLike({subject_id}).then(data => {
      this.setState({
        has_like: false,
        queryStateLikes: false,
        count_likes: this.state.count_likes - 1
      });
    }).catch(info => console.error(info));
  };

  __addView = (subject_id) => {
    if (this.state.queryStateViews) return;
    this.__setQueryProccess('queryStateViews', true);
    proverbsActions.addView({subject_id}).then(data => {
      this.setState({
        has_view: true,
        count_views: this.state.count_views + 1
      });
    }).catch(info => console.error(info));
  };

  __addFave = (subject_id) => {
    if (this.state.queryStateFaves) return;
    this.__setQueryProccess('queryStateFaves', true);
    proverbsActions.addFave({subject_id}).then(data => {
      this.setState({
        has_in_faves: true,
        queryStateFaves: false,
        count_faves: this.state.count_faves + 1
      });
    }).catch(info => console.error(info));
  };

  __removeFave = (subject_id) => {
    if (this.state.queryStateFaves) return;
    this.__setQueryProccess('queryStateFaves', true);
    proverbsActions.removeFave({subject_id}).then(data => {
      this.setState({
        has_in_faves: false,
        queryStateFaves: false,
        count_faves: this.state.count_faves - 1
      });
    }).catch(info => console.error(info));
  };
}

export default ProverbItem;
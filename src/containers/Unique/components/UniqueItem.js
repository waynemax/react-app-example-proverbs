import '../../../assets/animate.css';

import React from 'react';

import SVG from 'react-inlinesvg';
import ShowContent from '../../../hoc/ShowContent';
import * as proverbsActions from "../../../actions/proverbs";
import ProverbItem from "../../../components/ProverbItem";
import onTap from 'react-tap-or-click';
import '../../../components/ProverbItem/proverbItem.less';
import classNames from 'classnames';

class UniqueItem extends ProverbItem {
  __addLike = (subject_id) => {
    if (this.state.blocked || this.state.queryStateLikes) return;
    this.__setQueryProccess('queryStateLikes', true);

    proverbsActions.addLike({subject_id}).then(data => {
      this.setState({
        has_like: true,
        queryStateLikes: false,
        count_likes: this.state.count_likes + 1
      }, e => {
        this.setState({animate: true},e => {
          setTimeout(e => {
            this.props.loadUnique(true);
          }, 500);
        });
      });
    }).catch(info => console.error(info));
  };

  __addView = (subject_id) => {
    if (this.state.blocked || this.state.queryStateViews) return;
    this.__setQueryProccess('queryStateViews', true);
    proverbsActions.addView({subject_id}).then(data => {
      this.setState({
        has_view: true,
        count_views: this.state.count_views + 1
      }, e => {
        this.setState({animate: true},e => {
          setTimeout(e => {
            this.props.loadUnique(true);
          }, 500);
        });
      });
    }).catch(info => console.error(info));
  };

  __addFaveUnique = e => {
    if (!this.state.blocked) return this.__addFave(e);
  };

  __removeFaveUnique = e => {
    if (!this.state.blocked) return this.__removeFave(e);
  };

  componentDidMount() {
    setTimeout(e => {
      this.setState({blocked: false});
    }, 100)
  }

  render() {
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

    let classnamesMainProverb = classNames({
      Proverb__item_main: true,
      opacity1: true,
      rotateOutDownRight: this.state.animate,
      fadeIn: this.state.blocked,
      animated: true,
      faster: true,
      uniqueProverb: true
    });

    return [<div className="Proverb_divider" key={Math.random()}> </div>,
    <div className={classnamesMainProverb} key={Math.random()}>
      <div className="Proverb_item_box">
        <div className={`Proverb_item_content_text ${'gradient' + ('' + this.item.id).substr(-2)}`}>
          <span className="gradient_text">
            {body}
          </span>
        </div>

        <div className="Proverb__item_footer footer_unique">
          <div className="Proverb__item_footer_content">
            <ShowContent showIf={!this.state.has_like}>
              <div className="Proverb__item_footer_icon" {...onTap(() => this.__addLike(this.item.id))}>
                <SVG src={require("../../../assets/proverbs/likeEmpty.svg")} />
                <span>
                  {this.state.count_likes}
                </span>
              </div>
            </ShowContent>
            <ShowContent showIf={this.state.has_like}>
              <div className="Proverb__item_footer_icon active">
                <SVG src={require("../../../assets/proverbs/likeFull.svg")} />
                <span>
                  {this.state.count_likes}
                </span>
              </div>
            </ShowContent>
            <ShowContent showIf={!this.state.has_in_faves}>
              <div className="Proverb__item_footer_icon" {...onTap(() => this.__addFaveUnique(this.item.id))}>
                <SVG src={require("../../../assets/proverbs/faveAdd.svg")} />
              </div>
            </ShowContent>
            <ShowContent showIf={this.state.has_in_faves}>
              <div className="Proverb__item_footer_icon active" {...onTap(() => this.__removeFaveUnique(this.item.id))}>
                <SVG src={require("../../../assets/proverbs/faveOk.svg")} />
              </div>
            </ShowContent>
            <ShowContent showIf={!this.state.has_view}>
              <div className="Proverb__item_footer_icon" {...onTap(() => this.__addView(this.item.id))}>
                <SVG src={require("../../../assets/proverbs/next.svg")} />
              </div>
            </ShowContent>
            <ShowContent showIf={this.state.has_view}>
              <div className="Proverb__item_footer_icon active">
                <SVG src={require("../../../assets/proverbs/next.svg")} />
              </div>
            </ShowContent>
          </div>
        </div>
      </div>
      <div className="Proverb_divider">
      </div>
    </div>]
  }
}

export default UniqueItem;
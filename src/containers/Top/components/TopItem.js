import React from 'react';
import SVG from 'react-inlinesvg';
import ShowContent from '../../../hoc/ShowContent';
import * as proverbsActions from "../../../actions/proverbs";
import ProverbItem from "../../../components/ProverbItem";
import onTap from 'react-tap-or-click';
import '../../../components/ProverbItem/proverbItem.less';

class TopItem extends ProverbItem {
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

    return [<div className="Proverb_divider" key={Math.random()}> </div>,
      <div className="Proverb__item_main opacity1" key={Math.random()}>
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
                  <SVG src={require("../../../assets/proverbs/likeEmpty.svg")} />
                  <span>
                    {this.state.count_likes}
                  </span>
                </div>
              </ShowContent>
              <ShowContent showIf={false && this.state.has_like}>
                <div className="Proverb__item_footer_icon active" {...onTap(() => this.__removeLike(this.item.id))}>
                  <SVG src={require("../../../assets/proverbs/likeFull.svg")} />
                  <span>
                    {this.state.count_likes}
                  </span>
                </div>
              </ShowContent>

              <ShowContent showIf={!this.state.has_in_faves}>
                <div className="Proverb__item_footer_icon" {...onTap(() => this.__addFave(this.item.id))}>
                  <SVG src={require("../../../assets/proverbs/faveAdd.svg")} />
                  <span>
                    {this.state.count_faves}
                  </span>
                </div>
              </ShowContent>
              <ShowContent showIf={this.state.has_in_faves}>
                <div className="Proverb__item_footer_icon active" {...onTap(() => this.__removeFave(this.item.id))}>
                  <SVG src={require("../../../assets/proverbs/faveOk.svg")} />
                  <span>
                    {this.state.count_faves}
                  </span>
                </div>
              </ShowContent>

              <div className="Proverb__item_footer_icon iterator">
                <span id="iterator">
                  TOP № {this.props.iterator + 1}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Proverb_divider">
        </div>
      </div>]
  }
}

export default TopItem;
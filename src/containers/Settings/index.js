import React from 'react';
import {List, Toggle, ListItem} from 'framework7-react';
import * as storage from '../../services/storage';
import * as mainActions from '../../actions/index';
import * as themes from '../../services/themes';

const LIGHT = 'app_light';
const DARK = 'app_dark';

class Settings extends React.Component {
  state = {
    checked: themes.themeIsDark()
  }

  render() {
    return <>
      <List simpleList themeDark={this.state.checked}>
        <ListItem themeDark={this.state.checked}>
          <span>Темная тема</span>
          <Toggle
            themeDark={this.state.checked}
            colorTheme={'gray'}
            onToggleChange={this.__onChangeTheme}
            defaultChecked={this.state.checked}
          />
        </ListItem>
      </List>
    </>
  }

  __onChangeTheme = e => {
    if (e) {
      this.setState({
        checked: true
      }, e => themes.setTheme(DARK));
    } else {
      this.setState({
        checked: false
      }, e => themes.setTheme(LIGHT));
    }
  }
}

export default Settings;
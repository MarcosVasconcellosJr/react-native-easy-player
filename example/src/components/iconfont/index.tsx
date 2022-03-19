/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconClose from './IconClose';
import IconAIcChevrondown16 from './IconAIcChevrondown16';
import IconAIcChevronleft16 from './IconAIcChevronleft16';
import IconFlagoutline from './IconFlagoutline';
import IconSetting from './IconSetting';
import IconFeedback from './IconFeedback';
export { default as IconClose } from './IconClose';
export { default as IconAIcChevrondown16 } from './IconAIcChevrondown16';
export { default as IconAIcChevronleft16 } from './IconAIcChevronleft16';
export { default as IconFlagoutline } from './IconFlagoutline';
export { default as IconSetting } from './IconSetting';
export { default as IconFeedback } from './IconFeedback';

export type IconNames = 'close' | 'a-ic_chevrondown_16' | 'a-ic_chevronleft_16' | 'flagoutline' | 'setting' | 'feedback';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'close':
      return <IconClose key="1" {...rest} />;
    case 'a-ic_chevrondown_16':
      return <IconAIcChevrondown16 key="2" {...rest} />;
    case 'a-ic_chevronleft_16':
      return <IconAIcChevronleft16 key="3" {...rest} />;
    case 'flagoutline':
      return <IconFlagoutline key="4" {...rest} />;
    case 'setting':
      return <IconSetting key="5" {...rest} />;
    case 'feedback':
      return <IconFeedback key="6" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

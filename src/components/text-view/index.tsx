import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import COLORS, {ColorNames} from '../../theme/colors';

interface TextViewProps extends TextProps {
  color?:
    | ColorNames['purpleDarker']
    | ColorNames['purplePrimary']
    | ColorNames['purpleLight']
    | ColorNames['purpleLighter']
    | ColorNames['blackDarker']
    | ColorNames['blackPrimary']
    | ColorNames['blackLight']
    | ColorNames['blackLighter']
    | ColorNames['greyDarker']
    | ColorNames['greyPrimary']
    | ColorNames['greyLight']
    | ColorNames['greyLighter']
    | ColorNames['white'];
}

const TextView: React.FC<TextViewProps> = ({color, style, ...restProps}) => {
  const fontColor = COLORS[color || 'BLACKDARKER'];

  const styles = [{color: fontColor}, style];

  return <Text style={styles} {...restProps} />;
};

export default TextView;

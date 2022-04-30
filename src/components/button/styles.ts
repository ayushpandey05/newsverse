import {StyleSheet} from 'react-native';
import COLORS, {COLOR_NAMES} from '../../theme/colors';
import FONTS, {FONT_NAMES} from '../../theme/fonts';

const largeButton = StyleSheet.create({
  container: {
    // backgroundColor: COLORS[COLOR_NAMES.purplePrimary],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 56,
  },
  text: {
    // color: COLORS[COLOR_NAMES.white],
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'normal',
    ...FONTS[FONT_NAMES.semibold],
  },
});

const smallButton = StyleSheet.create({
  container: {
    // backgroundColor: COLORS[COLOR_NAMES.purplePrimary],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 32,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    // color: COLORS[COLOR_NAMES.white],
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    fontStyle: 'normal',
    ...FONTS[FONT_NAMES.semibold],
  },
});

const primaryButton = StyleSheet.create({
  container: {
    backgroundColor: COLORS[COLOR_NAMES.purplePrimary],
  },
  text: {
    color: COLORS[COLOR_NAMES.white],
  }
})

const secondaryButton = StyleSheet.create({
  container: {
    backgroundColor: COLORS[COLOR_NAMES.greyLighter],
  },
  text: {
    color: COLORS[COLOR_NAMES.greyPrimary],
  }
})

export {largeButton, smallButton, primaryButton, secondaryButton};

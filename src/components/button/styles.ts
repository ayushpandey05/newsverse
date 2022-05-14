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

const googleButton = StyleSheet.create({
  btnIconContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  btnTouch: {
    height: 56,
    borderWidth: 1,
    borderColor: COLORS[COLOR_NAMES.greyLighter],
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export {largeButton, smallButton, primaryButton, secondaryButton, googleButton};

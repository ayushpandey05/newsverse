const FONT_NAMES = {
  regular: 'Regular',
  medium: 'Medium',
  semibold: 'Semibold',
  bold: 'Bold',
};

interface FontsType {
  [x: string]: {
    fontWeight: '400' | '500' | '600' | '700';
  };
}

const FONTS: FontsType = {
  [FONT_NAMES.regular]: {
    fontWeight: '400',
  },
  [FONT_NAMES.medium]: {
    fontWeight: '500',
  },
  [FONT_NAMES.semibold]: {
    fontWeight: '600',
  },
  [FONT_NAMES.bold]: {
    fontWeight: '700',
  },
};

export default FONTS;
export {FONT_NAMES};

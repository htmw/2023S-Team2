<<<<<<< HEAD
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
=======
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
>>>>>>> 246976b16481f65ad2afb571def55ed54b745ccd

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
<<<<<<< HEAD
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
=======
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
>>>>>>> 246976b16481f65ad2afb571def55ed54b745ccd

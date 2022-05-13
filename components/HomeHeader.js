import { View, Text, Image, TextInput } from 'react-native'
// 
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';

const HomeHeader = ({ handleSearchNft }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />

        {/* Profile image */}
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 15,
              height: 15,
            }}
          />
        </View>
      </View>

      {/* Header text */}
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Hello, Valeria 👋
        </Text>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
          marginTop: SIZES.base / 2
        }}>
          Let's find a masterpiece
        </Text>
      </View>

      {/* Search input */}
      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: "100%",
          borderRadius: SIZES.small,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder='Search NFTs'
            placeholderTextColor='#B4D0E3'
            style={{ flex: 1, color: COLORS.white }}
            onChangeText={(txt) => handleSearchNft(txt)}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader
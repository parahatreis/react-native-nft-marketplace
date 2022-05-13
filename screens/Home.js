import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native'
// Utils / Constants
import { COLORS, NFTData } from '../constants/index';
// Components
import { HomeHeader, NFTCard, FocusedStatusBar } from '../components'

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearchNft = (val) => {
    if (!val.length) return setNftData(NFTData);

    const filteredData = nftData.filter((nft) => nft.name?.toLowerCase?.().includes(val?.toLowerCase?.()));
    
    if(filteredData.length) return setNftData(filteredData);
    return setNftData(NFTData);
  }

  return (
    <>
      {/* Top Bar of Mobile Device */}
      <FocusedStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            {/* Renders array data */}
            <FlatList
              data={nftData}
              renderItem={({item}) => <NFTCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader handleSearchNft={handleSearchNft} />}
            />
          </View>
          {/* Background */}
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View
              style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home;
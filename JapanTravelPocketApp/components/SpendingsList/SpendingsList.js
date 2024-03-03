import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

const SpendingsList = () => {
  
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (isLoadingCategories) {
          return;
        }
        // console.log(
        //   'User has reached the end and we are getting more data for page number ',
        //   categoryPage,
        // );
        setIsLoadingCategories(true);
        let newData = pagination(
          categories.categories,
          categoryPage,
          categoryPageSize,
        );
        if (newData.length > 0) {
          setCategoryList(prevState => [...prevState, ...newData]);
          setCategoryPage(prevState => prevState + 1);
        }
        setIsLoadingCategories(false);
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={categoryList}
      renderItem={({item}) => (
        <View style={style.categoryItem} key={item.categoryId}>
          <Tab
            tabId={item.categoryId}
            onPress={value => dispatch(updateSelectedCategoryId(value))}
            title={item.name}
            isInactive={item.categoryId !== categories.selectedCategoryId}
          />
        </View>
      )}
    />
  );
};

export default SpendingsList;

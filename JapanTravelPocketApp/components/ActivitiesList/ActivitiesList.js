import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, Pressable} from 'react-native';

import style from './style';

import PropTypes from 'prop-types';
import {Routes} from '../../navigation/Routes';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ActivitiesList = (props, {navigation}) => {
  const activities = props.activities;
  const spendingsPageSize = 7;
  const [spenginsCurrentPage, setSpendingsCurrentPage] = useState(1);
  const [activitiesRenderedData, setActivitiesRenderedData] = useState([]);
  const [isLoadingSpendgins, setIsLoadingSpendings] = useState(false);

  useEffect(() => {
    // setIsLoadingSpendings(true);
    // const getInitalData = pagination(spendings, 1, spendingsPageSize);
    // setSpendingsRenderedData(getInitalData);
    // setIsLoadingSpendings(false);
    setActivitiesRenderedData(activities);
  }, [activities]);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  return (
    <View style={style.spenginsContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        // onEndReached={() => {
        //   if (isLoadingSpendgins) return;
        //   setIsLoadingSpendings(true);
        //   let newData = pagination(
        //     spendings,
        //     spenginsCurrentPage + 1,
        //     spendingsPageSize,
        //   );
        //   if (newData.length > 0) {
        //     setSpendingsCurrentPage(spenginsCurrentPage + 1);
        //     setSpendingsRenderedData(prev => [...prev, ...newData]);
        //   }
        //   setIsLoadingSpendings(false);
        // }}
        showsVerticalScrollIndicator={false}
        data={activitiesRenderedData}
        renderItem={({item}) => (
          <Pressable
            onPress={() => props.onPressRow(item)}
            style={style.activityContainer}>
            <View style={style.name}>
              <Text style={style.nameText}>{item.name}</Text>
            </View>
            <View style={style.details}>
              <Text style={style.detailsText}>Details</Text>
              <FontAwesomeIcon icon={'fa-chevron-right'} color={'#858585'} />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

ActivitiesList.propTypes = {
  activities: PropTypes.array.isRequired,
  onPressRow: PropTypes.func,
};

export default ActivitiesList;

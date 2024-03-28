import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';

import style from './style';

import PropTypes from 'prop-types';
import {Routes} from '../../navigation/Routes';
import {useSelector, useDispatch} from 'react-redux';
import SpendingRow from '../SpendingRow/SpendingRow';

const SpendingsList = (props, {navigation}) => {
  const calcData = useSelector(state => state.calcData);
  const yenCurrency = calcData.yenCurrency;
  const euroCurrency = calcData.euroCurrency;

  const spendings = props.spendings;
  const [totalYenAmount, setTotalYenAmount] = useState(0);
  const [totalEuroAmount, setTotalEuroAmount] = useState(0);
  const spendingsPageSize = 7;
  const [spenginsCurrentPage, setSpendingsCurrentPage] = useState(1);
  const [spendingsRenderedData, setSpendingsRenderedData] = useState([]);
  const [isLoadingSpendgins, setIsLoadingSpendings] = useState(false);

  useEffect(() => {
    // setIsLoadingSpendings(true);
    // const getInitalData = pagination(spendings, 1, spendingsPageSize);
    // setSpendingsRenderedData(getInitalData);
    // setIsLoadingSpendings(false);
    setSpendingsRenderedData(spendings);
  }, [spendings]);

  useEffect(() => {
    console.log('spendingsList');
    console.log(spendingsRenderedData);
    setTotalYenAmount(0);
    let total = 0;
    spendings.map(item => {
      total += item.amount;
    });
    setTotalYenAmount(total);
  }, [spendingsRenderedData]);

  useEffect(() => {
    const euroEquivalent =
      (parseFloat(totalYenAmount) * euroCurrency) / yenCurrency;
    setTotalEuroAmount(euroEquivalent);
  }, [totalYenAmount]);

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
      <View>
        <SpendingRow
          name={'Name'}
          amount={'Price'}
          tag={'Tag'}
          type={2}
          onPress={() => props.onPress()}
        />
      </View>
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
        data={spendingsRenderedData}
        renderItem={({item}) => (
          <SpendingRow
            name={item.name}
            amount={item.amount.toString()}
            tag={item.tags.tag}
            tagColor={item.tags.color}
          />
        )}
      />
      {spendingsRenderedData.length > 0 && (
        <SpendingRow
          name={'Total'}
          amount={totalYenAmount.toFixed(0).toString()}
          tag={totalEuroAmount.toFixed(2) + '€'}
          type={3}
        />
      )}
    </View>
  );
};

SpendingsList.propTypes = {
  spendings: PropTypes.array.isRequired,
  onPress: PropTypes.func,
};

export default SpendingsList;

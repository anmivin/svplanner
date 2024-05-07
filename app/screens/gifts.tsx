import { Text, Button, View } from 'react-native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/mainStore';
import { fetchCrops } from '../store/reducers/ActionCreators';

const Gifts = () => {
  const dispatch = useAppDispatch();

  const { crops, pendingCrops, error } = useAppSelector((state) => state.cropsSlice);

  useEffect(() => {
    dispatch(fetchCrops());
  }, []);

  return (
    <View>
      <Text>Gifts</Text>
      <Button title="INIT" onPress={() => {}} />
      {pendingCrops && <Text>Loading</Text>}
      {!pendingCrops && crops.length && (
        <View>
          {crops.map((it) => (
            <View key={it.key}>
              <Text>{it.name}</Text>
              <img src={it.src} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Gifts;

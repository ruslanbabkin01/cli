/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Text, Select, Box, CheckIcon, Image, Center} from 'native-base';
import {Platform, Dimensions} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import data from '../db/films.json';
import {movie} from '../interfaces/types';

// const window = Dimensions.get('window');
// const screen = Dimensions.get('screen');
// console.log('Window', window, 'Screen', screen);

function SelectList(): JSX.Element {
  const [films, setFilms] = useState<movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<movie | undefined>();
  const windowWidth = useWindowDimensions();
  // console.log('WindowDimentionsWidth', windowWidth);

  useEffect(() => {
    setFilms(data);
  }, []);

  const handleMovieSelect = (value: string) => {
    const selected = films.find(item => item.Title === value);
    setSelectedMovie(selected);
  };

  return (
    <Center>
      <Text>{Platform.OS === 'android' ? 'Hello Android' : 'Hello IOS'}</Text>
      <Select
        selectedValue={films}
        minWidth="200"
        accessibilityLabel="Choose film"
        placeholder="Choose film"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={handleMovieSelect}>
        {films?.map(film => (
          <Select.Item key={film.Title} label={film.Title} value={film.Title} />
        ))}
      </Select>
      {selectedMovie && (
        <Box borderWidth={1} borderRadius={4} p={2} mt={2}>
          <Image
            source={{uri: selectedMovie.Poster}}
            alt={`${selectedMovie.Title} poster`}
            size="2xl"
            resizeMode="contain"
          />
          <Text fontWeight="bold" mt={2}>
            {selectedMovie.Title} ({selectedMovie.Year})
          </Text>
          <Text mt={2}>{selectedMovie.Genre}</Text>
          <Text mt={2}>{selectedMovie.Plot}</Text>
          <Text fontSize="sm" mt={2}>
            Directed by: {selectedMovie.Director}
          </Text>
        </Box>
      )}
    </Center>
  );
}

export default SelectList;

import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

import { RoomConsumer } from '../context';
import Loading from '../components/Loading';

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
}

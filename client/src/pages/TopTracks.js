import { useState, useEffect } from 'react';
import {
  TrackList,
  SectionWrapper,
  TimeRangeButtons,
  Loader,
} from '../components';
import { getTopTracks } from '../spotify';
import { catchErrors } from '../utils';

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState('short');

  useEffect(() => {
    const fetchData = async () => {
      const userTopTracks = await getTopTracks(`${activeRange}_term`);
      setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main>
      {topTracks ? (
        <SectionWrapper title='Músicas mais escutadas' breadcrumb='true'>
          <TimeRangeButtons
            activeRange={activeRange}
            setActiveRange={setActiveRange}
          />
          <TrackList tracks={topTracks.items} />
        </SectionWrapper>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default TopTracks;

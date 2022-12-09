import { useState, useEffect } from 'react';
import {
  ArtistsGrid,
  SectionWrapper,
  TimeRangeButtons,
  Loader,
} from '../components';
import { getTopArtists } from '../spotify';
import { catchErrors } from '../utils';

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState('short');

  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getTopArtists(`${activeRange}_term`);
      setTopArtists(userTopArtists.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main>
      {topArtists ? (
        <SectionWrapper title='Artistas mais escutados' breadcrumb='true'>
          <TimeRangeButtons
            activeRange={activeRange}
            setActiveRange={setActiveRange}
          />
          <ArtistsGrid artists={topArtists.items} />
        </SectionWrapper>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default TopArtists;

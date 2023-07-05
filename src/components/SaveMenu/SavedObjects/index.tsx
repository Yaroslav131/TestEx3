import { useState, useEffect } from 'react';
import { getGeoObjectById } from '@api/overpassApi';

import './styles.css';
import SavedObjectSkeleton from './Skeleton';
import SavedObject from './SavedObject';

interface IProps {
  savedObjectsId: number[];
  handleDeleteObjectId: (id: number) => void;
}

const SavedObjects = (props: IProps) => {
  const [savedObjects, setSavedObjects] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(async () => {
      async function handleSetSavedObjects() {
        const geoObjects = await getGeoObjectById(props.savedObjectsId);

        const savedObjects = geoObjects.map((x, index) => (
          <SavedObject handleDeleteObject={props.handleDeleteObjectId} savedObject={x} key={index} />
        ));
        setSavedObjects(savedObjects);
      }

      await handleSetSavedObjects();

      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [props.savedObjectsId]);

  return (
    <>
      <h2 className="option-title">Избранное:</h2>
      <div className='saved-contant'>
        {isLoading ? (
          <>
            <SavedObjectSkeleton />
            <SavedObjectSkeleton />
            <SavedObjectSkeleton />
            <SavedObjectSkeleton />
          </>
        ) : (
          savedObjects
        )}
      </div>
    </>
  );
}

export default SavedObjects;
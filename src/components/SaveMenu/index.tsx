import { useState, useEffect } from 'react';
import { useAppSelector } from '@store/hooks';
import { addUserSavedId, getCurrentUserSavedId, removeUserSavedId } from '@api/firebaseApi';

import './styles.css';
import ChosenObject from './ChosenObject';
import SavedObjects from './SavedObjects';

const SaveMenu = () => {
  const [savedObjectsId, setSavedObjectsId] = useState<number[]>([]);
  const isChosenObjPicked = useAppSelector((state) => state.isChosenObjPicked.value);

  useEffect(() => {
    async function fetchSavedIds() {
      const savedId = await getCurrentUserSavedId();
      setSavedObjectsId(savedId);
    }

    fetchSavedIds();
  }, []);

  function handleDeleteObjectId(id: number) {
    setSavedObjectsId((prevSavedObjectsId) => {
      const newSavedObjectsId = prevSavedObjectsId.filter((x) => x !== id);
      return newSavedObjectsId;
    });

    removeUserSavedId(id);
  }

  function handleSaveObjectId(id: number) {
    setSavedObjectsId((prevSavedObjectsId) => {
      const newSavedObjectsId = [...prevSavedObjectsId, id];
      return newSavedObjectsId;
    });

    addUserSavedId(id);
  }

  return (
    <div className="save-menu">
      {isChosenObjPicked[0] ? (
        <ChosenObject
          handleSaveObject={handleSaveObjectId}
          handleDeleteObject={handleDeleteObjectId}
          savedObjectsId={savedObjectsId}
        />
      ) : (
        <SavedObjects
          handleDeleteObjectId={handleDeleteObjectId}
          savedObjectsId={savedObjectsId}
        />
      )}
    </div>
  );
};

export default SaveMenu;

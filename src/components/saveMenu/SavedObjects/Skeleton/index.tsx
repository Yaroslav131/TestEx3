import ContentLoader from 'react-content-loader';

const SavedObjectSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={200}
      viewBox="0 0 250 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="0" rx="10" ry="10" width="100" height="100" /> {/* Заглушка для изображения */}
      <rect x="120" y="30" rx="4" ry="4" width="120" height="12" /> {/* Заглушка для заголовка */}
      <rect x="10" y="110" rx="3" ry="3" width="280" height="10" /> {/* Заглушка для описания */}
      <rect x="10" y="130" rx="3" ry="3" width="30" height="30" /> {/* Заглушка для кнопки */}
      <rect x="220" y="130" rx="3" ry="3" width="30" height="30" /> {/* Заглушка для кнопки */}
    </ContentLoader>
  );
};

export default SavedObjectSkeleton;

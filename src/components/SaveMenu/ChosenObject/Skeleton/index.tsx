import ContentLoader from 'react-content-loader';

const ChosenObjectSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={280}
      viewBox="0 0 400 280"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="10" rx="10" ry="10" width="120" height="120" /> {/* Заглушка для изображения */}
      <rect x="140" y="20" rx="4" ry="4" width="200" height="12" /> {/* Заглушка для заголовка */}
      <rect x="140" y="50" rx="3" ry="3" width="200" height="10" /> {/* Заглушка для описания */}
      <rect x="140" y="70" rx="3" ry="3" width="150" height="10" /> {/* Заглушка для телефона */}
      <rect x="140" y="90" rx="3" ry="3" width="200" height="10" /> {/* Заглушка для адреса */}
      <rect x="140" y="110" rx="3" ry="3" width="100" height="10" /> {/* Заглушка для сайта */}
      <rect x="10" y="150" rx="3" ry="3" width="30" height="30" /> {/* Заглушка для кнопки сохранения */}
      <rect x="50" y="150" rx="3" ry="3" width="30" height="30" /> {/* Заглушка для кнопки маршрута */}
    </ContentLoader>
  );
};

export default ChosenObjectSkeleton;

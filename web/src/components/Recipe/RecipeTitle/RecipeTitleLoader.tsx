import ContentLoader from 'react-content-loader';

const RecipeTitleLoader = () => (
  <ContentLoader
    speed={4}
    width={363}
    height={27}
    viewBox="0 0 363 27"
    backgroundColor="#737992"
    foregroundColor="#a1aace"
  >
    <rect x="1" y="3" rx="2" ry="2" width="24" height="24" />
    <rect x="35" y="9" rx="5" ry="5" width="180" height="14" />
    <circle cx="263" cy="14" r="12" />
    <circle cx="292" cy="14" r="12" />
    <circle cx="321" cy="14" r="12" />
    <circle cx="350" cy="14" r="12" />
  </ContentLoader>
)

export default RecipeTitleLoader;

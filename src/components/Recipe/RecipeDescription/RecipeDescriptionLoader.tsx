import ContentLoader from 'react-content-loader';

const RecipeListLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={222}
    viewBox="0 0 300 222"
    backgroundColor="#737992"
    foregroundColor="#a1aace"
  >
    <circle cx="16" cy="16" r="14" />
    <rect x="42" y="10" rx="3" ry="3" width="175" height="16" />

    <rect x="0" y="55" rx="3" ry="3" width="299" height="12" />
    <rect x="0" y="81" rx="3" ry="3" width="299" height="12" />
    <rect x="0" y="103" rx="3" ry="3" width="299" height="12" />
    <rect x="0" y="127" rx="3" ry="3" width="299" height="12" />
    <rect x="0" y="150" rx="3" ry="3" width="299" height="12" />

    <rect x="0" y="184" rx="6" ry="6" width="299" height="40" />
  </ContentLoader>
)

export default RecipeListLoader;

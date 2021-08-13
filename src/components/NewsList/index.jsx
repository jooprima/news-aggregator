import PropTypes from "prop-types";

import styles from "../NewsList/NewsList.module.css";

const NewsList = ({ articles }) => {
  return (
    <div className={styles.NewsList}>
      {articles.map((article, index, arr) => {
        return (
          <div key={index}>
            <h1>{article.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

NewsList.propTypes = {
  articles: PropTypes.array,
};

export default NewsList;
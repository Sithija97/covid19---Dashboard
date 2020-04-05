import React from "react";
import "../App.css";

class Articles extends React.Component {
  render() {
    return (
      <div style={{ display: "flex",  padding: "2em"}}>
        <div class="ArticleCard ">
          <img
            src="/w3images/jeans3.jpg"
            alt="Denim Jeans"
            style={{ width: "100%" }}
          />
          <h1>Tailored Jeans</h1>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button>Read more</button>
          </p>
        </div>
        <div class="ArticleCard ">
          <img
            src="/w3images/jeans3.jpg"
            alt="Denim Jeans"
            style={{ width: "100%" }}
          />
          <h1>Tailored Jeans</h1>

          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button>Read more</button>
          </p>
        </div>
        <div class="ArticleCard ">
          <img
            src="/w3images/jeans3.jpg"
            alt="Denim Jeans"
            style={{ width: "100%" }}
          />
          <h1>Tailored Jeans</h1>

          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button>Read more</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Articles;

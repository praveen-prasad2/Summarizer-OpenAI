import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      setArticle(newArticle);

      console.log(newArticle);
    }
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search  */}

      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn
          peer-focus:border-gray-700
          peer-focus:text-gray-700"
          >
            <svg
              id="fi_12048842"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m19.87 34-2.78 1.6a2.64 2.64 0 0 1 -4-2.28l1.91-5.78a2.44 2.44 0 0 1 2.21-1.67l6.91-.26a1.64 1.64 0 0 0 0-3.26l-6.91-.27a2.44 2.44 0 0 1 -2.21-1.67l-1.9-5.76a2.65 2.65 0 0 1 4-2.3l8.08 4.65 8.08 4.67a2.65 2.65 0 0 1 0 4.58l-8.08 4.65-1.33.77z"></path>
            </svg>
          </button>
        </form>
        {/* Browse URL History  */}
      </div>
      {/* Display Results  */}
    </section>
  );
};

export default Demo;

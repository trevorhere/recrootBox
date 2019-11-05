import React, { useEffect, useState } from "react";
import "../../App.css";
import { Row } from "react-materialize";
import LinkView from "./LinkView";
import BlogView from "./BlogView";
import PostHeader from "./PostHeader";
import PreLoader from "../PreLoader";

import { gistUrl } from "../../ProfileInformation";

const blog = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "10%"
};

const translateTitleDate = (fileName) => {
  let arr = fileName.split(":");
  let title = arr[0].split("_").join(" ");
  let date = arr[1]
    .substr(0, arr[1].length - 3)
    .split("_")
    .join("/");

  return { title: title, date: date };
}

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();

        setResponse(data);

        const fileNames = Object.keys(data.files);
        let files = [];
        let fileInfo = {};

        for (let i = 0; i < fileNames.length; i++) {
          var fileName = fileNames[i];
          let content = data.files[fileName].content;

          fileInfo = translateTitleDate(fileName);
          files.push({
            filename: `${fileName}`,
            content: `${content}`,
            title: fileInfo.title,
            date: fileInfo.date
          });
        }
        setIsLoading(false)
        setFiles(files)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { files, response, error, isLoading };
};

const PostsSection = (props) => {
  const data = useFetch(gistUrl);
  const [listView, setListView] = useState(true);
  const listToggler = () => {
    setListView(!listView);
  }

  const { error, isLoaded, files } = data;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded) {
    return (
      <PreLoader />
    )
  } else {
    return (
      <div>
        <PostHeader viewToggleSwitch={listToggler} listView={listView} />
        <div style={blog}>
          <div style={{ width: "100%" }}>
            {files.map((item, index) => {
              return (
                <div key={index}>
                  <Row>
                    {listView ? (
                      <LinkView
                        filename={item.filename}
                        title={item.title}
                        date={item.date}
                        content={item.content}
                      />
                    ) : (
                        <BlogView
                          fileName={item.filename}
                          title={item.title}
                          date={item.date}
                          content={item.content}
                        />
                      )}
                  </Row>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default PostsSection;
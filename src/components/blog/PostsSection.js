import React, { useEffect, useState } from "react";
import "../app.css";
import { Row } from "react-materialize";
import LinkView from "./LinkView";
import BlogView from "./BlogView";
import PostView from "./PostView";
import PostHeader from "./PostHeader";
import PreLoader from "../PreLoader";
import styled, {keyframes} from 'styled-components'

import { gistUrl } from "../../siteData";

const blog = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "10%"
};

const renderLoading = () => {
  return "Loading .."
}

const translateTitleDate = (fileName) => {
  let arr = fileName.split("__");
  let title = arr[0].split("_").join(" ");
  let date = arr[1]
    .substr(0, arr[1].length - 3)
    .split("_")
    .join("/");

  return { title: title, date: date };
}

const useFetch = (url, isLoadingCallback) => {
  const [response, setResponse] = useState(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      isLoadingCallback(true);

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

        files.sort((a,b) => { return new Date(b.date) - new Date(a.date) })
        setFiles(files)
        isLoadingCallback(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { files, response, error };
};

const PostsSection = () => {
  const [listView, setListView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const data = useFetch(gistUrl, setIsLoading);

  const listToggler = () => {
    setListView(!listView);
  }

  const { error, isLoaded, files } = data;

  // console.log('isLoading: ', isLoading);
  // console.log('data: ', data);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return (
    <div>
      <PostHeader viewToggleSwitch={listToggler} listView={listView} />
      <Loader>Loading<Blink>...</Blink> </Loader>
    </div>
    )
  } else {
    return (
      <div>
        <PostHeader viewToggleSwitch={listToggler} listView={listView} />
        <div style={blog}>
          <div style={{ width: "100%", margin: "0 2rem" }}>
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
                        <PostView
                          filename={item.filename}
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

const flash = keyframes`
0%{     color: #000;    }
49%{    color: #000; }
60%{    color: transparent; }
99%{    color:transparent;  }
100%{   color: #000;    }
`

const Loader = styled.div`
font-family:  Roboto Mono;
text-align: center;
margin-top: 25%;
display: flex;
justify-content: center;

`

const Blink = styled.div`
font-family: Roboto Mono;
animation:${flash} 1.2s infinite;
`
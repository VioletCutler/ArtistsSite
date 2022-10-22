import React from "react";
import { arrayOfVideoPostObjects } from "./DummyData";
import { VideoPostTemplate } from '../Index'
const posts = arrayOfVideoPostObjects;
/*
Brainstorming related to building my database for a dynamic blog. 
- I want to figure out how to programatically render my blog posts while not having them all formatted the same

Templates is the way to go:
*/

//template 1
// A post about a video I made



const Templates = () => {
  return (
    <div>
      <h2>This will be my template for different blog posts</h2>
      <section>
        {posts ? (
          posts.map((post) => {
            {
              switch (post.templateReferenceNumber) {
                case 1:
                  return (
                   <VideoPostTemplate post={post}/>
                  );
                case 2: 
                return (
                  <h3>Case 2</h3>
                )
                default: {
                  null;
                }
              }
            }
          })
        ) : (
          <p>Loading Video Posts</p>
        )}
      </section>
    </div>
  );
};

export default Templates;

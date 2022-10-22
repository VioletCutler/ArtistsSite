import React from "react";

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/aGbGNQXEFkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}

const VideoPostTemplate = ({ post }) => {
  console.log(post);
  return (
    <article className='videoPostContainer' key={post.id}>
        <h3>{post.title}</h3>
        <div className="imageContainer">
          {post.images
            ? post.images.map((img) => <img key={img} src={img} />)
            : null}
        </div>
        <p>{post.description}</p>
        <iframe
          className="video"
          width="560"
          height="315"
          src={post.videoURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
    </article>
  );
};

export default VideoPostTemplate;

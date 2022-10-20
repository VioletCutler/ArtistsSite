import React from 'react'

const VideoPostTemplate = ({post}) => {
    return (
        <article key={post.id}>
        <h3>{post.title}</h3>
        <div className="imageContainer">
          {post.images
            ? post.images.map((img) => (
                <img key={img} src={img} />
              ))
            : null}
        </div>
        <p>{post.description}</p>
      </article>
    )

}

export default VideoPostTemplate
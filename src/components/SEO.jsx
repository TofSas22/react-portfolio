import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = "Tofiek Sasman - Portfolio",
  description = "Full-stack developer passionate about creating innovative web solutions. Explore my projects and skills in React, JavaScript, and modern web technologies.",
  keywords = "Tofiek Sasman, web developer, full-stack developer, React, JavaScript, portfolio, web development",
  author = "Tofiek Sasman",
  url = "https://tofieksasman.dev",
  image = "/profile-pic.jpeg",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Tofiek Sasman Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@tofieksasman" />
      
      {/* Additional SEO Tags */}
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  )
}

export default SEO
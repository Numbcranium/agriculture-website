import React, { useState } from "react";
import "../styles/Blog.css";

const samplePosts = [
  {
    id: 1,
    title:
      "Voluptates beatae necessitatibus assumenda repellendus rem ea laboriosam",
    author: "Arnaldo Corwin",
    date: "November 10, 2020",
    excerpt:
      "Voluptates beatae necessitatibus assumenda repellendus rem ea laboriosam Corporis velit necessitatibus totam doloribus nostrum optio.",
    image: "https://cdn.prod.website-files.com/6317f8c46ec1572a1239cf52/6317f8c46ec15726d939d041_markus-spiske-ZKNsVqbRSPE-unsplash-p-1080.jpeg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    author: "Clifford Armstrong",
    date: "November 10, 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatem debitis ut cupiditate deserunt.",
    image: "https://cdn.prod.website-files.com/6317f8c46ec1572a1239cf52/6317f8c46ec1579e5239d047_tania-malrechauffe-YExVOSrJRNI-unsplash-p-1080.jpeg",
  },
  {
    id: 3,
    title:
      "Similique adipisci ut quibusdam libero In sunt enim ea explicabo.",
    author: "Makenna Halvorson",
    date: "November 10, 2020",
    excerpt:
      "Similique adipisci ut quibusdam libero In sunt enim ea explicabo. Dolorem et et sunt sequi.",
    image: "https://cdn.prod.website-files.com/6317f8c46ec1572a1239cf52/6317f8c46ec157630c39d040_tony-pham-TV7m_tpmqhw-unsplash-p-800.jpeg",
  },
  {
    id: 4,
    title: "Amet eius architecto qui libero voluptatem",
    author: "Arnaldo Corwin",
    date: "November 10, 2020",
    excerpt:
      "Amet eius architecto qui libero voluptatem. Veniam deserunt dolores ut autem ipsam numquam quos repudiandae.",
    image: "https://cdn.prod.website-files.com/6317f8c46ec1572a1239cf52/6317f8c46ec157f9f139d04d_s-o-c-i-a-l-c-u-t-19F-IoAf73E-unsplash-p-1080.jpeg",
  },
  {
    id: 5,
    title: "Praesentium labore voluptates aut officiis amet molestiae",
    author: "Laila Bins",
    date: "November 10, 2020",
    excerpt:
      "Praesentium labore voluptates aut officiis amet molestiae. Quidem est voluptatem quisquam at dolorem repellendus.",
    image: "https://cdn.prod.website-files.com/6317f8c46ec1572a1239cf52/6317f8c46ec157630c39d040_tony-pham-TV7m_tpmqhw-unsplash-p-800.jpeg",
  },
];

const categories = [
  "Labore",
  "In Sed",
  "Dolores Amet Voluptas",
  "Et",
  "Ipsa Et",
];

function Blog() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Filter posts by search
  const filteredPosts = samplePosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="blog-page">
      <section className="blog-content">
        <h1 className="blog-title">Stay Updated With Our Latest News</h1>

        {/* Search Bar */}
        <div className="blog-search">
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // reset to page 1 on new search
            }}
          />
        </div>

        {paginatedPosts.map((post) => (
          <article key={post.id} className="post-preview">
            <div className="post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="post-content">
              <h2>{post.title}</h2>
              <div className="post-meta">
                {post.author} · {post.date}
              </div>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </article>
        ))}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Sidebar */}
      <aside className="blog-sidebar">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
        </div>
        <div className="sidebar-newsletter">
          <h3>Newsletter</h3>
          <p>
            Sign up for our newsletter. Fresh news, the best e-books, and many
            more.
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </aside>
    </main>
  );
}

export default Blog;

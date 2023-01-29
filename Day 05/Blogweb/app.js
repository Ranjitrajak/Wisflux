let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

const createBlog = () => {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let blog = { title: title, content: content };
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  displayBlogs();
};

const displayBlogs = () => {
  let blogsContainer = document.getElementById("blogs");
  let blogsHTML = "";
  blogs.forEach((blog, index) => {
    blogsHTML += `<div class="part">
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <button type="button" onclick="editBlog(${index})">Edit</button>
      <button type="button" onclick="deleteBlog(${index})">Delete</button>
    </div>`;
  });
  blogsContainer.innerHTML = blogsHTML;
};

const editBlog = (index) => {
  let title = prompt("Enter new title:", blogs[index].title);
  let content = prompt("Enter new content:", blogs[index].content);
  blogs[index].title = title;
  blogs[index].content = content;
  localStorage.setItem("blogs", JSON.stringify(blogs));
  displayBlogs();
};

const deleteBlog = (index) => {
  blogs.splice(index, 1);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  displayBlogs();
};

displayBlogs();

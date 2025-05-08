import { BlogPostDetail } from "@/components/blog-post-detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$blogId")({
  component: RouteComponent,
});

const blogPosts = [
  {
    id: 1,
    title: "10 Best Practices for Modern Web Development in 2023",
    excerpt:
      "Discover the essential best practices that will help you build more efficient, maintainable, and scalable web applications in 2023 and beyond.",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "8 min",
    comments: 24,
    content: `
      <p>The web development landscape is constantly evolving, with new tools, frameworks, and best practices emerging regularly. Staying up-to-date with these changes is crucial for building modern, efficient, and user-friendly web applications.</p>
      
      <h2>1. Embrace Modern JavaScript</h2>
      <p>Modern JavaScript (ES6+) offers numerous features that can make your code more readable, maintainable, and efficient. Features like arrow functions, destructuring, async/await, and modules can significantly improve your development experience.</p>
      
      <h2>2. Adopt TypeScript</h2>
      <p>TypeScript adds static typing to JavaScript, helping catch errors during development rather than at runtime. This can lead to more robust code and better developer experience, especially in larger projects.</p>
      
      <h2>3. Implement Responsive Design</h2>
      <p>With the increasing variety of devices used to access the web, responsive design is no longer optional. Use flexible layouts, CSS Grid, Flexbox, and media queries to ensure your application looks and functions well on all screen sizes.</p>
      
      <h2>4. Optimize Performance</h2>
      <p>Performance is a critical aspect of user experience. Implement techniques like code splitting, lazy loading, image optimization, and caching to ensure your application loads quickly and runs smoothly.</p>
      
      <h2>5. Prioritize Accessibility</h2>
      <p>Building accessible web applications ensures that everyone, including people with disabilities, can use your product. Follow WCAG guidelines, use semantic HTML, provide alternative text for images, and ensure keyboard navigation works properly.</p>
      
      <h2>6. Implement Progressive Web Apps (PWAs)</h2>
      <p>PWAs combine the best of web and mobile apps, offering features like offline functionality, push notifications, and home screen installation. Consider implementing PWA features to enhance user experience.</p>
      
      <h2>7. Use Component-Based Architecture</h2>
      <p>Breaking your UI into reusable components can improve code organization, maintainability, and reusability. Frameworks like React, Vue, and Angular are built around this concept.</p>
      
      <h2>8. Implement Automated Testing</h2>
      <p>Automated tests help catch bugs early and ensure your application continues to work as expected as you add new features. Implement unit, integration, and end-to-end tests as appropriate for your project.</p>
      
      <h2>9. Use Version Control Effectively</h2>
      <p>Version control systems like Git are essential for modern development workflows. Use feature branches, pull requests, and code reviews to maintain code quality and collaboration.</p>
      
      <h2>10. Implement Continuous Integration/Continuous Deployment (CI/CD)</h2>
      <p>CI/CD pipelines automate the process of testing and deploying your application, reducing the risk of human error and enabling more frequent releases.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these best practices, you can build web applications that are not only functional but also maintainable, performant, and accessible. Remember that the field of web development is constantly evolving, so it's important to stay updated with the latest trends and technologies.</p>
    `,
  },
  // Add more detailed blog posts here...
];
// TODO: Fix
function RouteComponent() {
  const { blogId } = Route.useParams();
  const post = blogPosts.find((post) => {
    return post.id === 1;
  });
  return (
    <main className="flex min-h-screen flex-col">
      {/* <BlogPostDetail post={post} /> */}
    </main>
  );
}

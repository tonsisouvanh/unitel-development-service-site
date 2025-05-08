"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BlogPostCard } from "@/components/blog-post-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock blog data - expanded with more posts
const blogPosts = [
  {
    id: "1",
    title: "10 Best Practices for Modern Web Development in 2023",
    excerpt:
      "Discover the essential best practices that will help you build more efficient, maintainable, and scalable web applications in 2023 and beyond.",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min",
    comments: 24,
  },
  {
    id: "2",
    title: "How AI is Transforming Software Development",
    excerpt:
      "Artificial Intelligence is revolutionizing how we build software. Learn how AI-powered tools can improve your development workflow and code quality.",
    date: "July 22, 2023",
    author: "Maria Garcia",
    category: "AI & Technology",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min",
    comments: 18,
  },
  {
    id: "3",
    title: "The Complete Guide to Mobile App Performance Optimization",
    excerpt:
      "Slow mobile apps lead to user frustration and abandonment. This comprehensive guide covers everything you need to know about optimizing your mobile app's performance.",
    date: "August 10, 2023",
    author: "David Kim",
    category: "Mobile Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "10 min",
    comments: 32,
  },
  {
    id: "4",
    title: "Microservices vs. Monoliths: Choosing the Right Architecture",
    excerpt:
      "The debate between microservices and monolithic architectures continues. We break down the pros and cons of each approach to help you make the right decision for your project.",
    date: "September 5, 2023",
    author: "Sarah Williams",
    category: "Architecture",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min",
    comments: 15,
  },
  {
    id: "5",
    title: "Securing Your Web Applications: A Developer's Guide",
    excerpt:
      "Security should never be an afterthought. Learn the essential techniques and practices to protect your web applications from common vulnerabilities and attacks.",
    date: "October 18, 2023",
    author: "James Chen",
    category: "Security",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "9 min",
    comments: 27,
  },
  {
    id: "6",
    title: "The Future of Frontend Development: What to Expect in 2024",
    excerpt:
      "Frontend development is evolving rapidly. Discover the emerging trends, tools, and technologies that will shape the future of frontend development in the coming year.",
    date: "November 3, 2023",
    author: "Emily Rodriguez",
    category: "Frontend",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min",
    comments: 21,
  },
  {
    id: "7",
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt:
      "Accessibility is crucial for creating inclusive web experiences. Learn how to build web applications that are accessible to everyone, including people with disabilities.",
    date: "November 20, 2023",
    author: "Michael Chen",
    category: "Accessibility",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "11 min",
    comments: 19,
  },
  {
    id: "8",
    title: "DevOps Best Practices for Small Teams",
    excerpt:
      "You don't need a large team to implement effective DevOps practices. This guide shows how small teams can leverage DevOps to improve their development workflow.",
    date: "December 7, 2023",
    author: "Jessica Martinez",
    category: "DevOps",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min",
    comments: 14,
  },
  {
    id: "9",
    title: "Introduction to WebAssembly for JavaScript Developers",
    excerpt:
      "WebAssembly is changing how we think about web performance. This introduction helps JavaScript developers understand and start using WebAssembly in their projects.",
    date: "January 15, 2024",
    author: "David Kim",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min",
    comments: 11,
  },
]

export function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="w-full py-12 md:py-24 bg-[#F5F5F5] dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 bg-white dark:bg-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 dark:text-[#F5F5F5]">No articles found</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Try adjusting your search query</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

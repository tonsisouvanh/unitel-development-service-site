import { fetchUsers } from "@/api/user.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { createFileRoute, Link, useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      page: Number(search.page) || 1,
    };
  },
  loaderDeps: ({ search: { page } }) => ({ page }), // Ensure loader re-runs when page changes
  loader: async ({ deps: { page } }) => fetchUsers(page),
});

function RouteComponent() {
  const { data: users, total_pages } = Route.useLoaderData<any>();
  const { page } = useSearch({ from: "/users/" });
  const getPageNumbers = () => {
    const maxPagesToShow = 5; // Show up to 5 page numbers at a time
    const pages: (number | "ellipsis")[] = [];
    const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(total_pages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis and first/last pages if needed
    if (startPage > 2) {
      pages.unshift("ellipsis", 1);
    } else if (startPage === 2) {
      pages.unshift(1);
    }
    if (endPage < total_pages - 1) {
      pages.push("ellipsis", total_pages);
    } else if (endPage === total_pages - 1) {
      pages.push(total_pages);
    }

    return pages;
  };

  return (
    <div className="p-4">
      {users.length === 0 ? (
        <p className="text-center text-muted-foreground">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user: any) => (
            <Card key={user.id}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                  />
                  <AvatarFallback>{`${user.first_name[0]}${user.last_name[0]}`}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">ID: {user.id}</p>
              </CardContent>
              <CardFooter>
                <Link to="/users/$userId" params={{ userId: String(user.id) }}>
                  <Button>Detail</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      {total_pages > 1 && (
        <div className="mt-6 mx-auto w-full">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <Link
                  to="/users"
                  search={{ page: page - 1 }}
                  disabled={page === 1}
                >
                  Back
                </Link>
              </PaginationItem>

              {/* Page Numbers */}
              {getPageNumbers().map((pageNumber, index) =>
                pageNumber === "ellipsis" ? (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={pageNumber}>
                    <Link
                      to="/users"
                      search={{ page: pageNumber }}
                      activeProps={{
                        className: `${page === pageNumber ? "text-red-500" : ""}`,
                      }}
                    >
                      {pageNumber}
                    </Link>
                  </PaginationItem>
                )
              )}

              {/* Next Button */}
              <PaginationItem>
                <Link
                  to="/users"
                  search={{ page: page + 1 }}
                  disabled={page === total_pages}
                >
                  Next
                </Link>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

// import { fetchUsers } from "@/api/user.api";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
// } from "@/components/ui/pagination";

// import { createFileRoute, Link } from "@tanstack/react-router";

// export const Route = createFileRoute("/users/")({
//   component: RouteComponent,
//   validateSearch: (search) => {
//     return {
//       page: search.page || 1,
//     };
//   },
//   loaderDeps: ({ search: { page } }) => page,
//   loader: async ({ deps: page }) => fetchUsers(page),
// });

// function RouteComponent() {
//   const users = Route.useLoaderData();
//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {users.data.map((user: any) => (
//           <Card key={user.id}>
//             <CardHeader className="flex flex-row items-center space-x-4">
//               <Avatar>
//                 <AvatarImage src={user.avatar} alt={user.first_name} />
//                 <AvatarFallback>{`${user.first_name[0]}${user.last_name[0]}`}</AvatarFallback>
//               </Avatar>
//               <div>
//                 <h3 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
//                 <p className="text-sm text-muted-foreground">{user.email}</p>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground">ID: {user.id}</p>
//             </CardContent>
//             <CardFooter>
//               <Link to="/users/$userId" params={{ userId: user.id }}>
//                 <Button>Detail</Button>
//               </Link>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//       <div className="mx-auto w-full">
//         <Pagination className="">
//           <PaginationContent>
//             <PaginationItem>
//               <Link to="/users" search={{ page: 1 }} />
//             </PaginationItem>
//             <PaginationItem>
//               <Link to="/users" search={{ page: 2 }}>
//                 2
//               </Link>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationEllipsis />
//             </PaginationItem>
//             <PaginationItem>
//               <Link to="/users" search={{ page: 2 }} />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </div>
//   );
// }

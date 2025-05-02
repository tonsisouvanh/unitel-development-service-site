import { AnimationProvider } from "./lib/provider/animation-provider";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </StrictMode>
);

// ##################################################################### //
// ############################## Original ############################# //
// ##################################################################### //
// import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createRouter } from "@tanstack/react-router";
// import "./index.css";
// // Import the generated route tree
// import { routeTree } from "./routeTree.gen";
// import { AnimationProvider } from "./lib/provider/animation-provider";

// // Create a new router instance
// const router = createRouter({ routeTree });

// // Register the router instance for type safety
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }

// // Render the app
// const rootElement = document.getElementById("root")!;
// if (!rootElement.innerHTML) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <AnimationProvider>
//         <RouterProvider router={router} />
//       </AnimationProvider>
//     </StrictMode>
//   );
// }

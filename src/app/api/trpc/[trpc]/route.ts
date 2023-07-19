import { fetchRequestHandler,FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
//import { createContext } from "@/server/context";
//import { createTRPCContext } from "@/server/api/trpc";
import { appRouter } from "@/server/api/root";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext: function (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> {
      return { ...opts,};
    } as any,
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
          console.error("Caught TRPC error:", error)
      }
  },
  });
}

export { handler as GET, handler as POST };
// export const GET = handler;
// export const POST = handler;


// import { authentication } from "@template/authentication";
// import { appRouter, createContextInner } from "@template/utility/trpc";
// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// import { cookies } from "next/headers";
// import { type NextRequest } from "next/server";

// const handler = (req: NextRequest) => {
//   return fetchRequestHandler({
//     req,
//     endpoint: "/api/trpc",
//     router: appRouter,
//     async createContext() {
//       const authenticationRequest = authentication.handleRequest({ request: req, cookies });

//       return createContextInner({
//         req,
//         session: await authenticationRequest.validateUser(),
//       });
//     },
//     onError:
//       process.env.NODE_ENV === "development"
//         ? ({ path, error }) => {
//             console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
//           }
//         : undefined,
//   });
// };

// export async function GET(request: NextRequest) {
//   return handler(request);
// }

// export async function POST(request: NextRequest) {
//   return handler(request);
// }
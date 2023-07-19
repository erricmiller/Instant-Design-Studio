"use client"
import { QueryClient, QueryClientProvider, Hydrate, dehydrate } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import { useState } from "react"
import superjson from "superjson"
import type { AppRouter } from "@/server/api/root"
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import RQqueryClient from './RQclient';


interface Props {
    children: React.ReactNode;
  }

  
export const api = createTRPCReact<AppRouter>()

function getBaseUrl() {
    if (typeof window !== "undefined") {
        // browser should use relative path
        return ""
    }
    if (process.env.VERCEL_URL) {
        // reference for vercel.com
        return `https://${process.env.VERCEL_URL}`
    }
    if (process.env.RENDER_INTERNAL_HOSTNAME) {
        // reference for render.com
        const port = process.env.PORT
        if (!port)
            throw new Error(
                "PORT is not set but RENDER_INTERNAL_HOSTNAME is set",
            )
        return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${port}`
    }
    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`
}

export function TrpcProvider({children}:Props) {
    const [queryClient] = useState(() =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        cacheTime: Infinity,
                        staleTime: Infinity,
                     // staleTime: 5 * 1000,
                    },
                },
            }),
    )
    const dehydratedState = dehydrate(queryClient);
    const [trpcClient] = useState(() =>
        api.createClient({
            links: [
                loggerLink({
                    enabled: () => true,
                }),
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
            transformer: superjson,
        }),
    )
    return (
        <api.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={RQqueryClient}>
            <Hydrate state={dehydratedState}>
                {children}
            </Hydrate>                
                {/* <ReactQueryDevtools initialIsOpen={true} /> */}
            </QueryClientProvider>
        </api.Provider>
    )
}
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
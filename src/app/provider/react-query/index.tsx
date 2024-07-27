
"use client";

import { PagePropsWithChildren } from "@/app/types/common";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function ReactQueryProvider({ children }: PagePropsWithChildren) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryOnMount: true,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  );
}

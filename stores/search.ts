import { defineStore, skipHydrate } from "pinia";
import { useStorage } from "@vueuse/core";

const getQueries = () => {
  const queries = localStorage.getItem("search_queries");
  return queries ? JSON.parse(queries) : [];
};

const useSearchQuery = defineStore("searchQuery", {
  state: () => ({
    queries: [] as string[],
  }),
  hydrate(state, initialState) {
    state.queries = getQueries();
  },
  actions: {
    updateQueries(query: string) {
      const repeatedQuery = this.queries.find((q) => q === query);
      if (!repeatedQuery) {
        if (this.queries.length === 10) {
          this.queries = [query, ...this.queries.slice(0, -1)];
        } else {
          this.queries = [query, ...this.queries];
        }
        localStorage.setItem("search_queries", JSON.stringify(this.queries));
      }
    },
    removeQuery(query: string) {
      this.queries = this.queries.filter((q) => q !== query);
      localStorage.setItem("search_queries", JSON.stringify(this.queries));
    },
  },
});

export default useSearchQuery;

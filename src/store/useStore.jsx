import { create } from "zustand";

export default create((set) => {
  //   let projectData;

  //   fetch("/projects.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       set({ projectData: data });
  //       console.log("Projects data fetched:", data);
  //     })
  //     .catch((error) => console.error("Error fetching projects data:", error));

  return {
    // Getters
    projectData: [],

    // Setters

    setProjectData: (data) => set({ projectData: data }),
  };
});

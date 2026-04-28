import { projects } from "@/lib/projects";
import { useSearchParams } from "next/navigation";
import { Employer } from "@/enums";
import { useEffect, useState } from "react";
import { filteredProjectsByQuery } from "@/lib/utils";

export default function useFilteredProjects() {
  const { get } = useSearchParams();
  const employerParam = get("employer") as Employer;
  const queryParam = get("query") as string;
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (employerParam) {
      setFilteredProjects(
        projects.filter((project) => project.employer === employerParam)
      );
    }

    if (queryParam) {
      setFilteredProjects(filteredProjectsByQuery(queryParam));
    }

    if (!employerParam && !queryParam) {
      setFilteredProjects(projects);
    }
  }, [employerParam, queryParam]);

  return {
    filteredProjects,
    setFilteredProjects,
  };
}

"use client";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 300);

  const handleSearch = (term: string) => {
    setValue(term);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedValue) {
      params.set("query", debouncedValue);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, [debouncedValue, pathname, replace, searchParams]);

  return (
    <>
      <Input
        placeholder="Search for react, node, sass, b2c, etc.."
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("query"?.toString()) || ""}
      />
    </>
  );
}

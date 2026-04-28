import type { NavList, RenderMenuItem } from "./types";

type MenuItemsProps<T> = {
  items: T[];
  renderMenuItem: RenderMenuItem<T>;
} & React.HTMLAttributes<HTMLUListElement>;

export default function NavList<T>({
  items,
  renderMenuItem,
  ...props
}: MenuItemsProps<T>) {
  return <ul {...props}>{items.map((item) => renderMenuItem(item))}</ul>;
}

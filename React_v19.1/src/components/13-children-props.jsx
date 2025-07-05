{
  /*
INFO: What is children in React ?
children refers to whatever you include between the opening and closing tags of a component when you use it.
*/
}

export function ChildrenProps({ children }) {
  return <div className="flex flex-col items-center">{children}</div>;
}
